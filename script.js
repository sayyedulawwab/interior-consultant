const navBtn = document.querySelector(".nav-btn");
const navList = document.querySelector(".nav__list");
const main = document.querySelector("main");
const footer = document.querySelector("footer");

navBtn.addEventListener("click", () => {
  setTimeout(() => {
    navBtn.classList.toggle("open");
    navList.classList.toggle("responsive");
    main.classList.toggle("responsive-main");
  }, 100);
});

main.addEventListener("click", () => {
  setTimeout(() => {
    if (navBtn.classList.contains("open")) {
      navBtn.classList.toggle("open");
      navList.classList.toggle("responsive");
    }
  }, 100);
});

footer.addEventListener("click", () => {
  setTimeout(() => {
    if (navBtn.classList.contains("open")) {
      navBtn.classList.toggle("open");
      navList.classList.toggle("responsive");
      main.classList.toggle("responsive-main");
    }
  }, 100);
});
