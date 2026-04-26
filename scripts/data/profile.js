/* ============================================
   PROFILE DATA
   ============================================ */
export const profile = {
  name: "Jovann Bordeau",
  title: "Data Engineer",
  email: "jbordeau2@myges.fr",
  phone: "+33 6 51 21 83 57",
  location: "Paris & Île-de-France",
  nationality: "Française",
  license: "Permis B",
  github: "https://github.com/jobordeau",
  linkedin: "https://www.linkedin.com/in/jovann-bordeau-8a526b207/",
  cv: "public/cv/CV_Jovann_Bordeau.pdf",
  certification: "Microsoft Certified · DP-700 Fabric Data Engineer",
  rncp: "RNCP 7 · Expert en ingénierie de l'IA",
  featuredStack: ["Python", "SQL", "Spark", "Azure", "Fabric", "C#"],
  tagline:
    "Je conçois des pipelines de données robustes et des architectures cloud-native qui transforment la donnée brute en valeur métier mesurable.",
  toeic: "TOEIC 790",
};

export const nav = [
  { label: "Projets",  href: "#projects" },
  { label: "Stack",    href: "#skills" },
  { label: "Parcours", href: "#experience" },
  { label: "Contact",  href: "#contact" },
];

export const facts = [
  { label: "Expérience",    value: "3 ans en alternance" },
  { label: "Localisation",  value: profile.location },
  { label: "Anglais",       value: profile.toeic },
  { label: "Permis",        value: profile.license },
  { label: "Nationalité",   value: profile.nationality },
  { label: "Disponibilité", value: "Ouvert" },
];
