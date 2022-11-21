import { addActiveClass, removeActiveClass } from "./utils";

export const gamePlayerPlayBtn = document.querySelector(".player__btn--play");
export const gamePlayerPlayMute = document.querySelector(
  ".player__btn--volume"
);

const questionAudio = new Audio();

gamePlayerPlayBtn.addEventListener("click", (e) => {
  e.preventDefault();

  if (questionAudio.paused) {
    playMusic();
  } else {
    pauseMusic();
  }
});

questionAudio.addEventListener("ended", (e) => {
  stopMusic();
});

function playMusic() {
  questionAudio.play();
  addActiveClass(gamePlayerPlayBtn);
}

function pauseMusic() {
  questionAudio.pause();
  removeActiveClass(gamePlayerPlayBtn);
}

export function stopMusic() {
  questionAudio.pause();
  questionAudio.currentTime = 0;
  removeActiveClass(gamePlayerPlayBtn);
}

export function setAudioSrc(url) {
  questionAudio.src = url;
}
