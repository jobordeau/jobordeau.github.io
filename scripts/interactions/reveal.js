/**
 * Adds .is-visible to elements with class .reveal when they enter the viewport.
 * Used for scroll-triggered fade-in animations.
 */
export function initReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -60px 0px" });

  document.querySelectorAll(".reveal").forEach(el => observer.observe(el));
}
