import { earlyProjects } from "../data/early-projects.js";

export function renderEarlyProjects() {
  const container = document.getElementById("early-projects-grid");
  container.innerHTML = earlyProjects
    .map((p, i) => `
      <article class="early-card reveal" style="--i: ${i}">
        <div class="early-card__media">
          <img src="${p.image}" alt="${p.title}" class="early-card__img" loading="lazy" />
        </div>
        <div class="early-card__body">
          <h3 class="early-card__title">${p.title}</h3>
          <p class="early-card__subtitle">${p.subtitle}</p>
          <p class="early-card__desc">${p.description}</p>
          <div class="early-card__tags">
            ${p.tags.map(t => `<span class="early-card__tag">${t}</span>`).join("")}
          </div>
          <a href="${p.link}" target="_blank" rel="noopener" class="early-card__link">
            <span>Voir le code</span> <span>↗</span>
          </a>
        </div>
      </article>
    `)
    .join("");
}
