// src/lib/gcp-auth.ts
import { GoogleAuth } from 'google-auth-library';

// Cachear el cliente para evitar re-instancias en serverless
let authClient: GoogleAuth | null = null;

export async function getGCPClient() {
  if (authClient) return authClient;

  // Si estamos en local y no hay credenciales, advertir
  if (!process.env.GCP_SERVICE_ACCOUNT_KEY_BASE64 && process.env.NODE_ENV === 'development') {
    console.warn("⚠️ No GCP Credentials found. Using Simulation Mode.");
    return null;
  }

  // Decodificar la key base64 (para evitar problemas de saltos de línea en Vercel)
  const keyFileContent = Buffer.from(
    process.env.GCP_SERVICE_ACCOUNT_KEY_BASE64 || '', 
    'base64'
  ).toString('utf-8');

  // Crear archivo temporal o pasar credenciales directamente
  const credentials = JSON.parse(keyFileContent);

  authClient = new GoogleAuth({
    credentials,
    scopes: ['https://www.googleapis.com/auth/cloud-platform'],
    projectId: process.env.GCP_PROJECT_ID,
  });

  return authClient;
}

export async function getCloudRunJobUrl(region: string, jobId: string) {
    // Formato estándar de la API de Cloud Run Jobs
    // projects/{project}/locations/{region}/jobs/{jobId}:run
    return `https://${region}-run.googleapis.com/apis/run.googleapis.com/v1/namespaces/${process.env.GCP_PROJECT_ID}/jobs/${jobId}:run`;
}
