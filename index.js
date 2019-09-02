const hMenuLink = document.querySelector('#burger-link');
const hMenuStatus = document.querySelector('#burger');
const hMenuClass = hMenuStatus.classList;
const noScroll = document.querySelector('#scroll');
const hMenuSecLink = document.querySelector('.fs-menu');

hMenuLink.addEventListener("click", function(e) {

  if (hMenuClass == 'hamburger__menu') {
    hMenuStatus.classList.add("hamburger__menu--active");
    hMenuStatus.classList.remove("hamburger__menu");
    noScroll.classList.add("no-scroll");
  } else {
    hMenuStatus.classList.add("hamburger__menu");
    hMenuStatus.classList.remove("hamburger__menu--active");
    noScroll.classList.remove("no-scroll");
  }

})

hMenuSecLink.addEventListener("click", function (e) {
  hMenuStatus.classList.add("hamburger__menu");
  hMenuStatus.classList.remove("hamburger__menu--active");
  noScroll.classList.remove("no-scroll");
})