(function() {
let commentNav = document.querySelectorAll('.navigation__item');
let commentItem = document.querySelectorAll('.comments-item');
let commentId;
let commentNumber;

for (commentId = 0; commentId < commentNav.length; commentId++) {
  commentNav[commentId].addEventListener('click', function (e) {
    event.preventDefault();
    for (commentNumber = 0; commentNumber < commentNav.length; commentNumber++) {
      if (commentNav[commentNumber] !== this) {
        commentNav[commentNumber].classList.remove('navigation__item--active');
        commentItem[commentNumber].classList.remove('comments-item--active');
      } else {
        this.classList.add('navigation__item--active');
        commentItem[commentNumber].classList.add('comments-item--active');
        $('.comments-item--active').animate({ opacity: .1 }, 0);
        $('.comments-item--active').animate({ opacity: 1 }, 500);
      }
    }
  })
}})()