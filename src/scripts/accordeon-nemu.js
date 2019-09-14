(function(){
  let menuItem = document.querySelectorAll('.menu__item');
let menuId;
let menuNumber;

for (menuId = 0; menuId < menuItem.length; menuId++) {
  menuItem[menuId].addEventListener('click', function (e) {
    event.preventDefault();
    for (menuNumber = 0; menuNumber < menuItem.length; menuNumber++) {
      if (menuItem[menuNumber] !== this) {
        menuItem[menuNumber].classList.remove('menu__item--active');
      } else {
        this.classList.toggle('menu__item--active');
      }
    }
  });
}
})()