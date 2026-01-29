// src/types/report.ts

export interface AgentReport {
  meta: {
    job_id: string;
    target_id: string; // ej: 'posiblex_creative'
    timestamp: string;
    status: 'SUCCESS' | 'WARNING' | 'FAILURE';
  };
  visuals: {
    summary_text: string;
    kpi_cards: Array<{ label: string; value: string; trend?: 'up'|'down' }>;
    main_asset?: { type: 'image'|'video'|'code'; url: string };
    gallery?: Array<{ url: string; caption: string }>;
  };
  actions: Array<{
    action_id: string; // ej: 'deploy_production'
    label: string;
    endpoint_url: string; // Url del webhook para ejecutar
    requires_confirmation: boolean;
  }>;
}
