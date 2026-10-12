export interface ProductConcept {
  id: string;
  name: string;
  category: string;
  description: string;
  status: string;
  tags: string[];
  colors: string;
  themeVisual: 'nova-agrisense' | 'grocloud' | 'smart-farm' | 'ai-control-plane' | 'agribridge';
}

export const productConceptsData: ProductConcept[] = [
  {
    id: "nova-agrisense",
    name: "Nova AgriSense",
    category: "Agricultural analytics",
    description: "Turns farm and production records into yield, crop-mix, seasonal and regional dashboards, reports and data-quality checks. Designed with robust spatial querying and structured schemas to eliminate agricultural reporting blindspots.",
    status: "Specification stage (v1.0)",
    tags: ["Next.js", "PostgreSQL", "PostGIS", "Analytics"],
    colors: "deep green and earth brown",
    themeVisual: "nova-agrisense"
  },
  {
    id: "grocloud",
    name: "GroCloud",
    category: "Environmental monitoring",
    description: "Collects sensor data from greenhouses and farms, shows live and historical charts, and raises alerts, always labelling live, historical, manual and simulated data. Provides strict data provenance across microclimate measurements.",
    status: "Specification stage (v1.0)",
    tags: ["MQTT", "Time-series", "IoT", "Alerts"],
    colors: "botanical green and soft blue",
    themeVisual: "grocloud"
  },
  {
    id: "smart-farm-management",
    name: "Smart Farm Management",
    category: "Farm operations",
    description: "Mobile-first, offline-tolerant app for fields, crop plans, tasks, input stock, labour, expenses and harvest records. Engineered for intermittent rural connectivity with local-first replication and transaction queueing.",
    status: "Specification stage (v1.0)",
    tags: ["PWA", "NestJS", "PostgreSQL", "Offline sync"],
    colors: "forest green and neutral",
    themeVisual: "smart-farm"
  },
  {
    id: "ai-operations-control-plane",
    name: "AI Operations Control Plane",
    category: "AI agent governance",
    description: "Traces, cost tracking, evaluations, human approval of sensitive actions and tamper-evident audit logs for AI agents. Formulated to provide end-to-end security compliance and operational visibility across autonomous model workflows.",
    status: "Specification stage (v1.0)",
    tags: ["Observability", "Evaluation", "Security", "SaaS"],
    colors: "charcoal and blue",
    themeVisual: "ai-control-plane"
  },
  {
    id: "agribridge-gambia",
    name: "AgriBridge Gambia (working name)",
    category: "Agricultural marketplace",
    description: "Connects farmers, cooperatives and buyers with verified listings, supply-and-demand visibility and price intelligence. Architected to eliminate value chain opacity and build transparent direct market access across The Gambia.",
    status: "Specification stage (v1.0)",
    tags: ["Marketplace", "Verification", "Search", "REST API"],
    colors: "agricultural green and warm neutral",
    themeVisual: "agribridge"
  }
];
