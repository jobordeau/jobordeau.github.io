import { profile } from "../data/profile.js";

export function initCopyEmail() {
  const btn = document.getElementById("copy-email-btn");
  const text = document.getElementById("copy-email-text");
  const original = text.textContent;

  btn.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      btn.classList.add("is-copied");
      text.textContent = "✓ Email copié";
      setTimeout(() => {
        btn.classList.remove("is-copied");
        text.textContent = original;
      }, 2000);
    } catch (err) {
      window.location.href = `mailto:${profile.email}`;
    }
  });
}
