const ham = document.querySelector(".ham");
const mobileNav = document.querySelector(".mobile_nav");
const overlay = document.querySelectorAll(".overlay");
const closeMenu = document.getElementById("close");

ham.addEventListener("click", () => {
  mobileNav.classList.add("show");
  overlay.forEach((over) => (over.style.display = "block"));
  document.body.classList.add("lock");
});

closeMenu.addEventListener("click", () => {
  mobileNav.classList.remove("show");
  overlay.forEach((over) => (over.style.display = "none"));
  document.body.classList.remove("lock");
});
