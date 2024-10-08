import fs from 'fs';
import path from 'path';
import { PutObjectCommand, S3Client } from '@aws-sdk/client-s3';
import * as pulumi from '@pulumi/pulumi';

const BUCKET_NAME = 'yomis-blog';
const PULUMI_STACK_NAME = 'yomis-blog';

const pulumiConfig = new pulumi.Config();

// console.log('pulumiConfig', pulumiConfig);
console.log('pulumiCloudflareConfig', pulumiConfig.requireSecret('apiToken'));
console.log('pulumiCloudflareConfig', pulumiConfig.get('accountId'));

// const getPulumiSecrets = async (): Promise<{
//   accountId: string;
//   secretAccessKey: string;
//   accessKeyId: string;
// }> => {
//   // Define the Pulumi stack options
//   const stackName = 'yomis-blog';
//   const pulumiOrg = 'your-org-name';
//   const projectName = 'your-project-name';
//
//   // Create a Pulumi stack reference
//   const stackReference = new pulumi.StackReference(`${pulumiOrg}/${projectName}/${stackName}`);
//
//   // Retrieve secrets from the stack
//   const accessKey = stackReference.requireOutput('r2AccessKey').apply((secret) => secret as string);
//   const secretKey = stackReference.requireOutput('r2SecretKey').apply((secret) => secret as string);
//   const endpoint = stackReference.requireOutput('r2Endpoint').apply((secret) => secret as string);
//
//   return {
//     accountId: await accessKey,
//     secretAccessKey: await secretKey,
//     accessKeyId: await endpoint
//   };
// };
//
// const uploadDirectory = async (directoryPath: string, bucketName: string) => {
//   // Get secrets using Pulumi
//   const { accountId, secretAccessKey, accessKeyId } = await getPulumiSecrets();
//
//   // Configure AWS SDK with credentials and endpoint for Cloudflare R2
//   const s3 = new S3Client({
//     region: 'auto',
//     endpoint: `https://${accountId}.r2.cloudflarestorage.com`,
//     credentials: {
//       accessKeyId: accessKeyId,
//       secretAccessKey: secretAccessKey
//     }
//   });
//
//   // Read files from directory
//   const files = fs.readdirSync(directoryPath);
//
//   // Iterate through each file
//   for (const file of files) {
//     const filePath = path.join(directoryPath, file);
//     const fileContent = fs.readFileSync(filePath);
//     const uploadParams = {
//       Bucket: bucketName,
//       Key: file,
//       Body: fileContent
//     };
//
//     try {
//       // Upload file to R2
//       await s3.upload(uploadParams).promise();
//       console.log(`Uploaded: ${file}`);
//     } catch (err) {
//       console.error(`Failed to upload ${file}:`, err);
//     }
//   }
// };
//
// // Settings
// const args = process.argv.slice(2);
//
// const directory = args[0]; // First argument
//
// uploadDirectory(directory, BUCKET_NAME);
