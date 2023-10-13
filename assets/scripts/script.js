let navShowed = false;

const menuMobileButton = document.getElementById("menu-mobile-button");
const navbar = document.querySelector("nav ul");
const navLinks = navbar.querySelectorAll(".nav-link");

menuMobileButton.addEventListener("click", toggleNavbar);

navLinks.forEach((navLink) => {
  navLink.addEventListener("click", () => {
    if (!navShowed) return;

    toggleNavbar();
  });
});

function toggleNavbar() {
  navShowed = !navShowed;
  menuMobileButton.querySelector("p").innerHTML = navShowed ? "Close" : "Menu";
  navbar.classList.toggle("slide");
}
