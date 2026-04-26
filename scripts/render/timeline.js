import { timeline } from "../data/timeline.js";

export function renderTimeline() {
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

  expContainer.innerHTML = timeline.filter(i => i.type === "exp").map(buildItem).join("");
  eduContainer.innerHTML = timeline.filter(i => i.type === "edu").map(buildItem).join("");
}
