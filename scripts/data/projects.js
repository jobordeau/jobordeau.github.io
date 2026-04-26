/* ============================================
   PROJECTS DATA — Master & Professional
   ============================================
   Lumina is a featured section, not in this list.
   DUT projects are in early-projects.js.
   ============================================ */

export const projects = [
  {
    id: "trading",
    title: "Trading IA",
    subtitle: "Plateforme de décision pour traders",
    context: "Master · Projet académique",
    size: "large",
    categories: ["cloud", "ml", "devops"],
    description:
      "Web-app industrialisée sur GCP orchestrant prédictions ML court-terme, détection de patterns de chandeliers et analyse de sentiment multi-sources. Stack Terraform / Airflow / Kubernetes déployant API, backtesting et signaux en production.",
    tags: ["Python", "ASP.NET Core", "GCP", "Terraform", "Airflow", "Kubernetes", "CI/CD", "ML", "NLP"],
    image: "public/images/projects/trading.jpg",
    link: "https://github.com/Saytk/PA_2025_UPGRADED",
    linkType: "repo",
  },
  {
    id: "discord-stream",
    title: "Analyse Discord Temps Réel",
    subtitle: "Stream Processing PySpark",
    context: "Master",
    size: "medium",
    categories: ["bigdata", "streaming"],
    description:
      "Architecture Spark Streaming sur HDFS. Lecture de flux, création de vues temporaires et requêtes distribuées PySpark/Scala pour extraire les tendances Discord en temps réel.",
    tags: ["Python", "Scala", "PySpark", "Kafka", "Spark Streaming", "HDFS"],
    image: "public/images/projects/discord-trend.jpg",
    link: "https://github.com/jobordeau/SparkStreamingProject",
    linkType: "repo",
  },
  {
    id: "kafka-films",
    title: "Stream Processing Kafka",
    subtitle: "Statistiques de vues de films",
    context: "Master",
    size: "medium",
    categories: ["bigdata", "streaming"],
    description:
      "Pipeline de stream processing exploitant plusieurs topics Kafka en simultané. Transformation temps réel de flux hétérogènes en métriques BI exploitables.",
    tags: ["Java", "Kafka", "Streaming", "BI"],
    image: "public/images/projects/films-stream.jpg",
    link: "https://github.com/jobordeau/StatFilmKafka",
    linkType: "repo",
  },
  {
    id: "pond",
    title: "POND",
    subtitle: "Deep Reinforcement Learning",
    context: "Master",
    size: "medium",
    categories: ["ml"],
    description:
      "Benchmark d'agents DRL appliqué au jeu Pond. Étude comparative de plusieurs approches d'apprentissage par renforcement et de leurs régimes d'efficacité.",
    tags: ["Python", "DRL", "IA"],
    image: "public/images/projects/pond-rl.jpg",
    link: "https://github.com/Saytk/DeeplearningPond",
    linkType: "repo",
  },
];

export const projectFilters = [
  { id: "all",       label: "Tous" },
  { id: "cloud",     label: "Cloud" },
  { id: "bigdata",   label: "Big Data" },
  { id: "ml",        label: "Machine Learning" },
  { id: "streaming", label: "Streaming" },
  { id: "devops",    label: "DevOps" },
];
