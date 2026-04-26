/* ============================================
   JOVANN BORDEAU — PORTFOLIO
   Vanilla JS modules · Zero framework
   ============================================ */

// Renderers
import { renderNav } from "./render/nav.js";
import { renderHero, renderFactsStrip } from "./render/hero.js";
import { renderLumina } from "./render/lumina.js";
import { renderSkills } from "./render/skills.js";
import { renderFilters, renderProjects } from "./render/projects.js";
import { renderEarlyProjects } from "./render/early-projects.js";
import { renderTimeline } from "./render/timeline.js";
import { renderFooter } from "./render/footer.js";

// Interactions
import { initFilters } from "./interactions/filters.js";
import { initCopyEmail } from "./interactions/copy-email.js";
import { initCardGlow } from "./interactions/card-glow.js";
import { initReveal } from "./interactions/reveal.js";
import { initCanvas } from "./interactions/canvas.js";

function init() {
  // Render all sections
  renderNav();
  renderHero();
  renderFactsStrip();
  renderLumina();
  renderSkills();
  renderFilters();
  renderProjects();
  renderEarlyProjects();
  renderTimeline();
  renderFooter();

  // Wire up interactions
  initFilters();
  initCopyEmail();
  initCardGlow();
  initReveal();
  initCanvas();
}

document.addEventListener("DOMContentLoaded", init);
