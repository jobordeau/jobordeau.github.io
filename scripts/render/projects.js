import { projects, projectFilters } from "../data/projects.js";

export function renderFilters() {
  const container = document.getElementById("projects-filters");
  container.innerHTML = projectFilters
    .map((f, i) => `
      <button class="filter-btn ${i === 0 ? "is-active" : ""}" data-filter="${f.id}">
        ${f.label}
      </button>
    `)
    .join("");
}

export function renderProjects() {
  const container = document.getElementById("projects-grid");
  container.innerHTML = projects
    .map((p, i) => {
      const linkAttrs = p.linkType === "pdf"
        ? `href="${p.link}" target="_blank" rel="noopener"`
        : `href="${p.link}" target="_blank" rel="noopener"`;
      const linkLabel = p.linkType === "repo"
        ? "Voir le code"
        : p.linkType === "pdf"
        ? "Voir le rapport"
        : "Découvrir";

      return `
        <article class="project-card reveal" data-categories="${p.categories.join(",")}" data-size="${p.size}" style="--i: ${i}">
          <div class="project-card__media">
            <img src="${p.image}" alt="${p.title}" class="project-card__img" loading="lazy" />
          </div>
          <div class="project-card__body">
            <div class="project-card__head">
              <span class="project-card__context">${p.context}</span>
              <span class="project-card__num">/${String(i + 1).padStart(2, "0")}</span>
            </div>
            <h3 class="project-card__title">${p.title}</h3>
            <p class="project-card__subtitle">${p.subtitle}</p>
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
