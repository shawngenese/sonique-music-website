const showNav = document.querySelector(".menuToggleBtn");
const nav = document.querySelector("nav");
const body = document.querySelector("body");
const aside = document.querySelector("aside");

showNav.addEventListener("click", () =>  {
    nav.classList.toggle("active");
    body.classList.toggle("nav-active");
    aside.classList.toggle("nav-active");
});