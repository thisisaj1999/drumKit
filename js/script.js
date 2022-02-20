'use strict';

const playSound = function (e) {
  const audio = document.querySelector(`audio[data-key = "${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key = "${e.keyCode}"]`);
  if (!audio) return;
  audio.currentTime = 0; //rewind to the start
  audio.play();
  key.classList.add('playing');
};

const removeTransition = function (e) {
  if (e.propertyName !== 'transform') {
    return;
  }
  this.classList.remove('playing');
};

const keys = document.querySelectorAll('.key');
const sound = document.querySelectorAll('.btnAudio');

keys.forEach((key) => key.addEventListener('transitionend', removeTransition));
document.addEventListener('keydown', playSound);

// click events

for (let i = 0; i < keys.length; i++) {
  keys[i].addEventListener('click', function () {
    sound[i].play();
    if (!sound[i]) return;
    sound[i].currentTime = 0;
    keys[i].classList.add('playing');
  });
}
