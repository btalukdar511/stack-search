from pymongo import MongoClient
from bson.objectid import ObjectId

import sys

Local_DB = 'stackQDB'

param_list = 'paramList'
questions_list = 'questionsList'


def db_connect():
    client = MongoClient('localhost', 27017)
    return client


def get_db():
    dbs = db_connect().list_database_names()

    if Local_DB in dbs:
        return db_connect().get_database(Local_DB)
    else:
        return False


def store_query(params):
    return get_db().get_collection(param_list).insert_one({"params": params}).inserted_id


def get_query(params):
    return get_db().get_collection(param_list).find({"params": params})


def store_question(question, query_id):
    return get_db().get_collection(questions_list).insert_one({"qData": question, "queryId": query_id})


def get_questions(query_id):
    return get_db().get_collection(questions_list).find({"queryId": ObjectId(query_id)})


def check_n_store_query(params):
    fr = get_db().get_collection(param_list).find_one({"params": params})

    if fr is not None and '_id' in fr:
        return fr['_id']
    else:
        return store_query(params)