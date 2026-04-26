export function initFilters() {
  const buttons = document.querySelectorAll(".filter-btn");
  const cards = document.querySelectorAll(".project-card");

  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      const filter = btn.dataset.filter;

      buttons.forEach(b => b.classList.remove("is-active"));
      btn.classList.add("is-active");

      cards.forEach(card => {
        const cats = card.dataset.categories.split(",");
        const show = filter === "all" || cats.includes(filter);
        if (show) {
          card.classList.remove("is-hidden");
          requestAnimationFrame(() => {
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";
          });
        } else {
          card.style.opacity = "0";
          card.style.transform = "translateY(10px)";
          setTimeout(() => card.classList.add("is-hidden"), 300);
        }
      });
    });
  });
}
