import { skills } from "../data/skills.js";

export function renderSkills() {
  const container = document.getElementById("skills-bento");
  container.innerHTML = skills
    .map((skill, i) => `
      <article class="skill-card reveal" data-span="${skill.span}">
        <div class="skill-card__head">
          <div class="skill-card__icon">${skill.icon}</div>
          <span class="skill-card__num">${String(i + 1).padStart(2, "0")} / ${skills.length}</span>
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
