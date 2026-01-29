import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';

export interface PersonaTarget {
  id: string;
  name: string;
  role: string;
  description: string;
  avatar_color: string;
  capabilities: string[];
  job_config: {
    gcp_job_name: string;
    cpu: string;
    memory: string;
  };
}

export interface ManifestData {
  version: string;
  project: string;
  targets: PersonaTarget[];
}

export function getManifest(): ManifestData {
  try {
    // La ruta se resuelve desde la raíz del proyecto en ejecución
    const filePath = path.join(process.cwd(), 'config', 'manifest.yaml');
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const data = yaml.load(fileContents) as ManifestData;
    return data;
  } catch (e) {
    console.error("Error loading manifest.yaml:", e);
    // Fallback de seguridad por si el archivo no existe o falla
    return {
      version: "0.0",
      project: "Error Loading Manifest",
      targets: []
    };
  }
}
