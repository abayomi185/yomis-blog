import * as cloudflare from '@pulumi/cloudflare';

const BUCKET_NAME = 'yomis-blog';

const apiToken = process.env.CLOUDFLARE_API_TOKEN!;
const zoneId = process.env.CLOUDFLARE_ZONE_ID!;
const domain = process.env.CLOUDFLARE_R2_URL!;

export const ALLOWED_ORIGINS = [
  'http://localhost:4321',
  'https://yomis.blog',
  'https://draft.yomis.blog'
];

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
        origins: ALLOWED_ORIGINS
      }
    }
  ]
});

new cloudflare.R2CustomDomain(`${BUCKET_NAME}-domain-resource`, {
  accountId: process.env.CLOUDFLARE_ACCOUNT_ID!,
  bucketName: yomisBlogBucket.name,
  domain: domain.replace('https://', ''),
  enabled: true,
  zoneId
});
