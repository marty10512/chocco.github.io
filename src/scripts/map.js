ymaps.ready(init);

let placemarks = [
  {
    latitude: 55.75808393,
    longitude: 37.58288983,
    hintContent: '<div class="map__hint">Новинский бульвар, д.31</div>',
    balloonContent: [
      '<div class="map__balloon">',
      '<p>Менеджер: Анастасия</p>',
      '<a href="tel:+78009003020">8 800 900 30 20</a>',
      '</div>'
    ]
  },
  {
    latitude: 55.75838315,
    longitude: 37.62438750,
    hintContent: '<div class="map__hint">улица Никольская, д.10</div>',
    balloonContent: [
      '<div class="map__balloon">',
      '<p>Менеджер: Людмила</p>',
      '<a href="tel:+78009898020">8 800 989 80 20</a>',
      '</div>'
    ]
  },
  {
    latitude: 55.75191875,
    longitude: 37.60511195,
    hintContent: '<div class="map__hint">Крестовоздвиженский переулок, д.4с1</div>',
    balloonContent: [
      '<div class="map__balloon">',
      '<p>Менеджер: Алина</p>',
      '<a href="tel:+78009898022">8 800 989 80 22</a>',
      '</div>'
    ]
  },
  {
    latitude: 55.74301995,
    longitude: 37.58059168,
    hintContent: '<div class="map__hint">Ружейный переулок, д.3</div>',
    balloonContent: [
      '<div class="map__balloon">',
      '<p>Менеджер: Екатерина</p>',
      '<a href="tel:+78009897777">8 800 989 77 77</a>',
      '</div>'
    ]
  },
];

let geoObjects = [];

function init() {
  let map = new ymaps.Map('map', {
    center: [55.75, 37.60],
    zoom: 14,
    controls: ['zoomControl'],
    behaviors: ['drag']
  });

  for (let i = 0; i < placemarks.length; i++) {
    geoObjects[i] = new ymaps.Placemark([placemarks[i].latitude, placemarks[i].longitude], {
      hintContent: placemarks[i].hintContent,
      balloonContent: placemarks[i].balloonContent.join('')
    }, {
      iconLayout: 'default#image',
      iconImageHref: 'img/map/map-tag.png',
      iconImageSize: [46, 57],
      iconImageOffset: [-23, -57]
    });
  }

  let clusterer = new ymaps.Clusterer({});

  map.geoObjects.add(clusterer);
  clusterer.add(geoObjects);
}