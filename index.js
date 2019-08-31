const hMenuLink = document.querySelector('#burger-link');
const hMenuStatus = document.querySelector('#burger');
const q = hMenuStatus.classList;

hMenuLink.addEventListener("click", function(e) {

  if (q == 'hamburger__menu') {
    hMenuStatus.classList.add("hamburger__menu--active");
    hMenuStatus.classList.remove("hamburger__menu");
  } else {
    hMenuStatus.classList.add("hamburger__menu");
    hMenuStatus.classList.remove("hamburger__menu--active");
  }

})