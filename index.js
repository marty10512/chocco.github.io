//////////////////////////////////////////////// full-skrin menu

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

////////////////////////////////////////////////  slider

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const slide = document.querySelector('.slider__menu');
const computed = getComputedStyle(slide);

nextBtn.addEventListener('click', function(e) {
  event.preventDefault();
  let left = parseInt(computed.left);


  if (left == '0'){
    slide.style.left = -100 + '%';
  } else {
    slide.style.left = 0;
  }
})

prevBtn.addEventListener('click', function(e){
  event.preventDefault();
  let left = parseInt(computed.left);
  if (left != '0'){
    slide.style.left = 0;
  } else {
    slide.style.left = -100 + '%';
  }
})

/////////////////////////////////////////////////////// team accordeon

let teamItem = document.querySelectorAll('.team__list-item');
let teamId;
let teamNumber;

for (teamId=0;teamId<teamItem.length; teamId++) {
  teamItem[teamId].addEventListener('click', function(e){
    for (teamNumber=0; teamNumber<teamItem.length; teamNumber++){
      if (teamItem[teamNumber] !== this) {
        teamItem[teamNumber].classList.remove('team__list-item--active');
      } else{
        this.classList.toggle('team__list-item--active');
      }
    }
  });
}

////////////////////////////////////////////////////// accordeon menu

let menuItem = document.querySelectorAll('.menu__item');
let menuId;
let menuNumber;

for (menuId=0;menuId<menuItem.length; menuId++) {
  menuItem[menuId].addEventListener('click', function(e){
    event.preventDefault();
    for (menuNumber=0; menuNumber<menuItem.length; menuNumber++){
      if (menuItem[menuNumber] !== this) {
        menuItem[menuNumber].classList.remove('menu__item--active');
      } else{
        this.classList.toggle('menu__item--active');
      }
    }
  });
}

///////////////////////////////////////////// comments slider

let commentNav = document.querySelectorAll('.navigation__item');
let commentItem = document.querySelectorAll('.comments-item');
let commentId;
let commentNumber;

for (commentId=0;commentId<commentNav.length;commentId++){
  commentNav[commentId].addEventListener('click', function(e){
    event.preventDefault();
    for (commentNumber=0;commentNumber<commentNav.length;commentNumber++){
      if (commentNav[commentNumber] !== this) {
        commentNav[commentNumber].classList.remove('navigation__item--active');
        commentItem[commentNumber].classList.remove('comments-item--active');
      } else {
        this.classList.add('navigation__item--active');
        commentItem[commentNumber].classList.add('comments-item--active');
      }
    }
  })
}


////////////////////////////////////////////// delivery form