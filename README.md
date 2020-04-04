# Q4U

A virtual grocery store ticket queue system designed to minimize human contact and waiting times outside grocery stores. 

## [Backend application](backend/README.md)

Infrastruture is created using the Serverless Application Model (SAM) which simplifies AWS infrastructure creation and maintenance.

The frontend application is provided by using static hosting based on S3 and CloudFront.

## Frontend Infrastructure

The frontend infrastructure is a static serverless infrastruture using AWS S3 and CloudFront.

Deploying the file [frontend-cloudformation.yaml](frontend-cloudformation.yaml) using the CloudFormation console, or `aws cloudformation create-stack` command will create the necessary infrastructure, including DNS records and SSL certificates.
  
### How to deploy website contents

```shell script
aws s3 sync --delete ./<local path to contents> s3://<website-bucket>
aws cloudfront create-invalidation --distribution-id <cloudfront id> --paths '/*'
``` 