'use strict';

document.addEventListener('keydown', function (e) {
  const audio = document.querySelector(`audio[data-key = "${e.keyCode}"]`);
  if (!audio) return;
  audio.currentTime = 0; //rewind to the start
  audio.play();
});
