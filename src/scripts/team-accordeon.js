(function(){
  let teamItem = document.querySelectorAll('.team__list-item');
let teamId;
let teamNumber;

for (teamId = 0; teamId < teamItem.length; teamId++) {
  teamItem[teamId].addEventListener('click', function (e) {
    for (teamNumber = 0; teamNumber < teamItem.length; teamNumber++) {
      if (teamItem[teamNumber] !== this) {
        teamItem[teamNumber].classList.remove('team__list-item--active');
      } else {
        this.classList.toggle('team__list-item--active');
      }
    }
  });
}
})()