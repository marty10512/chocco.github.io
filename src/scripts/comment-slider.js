(function() {
let commentNav = $('.navigation__item');
let commentList = $('.comments__list');
let commentId;
let commentNumber;

for (commentId = 0; commentId < commentNav.length; commentId++) {
  commentNav[commentId].addEventListener('click', function (e) {
    event.preventDefault();
    for (commentNumber = 0; commentNumber < commentNav.length; commentNumber++) {
      if (commentNav[commentNumber] !== this) {
        commentNav[commentNumber].classList.remove('navigation__item--active');
      } else {
        this.classList.add('navigation__item--active');
        commentList.css('left', -[commentNumber] * 100 + '%');
      }
    }
  })
}
})()