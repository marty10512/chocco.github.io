(function(){
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const slide = document.querySelector('.slider__menu');
const computed = getComputedStyle(slide);

nextBtn.addEventListener('click', function (e) {
  event.preventDefault();
  let left = parseInt(computed.left);
  if (left == '0') {
    slide.style.left = -100 + '%';
  } else {
    slide.style.left = 0;
  }
})

prevBtn.addEventListener('click', function (e) {
  event.preventDefault();
  let left = parseInt(computed.left);
  if (left != '0') {
    slide.style.left = 0;
  } else {
    slide.style.left = -100 + '%';
  }
})
})()