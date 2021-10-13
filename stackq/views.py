from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.utils import json
from rest_framework.views import APIView
from django.conf import settings
from django.core.paginator import Paginator
# from stackq.models import StackQd
# from stackq.models import StackQs
from stackq import mongo_dbf
import requests as req
import sys


# Create your views here.


class SearchQuestions(APIView):
    def get_qs(self, params):

        param_str = '&'

        for name, param in params.items():
            param_str += name + '=' + param + '&'

        return param_str

    def get(self, request, format=None):

        params = request.GET.copy()

        if 'sort' not in params: params['sort'] = 'activity'
        if 'order' not in params: params['order'] = 'desc'

        data_page = 1
        data_limit = 10

        if 'data-page' in params:
            data_page = params['data-page']
            del params['data-page']

        if 'data-limit' in params:
            data_limit = params['data-limit']
            del params['data-limit']

        query_id = mongo_dbf.check_n_store_query(params)

        q_list = mongo_dbf.get_questions(query_id)

        data = []

        if q_list.count() > 0:
            print("Using cached data of param id - " + str(query_id), file=sys.stdout)

            for q in q_list:
                data.append(q['qData'])

        else:
            print("Fetching data for param id - " + str(query_id), file=sys.stdout)

            param_str = self.get_qs(params)

            api_end = settings.STACK_ENDPOINT + param_str

            resp = req.get(api_end)

            if resp.status_code == 200:
                content = resp.content

                j_obj = json.loads(content)

                try:
                    for item in j_obj['items']:
                        mongo_dbf.store_question(item, query_id)
                        data.append(item)
                except KeyError:
                    return Response({'result': "error", "message": "error processing the received data"})
            else:
                return Response({'result': "error", "message": "error fetching data from StackOverflow api"})

        p = Paginator(data, data_limit)
        p_data = p.page(data_page)

        return Response({"result": "success", "message": p_data.object_list,
                         "page": p.num_pages})
