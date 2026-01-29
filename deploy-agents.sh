#!/bin/bash

# Configuración
PROJECT_ID="experta-cloud-engine" # Reemplaza con tu ID real de GCP
REGION="us-central1"
REPO_NAME="persona-agents"

echo "🚀 Iniciando despliegue de agentes..."

# 1. Autenticación (asume que ya hiciste 'gcloud auth login')
gcloud config set project $PROJECT_ID

# 2. Crear repositorio de artefactos si no existe
gcloud artifacts repositories create $REPO_NAME \
    --repository-format=docker \
    --location=$REGION \
    --description="Docker repository for Persona Engine Agents" || true

# 3. Construir y subir imagen del Agente SEO (DaCoders)
echo "📦 Construyendo imagen: agent-seo..."
gcloud builds submit --tag $REGION-docker.pkg.dev/$PROJECT_ID/$REPO_NAME/agent-seo:latest docker/agent_seo

# 4. Crear/Actualizar el Cloud Run Job
echo "⚙️ Configurando Cloud Run Job: agent-seo-job..."
gcloud run jobs create agent-seo-job \
    --image $REGION-docker.pkg.dev/$PROJECT_ID/$REPO_NAME/agent-seo:latest \
    --region $REGION \
    --tasks 1 \
    --set-env-vars R2_BUCKET_NAME="experta-intelligence-hub" \
    --set-env-vars R2_ACCOUNT_ID="<TU_R2_ID>" \
    --set-env-vars R2_ACCESS_KEY_ID="<TU_R2_ACCESS_KEY>" \
    --set-env-vars R2_SECRET_ACCESS_KEY="<TU_R2_SECRET>" \
    --max-retries 0

echo "✅ Despliegue completado. El agente está listo para ser invocado desde Next.js."
