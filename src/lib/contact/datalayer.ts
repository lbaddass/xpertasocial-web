type DataLayerEvent = Record<string, unknown>;

export function pushDataLayer(event: DataLayerEvent) {
  if (typeof window === "undefined") return;
  const w = window as unknown as { dataLayer?: DataLayerEvent[] };
  w.dataLayer = w.dataLayer || [];
  w.dataLayer.push(event);
}
