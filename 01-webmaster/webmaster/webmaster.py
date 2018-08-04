#!/usr/bin/python
# -*- code: utf-8 -*-
from pathlib import Path

import boto3
from botocore.exceptions import ClientError

import click

#import sys
# click replaced it
# print(sys.argv)
#  | admin

session = boto3.Session(profile_name='default')
s3 = session.resource('s3')

@click.group()
def cli():
    """Webmaster deploys websites to AWS"""
    pass


@cli.command('list-buckets')
def list_buckets():
    """List all s3 buckets"""
    for bucket in s3.buckets.all():
        print(bucket)


@cli.command('list-bucket-objects')
@click.argument('bucket')
def list_bucket_objects(bucket):
    """List objects in an s3 bucket"""
    for obj in s3.Bucket(bucket).objects.all():
        print(obj)


@cli.command('setup-bucket')
@click.argument('bucket')
def setup_bucket(bucket):
    """Create and configure S3 bucket"""
    s3_bucket = None

    try:
        s3_bucket = s3.create_bucket(
           Bucket=bucket)
    except ClientError as e:
        if e.response['Error']['Code'] == 'BucketAlreadyOwnedByYou':
             s3_bucket = s3.Bucket(bucket)
        else:
         raise e

    policy = """
        {
          "Version": "2012-10-17",
           "Statement": [
                {
              "Sid": "PublicReadGetObject",
              "Effect": "Allow",
              "Principal": "*",
              "Action": "s3:GetObject",
              "Resource": ["arn:aws:s3:::%s/*"]
                   }
               ]
           }
    """  % s3_bucket.name
    policy = policy.strip()

    pol = s3_bucket.Policy()
    pol.put(Policy=policy)

    ws = s3_bucket.Website()
    ws.put(WebsiteConfiguration={ 'ErrorDocument': { 'Key': 'index.html' }, 'IndexDocument': { 'Suffix': 'index.html' } })
#    url = "https://%s.s3-website-us-east-2.amazonaws.com" % s3_bucket.name
    return


@cli.command('sync')
@click.argument('pathname', type=click.Path(exists=True))
def sync(pathname):
    """Sync conetents of Pathname to Bucket"""

    root = Path(pathname).expanduser().resolve()
    def handle_directory(target):
        for p in target.iterdir():
            if p.is_dir(): handle_directory(p)
            if p.is_file(): print("Path: {}\n Key: {}".format(p,p.relative_to(root)))

    handle_directory(root)

if __name__ == '__main__':
    cli()
