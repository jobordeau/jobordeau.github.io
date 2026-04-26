import { profile } from "../data/profile.js";

export function renderFooter() {
  document.getElementById("footer-year").textContent = new Date().getFullYear();

  document.getElementById("footer-actions").innerHTML = `
    <button class="btn btn--primary" id="copy-email-btn">
      <span id="copy-email-text">${profile.email}</span>
    </button>
    <a href="${profile.github}" target="_blank" rel="noopener" class="btn btn--ghost">GitHub ↗</a>
    <a href="${profile.linkedin}" target="_blank" rel="noopener" class="btn btn--ghost">LinkedIn ↗</a>
  `;
}
