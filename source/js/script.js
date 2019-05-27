var menu = document.querySelector(".main-nav");
var open = document.querySelector(".page-header__open-btn");
var close = document.querySelector(".main-nav__close-btn");

open.addEventListener("click", function (evt) {
  evt.preventDefault();
  menu.classList.add("main-nav--visible");
  open.classList.add("page-header__open-btn--unvisible");
  close.classList.add("main-nav__close-btn--visible");
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  menu.classList.remove("main-nav--visible");
  open.classList.remove("page-header__open-btn--unvisible");
  close.classList.remove("main-nav__close-btn--visible");
});
