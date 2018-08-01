# coding: utf-8
# pipenv run ipython -i ipythonsession.py
import boto3
session = boto3.Session(profile_name='admin')
s3 = session.resource('s3')

#for bucket in s3.buckets.all():
#    print(bucket)
