from rest_framework import serializers
from .models import Stackql, Stackqs


class QuestionSerializer(serializers.ModelSerializer):

    class Meta:
        model = Stackql
        fields = ('id', 'query')


class QuestionQuerySerializer(serializers.ModelSerializer):

    class Meta:
        model = Stackqs
        fields = ('id', 'query')