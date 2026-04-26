import { lumina } from "../data/lumina.js";

export function renderLumina() {
  const container = document.getElementById("lumina-section");
  if (!container) return;

  container.innerHTML = `
    <div class="lumina__inner">
      <!-- Header -->
      <div class="lumina__header reveal">
        <span class="lumina__kicker">${lumina.kicker}</span>
        <div class="lumina__title-row">
          <h2 class="lumina__title">${lumina.title}</h2>
          <div class="lumina__badge">
            <span class="lumina__badge-dot"></span>
            <span>Démo live disponible</span>
          </div>
        </div>
        <p class="lumina__subtitle">${lumina.subtitle}</p>
      </div>

      <!-- Description + stats -->
      <div class="lumina__intro reveal">
        <div class="lumina__description">
          <p>${lumina.description}</p>
        </div>
        <div class="lumina__stats">
          ${lumina.stats.map(s => `
            <div class="lumina-stat">
              <span class="lumina-stat__value">${s.value}</span>
              <span class="lumina-stat__label">${s.label}</span>
            </div>
          `).join("")}
        </div>
      </div>

      <!-- Screenshots gallery -->
      <div class="lumina__gallery reveal">
        ${lumina.screens.map((screen, i) => `
          <figure class="lumina-screen lumina-screen--${i === 0 ? "primary" : "secondary"}">
            <div class="lumina-screen__frame">
              <div class="lumina-screen__chrome">
                <span class="lumina-screen__dot"></span>
                <span class="lumina-screen__dot"></span>
                <span class="lumina-screen__dot"></span>
                <span class="lumina-screen__url">lumina-web-demo-kappa.vercel.app</span>
              </div>
              <img
                src="${screen.src}"
                alt="${screen.alt}"
                class="lumina-screen__img"
                loading="lazy"
                onerror="this.classList.add('lumina-screen__img--missing'); this.parentElement.querySelector('.lumina-screen__placeholder').style.display='flex';"
              />
              <div class="lumina-screen__placeholder">
                <span class="lumina-screen__placeholder-icon">⌬</span>
                <span class="lumina-screen__placeholder-text">${screen.caption}</span>
              </div>
            </div>
            <figcaption class="lumina-screen__caption">${screen.caption}</figcaption>
          </figure>
        `).join("")}
      </div>

      <!-- Highlights + Stack -->
      <div class="lumina__details reveal">
        <div class="lumina__highlights">
          <span class="lumina__detail-kicker">// patterns</span>
          <ul class="lumina__highlights-list">
            ${lumina.highlights.map(h => `
              <li class="lumina-highlight">
                <span class="lumina-highlight__bullet">→</span>
                <span>${h}</span>
              </li>
            `).join("")}
          </ul>
        </div>

        <div class="lumina__stack">
          <span class="lumina__detail-kicker">// stack</span>
          <div class="lumina__stack-tags">
            ${lumina.stack.map(t => `<span class="lumina__stack-tag">${t}</span>`).join("")}
          </div>
        </div>
      </div>

      <!-- CTAs -->
      <div class="lumina__ctas reveal">
        <a href="${lumina.links.demo}" target="_blank" rel="noopener" class="btn btn--primary lumina__cta-primary">
          <span>Explorer la démo live</span>
          <span class="btn__arrow">↗</span>
        </a>
        <a href="${lumina.links.repo}" target="_blank" rel="noopener" class="btn btn--ghost">
          <span>Code source · GitHub</span>
          <span>↗</span>
        </a>
      </div>
    </div>
  `;
}
