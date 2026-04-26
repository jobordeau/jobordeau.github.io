import { earlyProjects } from "../data/early-projects.js";

export function renderEarlyProjects() {
  const container = document.getElementById("early-projects-grid");
  container.innerHTML = earlyProjects
    .map((p, i) => `
      <article class="early-card reveal" style="--i: ${i}">
        <div class="early-card__head">
          <span class="early-card__num">${String(i + 1).padStart(2, "0")}</span>
          <a href="${p.link}" target="_blank" rel="noopener" class="early-card__link" aria-label="Voir ${p.title} sur GitHub">
            <span>↗</span>
          </a>
        </div>
        <h3 class="early-card__title">${p.title}</h3>
        <p class="early-card__subtitle">${p.subtitle}</p>
        <p class="early-card__desc">${p.description}</p>
        <div class="early-card__tags">
          ${p.tags.map(t => `<span class="early-card__tag">${t}</span>`).join("")}
        </div>
      </article>
    `)
    .join("");
}
