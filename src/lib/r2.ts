import { S3Client, PutObjectCommand, GetObjectCommand } from "@aws-sdk/client-s3";

const R2 = new S3Client({
  region: "auto",
  endpoint: `https://${process.env.R2_ACCOUNT_ID}.r2.cloudflarestorage.com`,
  credentials: {
    accessKeyId: process.env.R2_ACCESS_KEY_ID || "",
    secretAccessKey: process.env.R2_SECRET_ACCESS_KEY || "",
  },
});

export async function uploadFile(key: string, body: any, contentType: string) {
  const command = new PutObjectCommand({
    Bucket: process.env.R2_BUCKET_NAME,
    Key: key,
    Body: body,
    ContentType: contentType,
  });
  return await R2.send(command);
}

export async function getReport(jobId: string) {
  try {
    const command = new GetObjectCommand({
      Bucket: process.env.R2_BUCKET_NAME,
      Key: `reports/${jobId}.json`, // Coincide con la ruta del Python script
    });

    const response = await R2.send(command);
    
    // Transformar el stream a string
    const str = await response.Body?.transformToString();
    if (!str) return null;
    
    return JSON.parse(str);
  } catch (error) {
    console.error(`Error fetching report ${jobId}:`, error);
    return null;
  }
}
