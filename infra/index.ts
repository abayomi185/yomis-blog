import * as cloudflare from '@pulumi/cloudflare';

const BUCKET_NAME = 'yomis-blog';

const apiToken = process.env.CLOUDFLARE_API_TOKEN!;

new cloudflare.Provider('cloudflare', {
  apiToken: apiToken
});

const yomisBlogBucket = new cloudflare.R2Bucket(BUCKET_NAME, {
  accountId: process.env.CLOUDFLARE_ACCOUNT_ID!,
  name: BUCKET_NAME,
  location: 'weur',
  storageClass: 'Standard'
});

new cloudflare.R2BucketCors(`${BUCKET_NAME}-cors-resource`, {
  accountId: process.env.CLOUDFLARE_ACCOUNT_ID!,
  bucketName: yomisBlogBucket.name,
  rules: [
    {
      allowed: {
        methods: ['GET'],
        origins: ['http://localhost:8788', 'https://yomis.blog', 'https://draft.yomis.blog']
      }
    }
  ]
});
