import { profile, facts } from "../data/profile.js";

export function renderHero() {
  document.getElementById("hero-title").innerHTML = `
    <span class="outline">Jovann BORDEAU</span><br>
    <span class="gradient">${profile.title}</span>
  `;

  document.getElementById("hero-tagline").textContent = profile.tagline;

  document.getElementById("hero-stack").innerHTML = `
    <span class="hero-stack__label">Core stack</span>
    <div class="hero-stack__chips">
      ${profile.featuredStack.map(t => `<span class="hero-stack__chip">${t}</span>`).join("")}
    </div>
  `;

  document.getElementById("hero-ctas").innerHTML = `
    <a href="#contact" class="btn btn--primary">
      Me contacter <span class="btn__arrow">→</span>
    </a>
    <a href="${profile.cv}" target="_blank" rel="noopener" class="btn btn--ghost">
      Télécharger le CV
    </a>
  `;

  document.getElementById("cert-badge").innerHTML = `
    <div class="cert-badge__img-wrap">
      <img src="public/images/certs/dp-700.png" alt="Microsoft DP-700 Certification" class="cert-badge__img" />
    </div>
    <div class="cert-badge__text">
      <span class="cert-badge__kicker">Microsoft Certified</span>
      <span class="cert-badge__title">Fabric Data Engineer Associate</span>
      <span class="cert-badge__code">DP-700 · Certified</span>
    </div>
  `;

  document.getElementById("rncp-badge").innerHTML = `
    <span class="rncp-badge__kicker">Diplôme · BAC+5</span>
    <span class="rncp-badge__title">Expert en Ingénierie de l'Intelligence Artificielle</span>
    <span class="rncp-badge__sub">ESGI Paris</span>
  `;
}

export function renderFactsStrip() {
  document.getElementById("facts-strip").innerHTML = facts
    .map(f => `
      <div class="fact">
        <span class="fact__label">${f.label}</span>
        <span class="fact__value">${f.value}</span>
      </div>
    `)
    .join("");
}
