const sections = $('.section');
const display = $('.maincontent');
let inscroll = false;

const md = new MobileDetect(window.navigator.userAgent);
const isMobile = md.mobile();

const countPosition = sectionEq => {
  return `${sectionEq * -100}%`;
}

const switchActiveClass = (elems, elemEq) => {
  elems
    .eq(elemEq)
    .addClass('active')
    .siblings()
    .removeClass('active');
}

const unBlockScroll = () => {
  const transitionDuration =1000;

  const touchScrollInertionTime = 300;
  setTimeout(() => {
    inscroll = false;
  }, transitionDuration + touchScrollInertionTime);
}

const dataTransition = sectionEq => {
  if (inscroll) return

  inscroll = true;
  const position = countPosition(sectionEq);
  const switchSideMenuActiveClass = () =>
   switchActiveClass($('.side-menu__link', sectionEq));

  
  switchSideMenuActiveClass();

  switchActiveClass(sections, sectionEq);

  display.css({
    transform: `translateY(${position})`
  });

  unBlockScroll();
};

const dataScroll = direction => {
  const activeSec = sections.filter('.active');
  const nextSec = activeSec.next();
  const prevSec = activeSec.prev();

  if (direction == 'next' && nextSec.length) {
    dataTransition(nextSec.index());
  }

  if (direction == 'prev' && prevSec.length) {
    dataTransition(prevSec.index());
  }
};

$(document).on('wheel', e => {
  const deltaY = e.originalEvent.deltaY

  if (deltaY > 0) {
    dataScroll('next');
  }

  if (deltaY < 0) {
    dataScroll('prev');
  }
});

$(document).on('keydown', e => {
  const tagName = e.target.tagName.toLowerCase();
  const userInInputs = tagName == 'input' || tagName == 'textarea';

  if (userInInputs) return
  switch (e.keyCode) {
    case 38:
      dataScroll('prev');
      break;
    case 40:
      dataScroll('next');
      break;
  }
});


$('[data-scroll-to]').on('click', e => {
  e.preventDefault();

  const target = parseInt($(e.currentTarget).attr('data-scroll-to'));

  dataTransition(target);
});

if (isMobile) {
  window.addEventListener('touchmove',
    e => { e.preventDefault(); },
    { passive: false }
  );

  $('.wrapper').on('touchmove', e => { e.preventDefault() });

  $('body').swipe({
    swipe: function (event, direction) {
      let scrollDirection;
      if (direction == 'up') scrollDirection = 'next';
      if (direction == 'down') scrollDirection = 'prev';

      dataScroll(scrollDirection);
    }
  });
}