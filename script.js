/* ============================================
   JOVANN BORDEAU — PORTFOLIO
   Vanilla JS (ES6+) — Zero framework
   ============================================ */

/* ============================================
   1. DATA LAYER
   ============================================ */
const portfolioData = {

  profile: {
    name: "Jovann Bordeau",
    title: "Data Engineer",
    email: "jbordeau2@myges.fr",
    phone: "+33 6 51 21 83 57",
    location: "Paris & Île-de-France",
    nationality: "Française",
    license: "Permis B",
    github: "https://github.com/jobordeau",
    linkedin: "https://www.linkedin.com/in/jovann-bordeau-8a526b207/",
    cv: "CV_Jovann_Bordeau.pdf",
    certification: "Microsoft Certified · DP-700 Fabric Data Engineer",
    rncp: "RNCP 7 · Expert en ingénierie de l'IA",
    featuredStack: ["Python", "SQL", "Spark", "Azure", "Databricks", "C#"],
    tagline: "Je conçois des pipelines de données robustes et des architectures cloud-native qui transforment la donnée brute en valeur métier mesurable.",
    toeic: "TOEIC 790",
  },

  nav: [
    { label: "Stack",     href: "#skills" },
    { label: "Projets",   href: "#projects" },
    { label: "Parcours",  href: "#experience" },
    { label: "Contact",   href: "#contact" },
  ],

  /* ---- SKILLS ---- */
  skills: [
    {
      category: "Big Data & Data Engineering",
      kicker: "Pipelines",
      icon: "BD",
      span: "wide",
      tags: ["Microsoft Fabric", "Spark", "Kafka", "Hadoop", "Airflow", "ETL/ELT", "PySpark", "Databricks"],
    },
    {
      category: "Cloud & DevOps",
      kicker: "Infra-as-code",
      icon: "CL",
      span: "half",
      tags: ["Azure", "AWS", "GCP", "Docker", "Kubernetes", "Terraform", "CI/CD", "Linux"],
    },
    {
      category: "Intelligence Artificielle",
      kicker: "ML / DL / NLP",
      icon: "AI",
      span: "third",
      tags: ["Machine Learning", "Deep Learning", "NLP", "Reinforcement Learning"],
    },
    {
      category: "Langages",
      kicker: "Code",
      icon: "{ }",
      span: "third",
      tags: ["Python", "SQL", "T-SQL", "KQL", "Scala", "C# / .NET", "Java", "C++"],
    },
    {
      category: "Bases de données",
      kicker: "Stockage",
      icon: "DB",
      span: "third",
      tags: ["SQL Server", "PostgreSQL", "BigQuery", "Oracle", "MariaDB", "NoSQL"],
    },
  ],

  /* ---- PROJECTS ---- */
  projects: [
    {
      id: 1,
      title: "LUMINA Integration POC",
      subtitle: "Plateforme E-Commerce Cloud-Native",
      context: "Master · Autodidacte",
      size: "large",
      categories: ["cloud", "bigdata", "devops"],
      description: "Architecture serverless event-driven sur Azure. Ingestion asynchrone, routage de messages et pipeline Data Engineering Zero-Copy intégralement provisionné par Terraform. Industrialisation CI/CD de bout en bout.",
      tags: ["Azure", "Terraform", "Fabric", "Spark", "C#", ".NET", "CI/CD"],
      image: "images/lumina.jpg",
      link: "https://github.com/jobordeau/Lumina-Integration-POC",
      linkType: "repo",
    },
    {
      id: 2,
      title: "Trading IA",
      subtitle: "Plateforme de décision pour traders",
      context: "Master · Projet académique",
      size: "large",
      categories: ["cloud", "ml", "devops"],
      description: "Web-app industrialisée sur GCP orchestrant prédictions ML court-terme, détection de patterns de chandeliers et analyse de sentiment multi-sources. Stack Terraform / Airflow / Kubernetes déployant API, backtesting et signaux en production.",
      tags: ["Python", "ASP.NET Core", "GCP", "Terraform", "Airflow", "Kubernetes", "CI/CD", "ML", "NLP"],
      image: "images/trading.jpg",
      link: "https://github.com/Saytk/PA_2025_UPGRADED",
      linkType: "repo",
    },
    {
      id: 6,
      title: "NBA Data Analytics",
      subtitle: "Dashboard interactif Elasticsearch",
      context: "Master",
      size: "large",
      categories: ["bigdata", "ml", "streaming"],
      description: "Pipeline complet d'exploration de données NBA : ingestion, requêtes ES|QL avancées, orchestration de jobs ML et restitution dans un dashboard Kibana interactif multi-vues.",
      tags: ["Elasticsearch", "Kibana", "ES|QL", "Machine Learning", "BI"],
      image: "images/nba.jpg",
      link: "ESGI_SuiteElastic-NBA_E1_08-25-16.03.04_Projetelasticsearchv2.pdf",
      linkType: "pdf",
    },
    {
      id: 7,
      title: "Analyse Discord Temps Réel",
      subtitle: "Stream Processing PySpark",
      context: "Master",
      size: "medium",
      categories: ["bigdata", "streaming"],
      description: "Architecture Spark Streaming sur HDFS. Lecture de flux, création de vues temporaires et requêtes distribuées PySpark/Scala pour extraire les tendances Discord en temps réel.",
      tags: ["Python", "Scala", "PySpark", "Kafka", "Spark Streaming", "HDFS"],
      image: "images/discord-trend.jpg",
      link: "https://github.com/jobordeau/SparkStreamingProject",
      linkType: "repo",
    },
    {
      id: 4,
      title: "Stream Processing Kafka",
      subtitle: "Statistiques de vues de films",
      context: "Master",
      size: "medium",
      categories: ["bigdata", "streaming"],
      description: "Pipeline de stream processing exploitant plusieurs topics Kafka en simultané. Transformation temps réel de flux hétérogènes en métriques BI exploitables.",
      tags: ["Java", "Kafka", "Streaming", "BI"],
      image: "images/films-stream.jpg",
      link: "https://github.com/jobordeau/StatFilmKafka",
      linkType: "repo",
    },
    {
      id: 5,
      title: "Classification de Compositeurs",
      subtitle: "ML end-to-end sur Databricks",
      context: "Master",
      size: "medium",
      categories: ["cloud", "ml", "bigdata"],
      description: "Projet de classification supervisée déployé intégralement sur Databricks. Industrialisation complète de l'ingestion à l'inférence dans un environnement cloud managé.",
      tags: ["Databricks", "Machine Learning", "Big Data", "Cloud"],
      image: "images/databricks-ml.jpg",
      link: "Slides_projet.pdf",
      linkType: "pdf",
    },
    {
      id: 3,
      title: "POND",
      subtitle: "Deep Reinforcement Learning",
      context: "Master",
      size: "medium",
      categories: ["ml"],
      description: "Benchmark d'agents DRL appliqué au jeu Pond. Étude comparative de plusieurs approches d'apprentissage par renforcement et de leurs régimes d'efficacité.",
      tags: ["Python", "DRL", "IA"],
      image: "images/pond-rl.jpg",
      link: "https://github.com/Saytk/DeeplearningPond",
      linkType: "repo",
    },
    {
      id: 8,
      title: "Mobile Market Analysis",
      subtitle: "Profils d'apps rentables",
      context: "Autodidacte",
      size: "small",
      categories: ["notebook", "ml"],
      description: "Analyse exploratoire des stores App Store et Google Play. Identification data-driven des profils d'applications mobiles à fort potentiel de rentabilité.",
      tags: ["Python", "Jupyter", "Data Analysis"],
      image: "images/notebook.png",
      link: "https://github.com/jobordeau/mobile-app-market-analysis",
      linkType: "repo",
    },
    {
      id: 9,
      title: "Bovie Track",
      subtitle: "Bibliothèque multimédia C#",
      context: "DUT",
      size: "small",
      categories: ["web"],
      description: "Gestionnaire de bibliothèque personnelle de films et séries en C#/.NET. Suivi de visionnage, gestion des statuts et persistance locale.",
      tags: ["C#", ".NET"],
      image: "images/bovie-track.jpg",
      link: "https://github.com/jobordeau/bovie_track",
      linkType: "repo",
    },
    {
      id: 10,
      title: "VR Golf",
      subtitle: "Simulation 3D physique",
      context: "DUT",
      size: "small",
      categories: ["web"],
      description: "Simulation 3D d'une partie de mini-golf avec physique réaliste via BEPUphysics et MonoGame. Progression par niveaux et gameplay complet.",
      tags: ["C#", "MonoGame", "BEPUphysics"],
      image: "images/vr-golf.jpg",
      link: "https://github.com/jobordeau/projet_rv_golf",
      linkType: "repo",
    },
    {
      id: 11,
      title: "Todo List Web",
      subtitle: "App MVC PHP",
      context: "DUT",
      size: "small",
      categories: ["web"],
      description: "Application web de gestion de tâches bâtie sur une architecture MVC. Persistance MySQL et gestion fine des erreurs.",
      tags: ["PHP", "MySQL", "Bootstrap"],
      image: "images/todo-list.jpg",
      link: "https://github.com/jobordeau/todo-list-php",
      linkType: "repo",
    },
  ],

  filters: [
    { id: "all",       label: "Tous" },
    { id: "cloud",     label: "Cloud" },
    { id: "bigdata",   label: "Big Data" },
    { id: "ml",        label: "Machine Learning" },
    { id: "streaming", label: "Streaming" },
    { id: "devops",    label: "DevOps" },
    { id: "notebook",  label: "Notebook" },
    { id: "web",       label: "Dev Web" },
  ],

  /* ---- TIMELINE ---- */
  timeline: [
    {
      type: "exp",
      period: "2023 — 2025",
      title: "Data & IA Engineer — Alternance",
      org: "Visiodent · Clichy",
      description: "Développement sur le logiciel Veasy. Pilotage de migrations de données et conception d'une IA d'assistance personnalisée pour les utilisateurs finaux.",
      tags: ["C# / .NET", "Python", "Data Migration", "IA"],
    },
    {
      type: "exp",
      period: "2022",
      title: "Stage Développeur C++",
      org: "Genymobile · Lyon",
      description: "Implémentation en C++ du chargement et de l'analyse de fichiers KML pour la lecture de traces GPS sur émulateur Android.",
      tags: ["C++", "Android", "GPS"],
    },
    {
      type: "exp",
      period: "2021",
      title: "Stage Développeur",
      org: "Socipar · Le Lamentin (Martinique)",
      description: "Conception de deux logiciels de gestion métier sous WinDev pour les besoins opérationnels de l'entreprise.",
      tags: ["WinDev", "Gestion"],
    },
    {
      type: "edu",
      period: "2023 — 2025",
      title: "Mastère Intelligence Artificielle et Big Data — RNCP 7",
      org: "ESGI Paris",
      description: "Formation avancée en architectures distribuées, Machine Learning, cloud et Data Engineering.",
      tags: ["Big Data", "IA", "Cloud"],
    },
    {
      type: "edu",
      period: "2022 — 2023",
      title: "Bachelor Intelligence Artificielle et Big Data — RNCP 6",
      org: "ESGI Paris",
      description: "Socle technique en Data Science, traitements distribués et développement back-end.",
      tags: ["Python", "SQL", "Data"],
    },
    {
      type: "edu",
      period: "2019 — 2022",
      title: "DUT Informatique",
      org: "IUT Clermont-Ferrand",
      description: "Formation technique complète en développement, bases de données et génie logiciel.",
      tags: ["Dev", "SQL", "Génie logiciel"],
    },
    {
      type: "edu",
      period: "2019",
      title: "Baccalauréat Scientifique",
      org: "Nemours · Option SI / ISN",
      description: "Sciences de l'ingénieur et spécialité informatique et sciences du numérique.",
      tags: ["Scientifique"],
    },
  ],
};

/* ============================================
   2. DOM RENDERING
   ============================================ */

/* --- Nav --- */
function renderNav() {
  const container = document.getElementById("nav-links");
  container.innerHTML = portfolioData.nav
    .map(item => `<a href="${item.href}">${item.label}</a>`)
    .join("");
}

/* --- Hero --- */
function renderHero() {
  const p = portfolioData.profile;

  document.getElementById("hero-title").innerHTML = `
    <span class="outline">Jovann BORDEAU</span><br>
    <span class="gradient">${p.title}</span>
  `;

  document.getElementById("hero-tagline").textContent = p.tagline;

  document.getElementById("hero-stack").innerHTML = `
    <span class="hero-stack__label">Core stack</span>
    <div class="hero-stack__chips">
      ${p.featuredStack.map(t => `<span class="hero-stack__chip">${t}</span>`).join("")}
    </div>
  `;

  document.getElementById("hero-ctas").innerHTML = `
    <a href="#contact" class="btn btn--primary">
      Me contacter <span class="btn__arrow">→</span>
    </a>
    <a href="${p.cv}" target="_blank" rel="noopener" class="btn btn--ghost">
      Télécharger le CV
    </a>
  `;

  document.getElementById("cert-badge").innerHTML = `
    <div class="cert-badge__img-wrap">
      <img src="images/dp-700.png" alt="Microsoft DP-700 Certification" class="cert-badge__img" />
    </div>
    <div class="cert-badge__text">
      <span class="cert-badge__kicker">Microsoft Certified</span>
      <span class="cert-badge__title">Fabric Data Engineer Associate</span>
      <span class="cert-badge__code">DP-700 · Certified</span>
    </div>
  `;

  document.getElementById("rncp-badge").innerHTML = `
    <span class="rncp-badge__kicker">Diplôme RNCP 7</span>
    <span class="rncp-badge__title">Expert en ingénierie de l'IA</span>
    <span class="rncp-badge__sub">ESGI Paris · Mastère</span>
  `;
}

/* --- Facts strip (under hero) --- */
function renderFactsStrip() {
  const p = portfolioData.profile;
  const facts = [
    { label: "Expérience",    value: "3 ans en alternance" },
    { label: "Localisation",  value: p.location },
    { label: "Anglais",       value: p.toeic },
    { label: "Permis",        value: p.license },
    { label: "Nationalité",   value: p.nationality },
    { label: "Disponibilité", value: "Ouvert" },
  ];

  document.getElementById("facts-strip").innerHTML = facts
    .map(f => `
      <div class="fact">
        <span class="fact__label">${f.label}</span>
        <span class="fact__value">${f.value}</span>
      </div>
    `)
    .join("");
}

/* --- Skills Bento --- */
function renderSkills() {
  const container = document.getElementById("skills-bento");
  container.innerHTML = portfolioData.skills
    .map((skill, i) => `
      <article class="skill-card reveal" data-span="${skill.span}">
        <div class="skill-card__head">
          <div class="skill-card__icon">${skill.icon}</div>
          <span class="skill-card__num">${String(i + 1).padStart(2, "0")} / ${portfolioData.skills.length}</span>
        </div>
        <div class="skill-card__kicker">${skill.kicker}</div>
        <h3 class="skill-card__title">${skill.category}</h3>
        <div class="skill-card__tags">
          ${skill.tags.map(t => `<span class="skill-card__tag">${t}</span>`).join("")}
        </div>
      </article>
    `)
    .join("");
}

/* --- Project Filters --- */
function renderFilters() {
  const container = document.getElementById("projects-filters");
  container.innerHTML = portfolioData.filters
    .map(f => {
      const count = f.id === "all"
        ? portfolioData.projects.length
        : portfolioData.projects.filter(p => p.categories.includes(f.id)).length;
      return `
        <button class="filter-btn ${f.id === "all" ? "is-active" : ""}" data-filter="${f.id}">
          ${f.label}<span class="filter-btn__count">${count}</span>
        </button>
      `;
    })
    .join("");
}

/* --- Projects Grid --- */
function renderProjects() {
  const container = document.getElementById("projects-grid");
  container.innerHTML = portfolioData.projects
    .map(p => {
      const isPdf = p.linkType === "pdf";
      const linkLabel = isPdf ? "Voir le document PDF" : "Voir le projet";
      const linkAttrs = isPdf
        ? `href="${p.link}" target="_blank" rel="noopener" download data-kind="pdf"`
        : `href="${p.link}" target="_blank" rel="noopener" data-kind="repo"`;

      return `
        <article class="project-card reveal"
                 data-size="${p.size}"
                 data-categories="${p.categories.join(",")}">
          <div class="project-card__media">
            <img src="${p.image}" alt="${p.title}" class="project-card__img" loading="lazy" />
          </div>
          <div class="project-card__body">
            <div class="project-card__header">
              <span class="project-card__context">${p.context}</span>
              <span class="project-card__id">#${String(p.id).padStart(2, "0")}</span>
            </div>
            <h3 class="project-card__title">${p.title}</h3>
            <p class="project-card__desc">${p.description}</p>
            <div class="project-card__tags">
              ${p.tags.map(t => `<span class="project-card__tag">${t}</span>`).join("")}
            </div>
            <a class="project-card__link" ${linkAttrs}>
              ${linkLabel} <span>→</span>
            </a>
          </div>
        </article>
      `;
    })
    .join("");
}

/* --- Timeline (split in two columns) --- */
function renderTimeline() {
  const expContainer = document.getElementById("timeline-exp");
  const eduContainer = document.getElementById("timeline-edu");

  const buildItem = (item) => `
    <div class="tl-item reveal" data-type="${item.type}">
      <span class="tl-item__period">${item.period}</span>
      <h3 class="tl-item__title">${item.title}</h3>
      <div class="tl-item__org">${item.org}</div>
      <p class="tl-item__desc">${item.description}</p>
      <div class="tl-item__tags">
        ${item.tags.map(t => `<span class="tl-item__tag">${t}</span>`).join("")}
      </div>
    </div>
  `;

  expContainer.innerHTML = portfolioData.timeline
    .filter(i => i.type === "exp")
    .map(buildItem)
    .join("");

  eduContainer.innerHTML = portfolioData.timeline
    .filter(i => i.type === "edu")
    .map(buildItem)
    .join("");
}

/* --- Footer --- */
function renderFooter() {
  const p = portfolioData.profile;
  document.getElementById("footer-year").textContent = new Date().getFullYear();

  document.getElementById("footer-actions").innerHTML = `
    <button class="btn btn--primary" id="copy-email-btn">
      <span id="copy-email-text">${p.email}</span>
    </button>
    <a href="${p.github}" target="_blank" rel="noopener" class="btn btn--ghost">GitHub ↗</a>
    <a href="${p.linkedin}" target="_blank" rel="noopener" class="btn btn--ghost">LinkedIn ↗</a>
  `;
}

/* ============================================
   3. INTERACTIONS
   ============================================ */

function initFilters() {
  const buttons = document.querySelectorAll(".filter-btn");
  const cards = document.querySelectorAll(".project-card");

  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      const filter = btn.dataset.filter;

      buttons.forEach(b => b.classList.remove("is-active"));
      btn.classList.add("is-active");

      cards.forEach(card => {
        const cats = card.dataset.categories.split(",");
        const show = filter === "all" || cats.includes(filter);
        if (show) {
          card.classList.remove("is-hidden");
          requestAnimationFrame(() => {
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";
          });
        } else {
          card.style.opacity = "0";
          card.style.transform = "translateY(10px)";
          setTimeout(() => card.classList.add("is-hidden"), 300);
        }
      });
    });
  });
}

function initCopyEmail() {
  const btn = document.getElementById("copy-email-btn");
  const text = document.getElementById("copy-email-text");
  const email = portfolioData.profile.email;
  const original = text.textContent;

  btn.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(email);
      btn.classList.add("is-copied");
      text.textContent = "✓ Email copié";
      setTimeout(() => {
        btn.classList.remove("is-copied");
        text.textContent = original;
      }, 2000);
    } catch (err) {
      window.location.href = `mailto:${email}`;
    }
  });
}

function initCardGlow() {
  document.querySelectorAll(".project-card").forEach(card => {
    card.addEventListener("mousemove", (e) => {
      const rect = card.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      card.style.setProperty("--mx", `${x}%`);
      card.style.setProperty("--my", `${y}%`);
    });
  });
}

function initReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -60px 0px" });

  document.querySelectorAll(".reveal").forEach(el => observer.observe(el));
}

/* ============================================
   4. BACKGROUND CANVAS — Data flow network
   ============================================ */
function initCanvas() {
  const canvas = document.getElementById("bg-canvas");
  const ctx = canvas.getContext("2d", { alpha: true });
  let width, height, nodes;
  const NODE_COUNT = window.innerWidth < 720 ? 35 : 70;
  const MAX_DIST = 140;

  function resize() {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    canvas.style.width = width + "px";
    canvas.style.height = height + "px";
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }

  function initNodes() {
    nodes = Array.from({ length: NODE_COUNT }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.25,
      vy: (Math.random() - 0.5) * 0.25,
      r: Math.random() * 1.2 + 0.4,
    }));
  }

  function draw() {
    ctx.clearRect(0, 0, width, height);

    for (const n of nodes) {
      n.x += n.vx;
      n.y += n.vy;
      if (n.x < 0 || n.x > width)  n.vx *= -1;
      if (n.y < 0 || n.y > height) n.vy *= -1;

      ctx.beginPath();
      ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(124, 92, 255, 0.55)";
      ctx.fill();
    }

    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const dx = nodes[i].x - nodes[j].x;
        const dy = nodes[i].y - nodes[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < MAX_DIST) {
          const alpha = (1 - dist / MAX_DIST) * 0.18;
          ctx.strokeStyle = `rgba(0, 224, 164, ${alpha})`;
          ctx.lineWidth = 0.6;
          ctx.beginPath();
          ctx.moveTo(nodes[i].x, nodes[i].y);
          ctx.lineTo(nodes[j].x, nodes[j].y);
          ctx.stroke();
        }
      }
    }

    requestAnimationFrame(draw);
  }

  resize();
  initNodes();
  draw();

  let resizeTimer;
  window.addEventListener("resize", () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => { resize(); initNodes(); }, 200);
  });
}

/* ============================================
   5. BOOT
   ============================================ */
function init() {
  renderNav();
  renderHero();
  renderFactsStrip();
  renderSkills();
  renderFilters();
  renderProjects();
  renderTimeline();
  renderFooter();

  initFilters();
  initCopyEmail();
  initCardGlow();
  initReveal();
  initCanvas();
}

document.addEventListener("DOMContentLoaded", init);
