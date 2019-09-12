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

const inpName = document.querySelector('#inpName');
const inpPhone = document.querySelector('#inpPhone');
const inpStreet = document.querySelector('#inpStreet');
const inpHouse = document.querySelector('#inpHouse');
const inpBuild = document.querySelector('#inpBuild');
const inpApart = document.querySelector('#inpApart');
const inpFloor = document.querySelector('#inpFloor');
const inpBtn = document.querySelector('#inpBtn');
const inpForm = document.querySelector('.form');
const inpComment = document.querySelector('#inpComment');
const inpOverlay = document.querySelector('.overlay');
const overlayBtn = document.querySelector('#overlay-btn');
const overlayMessage = document.querySelector('.overlay__messege-text');


inpName.addEventListener('keydown', function(event){
  let keyCheck = false;
  if(event.key.match(/[а-я]/i) || event.key == 'ArrowLeft' || event.key == 'ArrowRight' || event.key == 'Delete' || event.key == 'Backspace'){
    keyCheck = true;
  }
  if (!keyCheck ) {
    event.preventDefault();
  }
})



inpPhone.addEventListener('keydown', function(event){
  let keyCheck = false;
  if (event.key >= 0 || event.key <= 9 || event.key == '+' || event.key == '(' || event.key == ')' || event.key == '-' ||
  event.key == 'ArrowLeft' || event.key == 'ArrowRight' || event.key == 'Delete' || event.key == 'Backspace') {
    keyCheck = true;
  }
  if (!keyCheck ) {
    event.preventDefault();
  }
});

inpStreet.addEventListener('keydown', function(event){
  let keyCheck = false;
  if(event.key.match(/[а-я]/i) || event.key == 'ArrowLeft' || event.key == 'ArrowRight' || event.key == 'Delete' || event.key == 'Backspace' || event.key == '-' || event.key >= 0 || event.key <= 9){
    keyCheck = true;
  }
  if (!keyCheck ) {
    event.preventDefault();
  }
});

inpHouse.addEventListener('keydown', function(event){
  let keyCheck = false;
  if(event.key >= 0 || event.key <= 9 || event.key == 'ArrowLeft' || event.key == 'ArrowRight' || event.key == 'Delete' || event.key == 'Backspace'){
    keyCheck = true;
  }
  if (!keyCheck ) {
    event.preventDefault();
  }
});

inpBuild.addEventListener('keydown', function(event){
  let keyCheck = false;
  if(event.key.match(/[а-я]/i) ||event.key == 'ArrowLeft' || event.key == 'ArrowRight' || event.key == 'Delete' || event.key == 'Backspace' || event.key == '-' || event.key == '/' || event.key >= 0 || event.key <= 9){
    keyCheck = true;
  }
  if (!keyCheck ) {
    event.preventDefault();
  }
})

inpApart.addEventListener('keydown', function(event){
  let keyCheck = false;
  if(event.key >= 0 || event.key <= 9 || event.key == 'ArrowLeft' || event.key == 'ArrowRight' || event.key == 'Delete' || event.key == 'Backspace'){
    keyCheck = true;
  }
  if (!keyCheck ) {
    event.preventDefault();
  }
});

inpFloor.addEventListener('keydown', function(event){
  let keyCheck = false;
  if(event.key >= 0 || event.key <= 9 || event.key == 'ArrowLeft' || event.key == 'ArrowRight' || event.key == 'Delete' || event.key == 'Backspace'){
    keyCheck = true;
  }
  if (!keyCheck ) {
    event.preventDefault();
  }
});

inpBtn.addEventListener('click', function(e){
  event.preventDefault();
  if (validateForm(inpForm)) {
    let  data = {
      name: inpForm.elements.name.value,
      phone: inpForm.elements.phone.value,
      comment: inpForm.elements.comment.value,
      to: 'any@gmail.com'
    }

      console.log(data);
      const xhr = new XMLHttpRequest();
      xhr.responseType = 'json';
      xhr.open('POST','https://webdev-api.loftschool.com/sendmail');
      xhr.send(JSON.stringify(data)); // xhr.send(data); xhr.send(JSON.stringify(data));
      xhr.addEventListener('load', () => {
        if(xhr.response.status){
          overlayMessage.textContent = 'Сообщение отправлено';
          inpOverlay.classList.add('overlay--active').reset();
        } else {
          overlayMessage.textContent = 'Произошла ошибка';
          inpOverlay.classList.add('overlay--active');
        }
      })
  } else {
    overlayMessage.textContent = 'Заполните необходимые поля';
    inpOverlay.classList.add('overlay--active');
  }
})

overlayBtn.addEventListener('click', function(e){
  event.preventDefault();
  inpOverlay.classList.remove('overlay--active');
})

function validateForm(form) {
  let valid = true;
  if(!validateField(form.elements.inpName)){
    valid = false;
  }
  if(!validateField(form.elements.inpPhone)){
    valid = false;
  }
  if(!validateField(form.elements.inpComment)){
    valid = false;
  }

  return valid; 
}

function validateField(field) {
    field.nextElementSibling.textContent = field.validationMessage;
    return field.checkValidity();
}