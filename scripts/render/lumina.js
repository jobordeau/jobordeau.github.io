import { lumina } from "../data/lumina.js";

export function renderLumina() {
  const container = document.getElementById("lumina-section");
  if (!container) return;

  container.innerHTML = `
    <div class="lumina__inner">
      <!-- Header -->
      <div class="lumina__header reveal">
        <span class="lumina__kicker">${lumina.kicker}</span>
        <h2 class="lumina__title">${lumina.title}</h2>
        <p class="lumina__subtitle">${lumina.subtitle}</p>
      </div>

      <!-- Description + visual -->
      <div class="lumina__intro reveal">
        <div class="lumina__description">
          <p>${lumina.description}</p>
        </div>
        <div class="lumina__visual" aria-hidden="true">
          ${renderArchitectureGlyph()}
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

/**
 * Abstract SVG illustration that suggests the Lumina pipeline:
 *   - one entry node (ingestion)
 *   - splits into 3 paths (data / analytics / resilience)
 *   - each path ends in a destination node
 * Animated dots flow along the paths to suggest activity.
 */
function renderArchitectureGlyph() {
  return `
    <svg viewBox="0 0 460 340" xmlns="http://www.w3.org/2000/svg" class="lumina-glyph">
      <defs>
        <linearGradient id="glyph-grad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="#7C5CFF" />
          <stop offset="100%" stop-color="#00E0A4" />
        </linearGradient>
        <pattern id="glyph-dots" x="0" y="0" width="16" height="16" patternUnits="userSpaceOnUse">
          <circle cx="0.75" cy="0.75" r="0.7" fill="rgba(255,255,255,0.06)" />
        </pattern>
      </defs>

      <rect width="460" height="340" fill="url(#glyph-dots)" />

      <!-- 3 horizontal flow paths from a central source -->
      <!-- Source node (left) -->
      <g transform="translate(60, 170)">
        <circle r="22" fill="rgba(124, 92, 255, 0.12)" stroke="url(#glyph-grad)" stroke-width="1.2" />
        <circle r="6" fill="url(#glyph-grad)">
          <animate attributeName="opacity" values="1;0.4;1" dur="2.4s" repeatCount="indefinite" />
        </circle>
        <text x="0" y="48" text-anchor="middle" font-family="JetBrains Mono, monospace" font-size="10" fill="rgba(237,237,245,0.7)" letter-spacing="1.2">
          INGESTION
        </text>
      </g>

      <!-- Path 1: data -->
      <path d="M 84 170 C 180 170, 220 80, 380 80" fill="none" stroke="rgba(0, 224, 164, 0.45)" stroke-width="1.25" />
      <circle r="3" fill="#00E0A4">
        <animateMotion dur="5s" repeatCount="indefinite" path="M 84 170 C 180 170, 220 80, 380 80" />
        <animate attributeName="opacity" values="0;1;1;0" dur="5s" repeatCount="indefinite" />
      </circle>

      <!-- Path 2: analytics (middle) -->
      <path d="M 84 170 L 380 170" fill="none" stroke="rgba(124, 92, 255, 0.45)" stroke-width="1.25" />
      <circle r="3" fill="#7C5CFF">
        <animateMotion dur="5s" repeatCount="indefinite" begin="1.5s" path="M 84 170 L 380 170" />
        <animate attributeName="opacity" values="0;1;1;0" dur="5s" begin="1.5s" repeatCount="indefinite" />
      </circle>

      <!-- Path 3: resilience -->
      <path d="M 84 170 C 180 170, 220 260, 380 260" fill="none" stroke="rgba(244, 116, 53, 0.45)" stroke-width="1.25" stroke-dasharray="3 4" />
      <circle r="3" fill="#F47435">
        <animateMotion dur="5s" repeatCount="indefinite" begin="3s" path="M 84 170 C 180 170, 220 260, 380 260" />
        <animate attributeName="opacity" values="0;1;1;0" dur="5s" begin="3s" repeatCount="indefinite" />
      </circle>

      <!-- 3 destination nodes -->
      <!-- Top: data lake -->
      <g transform="translate(380, 80)">
        <rect x="-32" y="-14" width="64" height="28" fill="rgba(0, 224, 164, 0.08)" stroke="#00E0A4" stroke-width="0.85" />
        <text x="0" y="4" text-anchor="middle" font-family="DM Sans, sans-serif" font-size="11" fill="#EDEDF5">Data Lake</text>
        <text x="0" y="32" text-anchor="middle" font-family="JetBrains Mono, monospace" font-size="9" fill="rgba(237,237,245,0.5)">gold-orders</text>
      </g>

      <!-- Middle: analytics -->
      <g transform="translate(380, 170)">
        <rect x="-32" y="-14" width="64" height="28" fill="rgba(124, 92, 255, 0.08)" stroke="#7C5CFF" stroke-width="0.85" />
        <text x="0" y="4" text-anchor="middle" font-family="DM Sans, sans-serif" font-size="11" fill="#EDEDF5">Fabric</text>
        <text x="0" y="32" text-anchor="middle" font-family="JetBrains Mono, monospace" font-size="9" fill="rgba(237,237,245,0.5)">analytics</text>
      </g>

      <!-- Bottom: DLQ alert -->
      <g transform="translate(380, 260)">
        <rect x="-32" y="-14" width="64" height="28" fill="rgba(244, 116, 53, 0.08)" stroke="#F47435" stroke-width="0.85" stroke-dasharray="2 2" />
        <text x="0" y="4" text-anchor="middle" font-family="DM Sans, sans-serif" font-size="11" fill="#EDEDF5">Logic App</text>
        <text x="0" y="32" text-anchor="middle" font-family="JetBrains Mono, monospace" font-size="9" fill="rgba(237,237,245,0.5)">alert email</text>
      </g>
    </svg>
  `;
}
