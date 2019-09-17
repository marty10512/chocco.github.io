(function () {
  $(document).ready(function () {
    $('video').mediaelementplayer({
      alwaysShowControls: true,
      videoVolume: 'horizontal',
      features: ['playpause', 'progress', 'volume']
    });
  });
})()