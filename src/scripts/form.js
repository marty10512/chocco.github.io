(function(){
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
  
  
  inpName.addEventListener('keydown', function (event) {
    let keyCheck = false;
    if (event.key.match(/[а-я]/i) || event.key == 'ArrowLeft' || event.key == 'ArrowRight' || event.key == 'Delete' || event.key == 'Backspace') {
      keyCheck = true;
    }
    if (!keyCheck) {
      event.preventDefault();
    }
  })
  
  
  
  inpPhone.addEventListener('keydown', function (event) {
    let keyCheck = false;
    if (event.key >= 0 || event.key <= 9 || event.key == '+' || event.key == '(' || event.key == ')' || event.key == '-' ||
      event.key == 'ArrowLeft' || event.key == 'ArrowRight' || event.key == 'Delete' || event.key == 'Backspace') {
      keyCheck = true;
    }
    if (!keyCheck) {
      event.preventDefault();
    }
  });
  
  inpStreet.addEventListener('keydown', function (event) {
    let keyCheck = false;
    if (event.key.match(/[а-я]/i) || event.key == 'ArrowLeft' || event.key == 'ArrowRight' || event.key == 'Delete' || event.key == 'Backspace' || event.key == '-' || event.key >= 0 || event.key <= 9) {
      keyCheck = true;
    }
    if (!keyCheck) {
      event.preventDefault();
    }
  });
  
  inpHouse.addEventListener('keydown', function (event) {
    let keyCheck = false;
    if (event.key >= 0 || event.key <= 9 || event.key == 'ArrowLeft' || event.key == 'ArrowRight' || event.key == 'Delete' || event.key == 'Backspace') {
      keyCheck = true;
    }
    if (!keyCheck) {
      event.preventDefault();
    }
  });
  
  inpBuild.addEventListener('keydown', function (event) {
    let keyCheck = false;
    if (event.key.match(/[а-я]/i) || event.key == 'ArrowLeft' || event.key == 'ArrowRight' || event.key == 'Delete' || event.key == 'Backspace' || event.key == '-' || event.key == '/' || event.key >= 0 || event.key <= 9) {
      keyCheck = true;
    }
    if (!keyCheck) {
      event.preventDefault();
    }
  })
  
  inpApart.addEventListener('keydown', function (event) {
    let keyCheck = false;
    if (event.key >= 0 || event.key <= 9 || event.key == 'ArrowLeft' || event.key == 'ArrowRight' || event.key == 'Delete' || event.key == 'Backspace') {
      keyCheck = true;
    }
    if (!keyCheck) {
      event.preventDefault();
    }
  });
  
  inpFloor.addEventListener('keydown', function (event) {
    let keyCheck = false;
    if (event.key >= 0 || event.key <= 9 || event.key == 'ArrowLeft' || event.key == 'ArrowRight' || event.key == 'Delete' || event.key == 'Backspace') {
      keyCheck = true;
    }
    if (!keyCheck) {
      event.preventDefault();
    }
  });
  
  inpForm.addEventListener('submit', submitForm);
  
  function submitForm(e) {
    e.preventDefault();
  
    const form = e.target;
    const request = ajaxForm(form);
  
    request.addEventListener('load', function(){
      if(request.status >= 400) {
        overlayMessage.textContent = 'Произошла ошибка' + request.response.message;
        inpOverlay.classList.add('overlay--active');
      } else {
        overlayMessage.textContent = request.response.message;
        inpOverlay.classList.add('overlay--active');
      }
    })
  }
  
  const ajaxForm = function(form) {
    const formData = new FormData(form);
    const url = 'https://webdev-api.loftschool.com/sendmail';
    const mail = 'any@gmail.com';
    formData.append('to', mail);
  
    const xhr = new XMLHttpRequest();
    xhr.responseType = 'json';
    xhr.open('POST', url);
    xhr.setRequestHeader('X-Request-With', 'XMLHttpRequest');
    xhr.send(formData);
  
    return xhr;
  };
  
  
  
  overlayBtn.addEventListener('click', function (e) {
    event.preventDefault();
    inpOverlay.classList.remove('overlay--active');
    $('input').val('');
    $('textarea').val('');
  });
})()
