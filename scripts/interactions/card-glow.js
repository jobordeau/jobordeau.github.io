/**
 * Hover-follow glow effect on project cards.
 * Sets CSS variables --mx and --my that the card uses for its radial gradient.
 */
export function initCardGlow() {
  document.querySelectorAll(".project-card, .lumina-screen, .early-card").forEach(card => {
    card.addEventListener("mousemove", (e) => {
      const rect = card.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      card.style.setProperty("--mx", `${x}%`);
      card.style.setProperty("--my", `${y}%`);
    });
  });
}
