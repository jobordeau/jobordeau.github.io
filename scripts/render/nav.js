import { nav } from "../data/profile.js";

export function renderNav() {
  const container = document.getElementById("nav-links");
  container.innerHTML = nav
    .map(item => `<a href="${item.href}">${item.label}</a>`)
    .join("");
}
