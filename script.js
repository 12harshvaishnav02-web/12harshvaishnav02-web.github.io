const cursorGlow = document.querySelector(".cursor-glow");
window.addEventListener("pointermove", e => {
  cursorGlow.style.left = e.clientX + "px";
  cursorGlow.style.top = e.clientY + "px";
});

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add("visible");
  });
}, {threshold: 0.08});
document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");
menuBtn?.addEventListener("click", () => {
  const open = navLinks.classList.toggle("open");
  if (open) {
    navLinks.style.display = "flex";
    navLinks.style.position = "absolute";
    navLinks.style.top = "66px";
    navLinks.style.left = "14px";
    navLinks.style.right = "14px";
    navLinks.style.padding = "18px";
    navLinks.style.flexDirection = "column";
    navLinks.style.background = "rgba(6,16,29,.97)";
    navLinks.style.border = "1px solid rgba(185,213,239,.14)";
    navLinks.style.borderRadius = "14px";
  } else {
    navLinks.style.display = "";
  }
});
document.querySelectorAll(".nav-links a").forEach(a => a.addEventListener("click", () => {
  if (window.innerWidth <= 900) {
    navLinks.classList.remove("open");
    navLinks.style.display = "";
  }
}));
