/* ============================================
   LUMINA — FEATURED PROJECT
   ============================================ */
export const lumina = {
  title: "LUMINA",
  subtitle: "Architecture d'intégration cloud-native sur Azure",
  kicker: "// projet",
  description:
    "Plateforme E-Commerce serverless event-driven déployée intégralement par Terraform sur Microsoft Azure. Une commande HTTP traverse APIM, est validée puis publiée sur un Topic Service Bus, traitée par une Function .NET 8, persistée dans un Data Lake Gen2, convertie en Parquet par Data Factory, puis exposée à Microsoft Fabric en Zero-Copy via Shortcut. Le pattern DLQ avec Event Grid → Logic Apps garantit la résilience et l'observabilité bout-en-bout.",

  highlights: [
    "Event-driven · APIM + Service Bus + Event Grid",
    "Passwordless · Managed Identity + RBAC granulaire",
    "Zero-Copy Fabric · Shortcut sur l'ADLS Gen2",
    "Resilience · Dead-Letter Queue + Logic App email",
    "100% Infrastructure-as-Code · Terraform HCL",
    "CI/CD GitHub Actions · build + deploy automatisés",
  ],

  stack: [
    "Azure",
    "APIM",
    "Service Bus",
    "Functions",
    ".NET 8",
    "Terraform",
    "Fabric",
    "Spark",
    "ADLS Gen2",
    "Event Grid",
    "Logic Apps",
    "GitHub Actions",
  ],

  // 3 screenshots will live here once provided
  screens: [
    {
      src: "public/images/projects/lumina-architecture.png",
      alt: "Diagramme architecture Lumina — vue d'ensemble en 3 couloirs",
      caption: "Architecture · 3 flux séparés et leurs ressources Azure",
    },
    {
      src: "public/images/projects/lumina-demo.png",
      alt: "Démo live Lumina — scénario DLQ avec event log et payload inspector",
      caption: "Démo live · vrais appels HTTP vers l'APIM déployé",
    },
    {
      src: "public/images/projects/lumina-analytics.png",
      alt: "Dashboard Analytics Lumina — KPIs calculés par notebook PySpark Fabric",
      caption: "Analytics · KPIs calculés par Spark, exposés en JSON",
    },
  ],

  links: {
    demo: "https://lumina-web-demo-kappa.vercel.app/",
    repo: "https://github.com/jobordeau/Lumina-Integration-POC",
  },
};
