import { addActiveClass, removeActiveClass } from "./utils";
import { pauseBirdInfoAudio } from "./start-game";

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
  stopCurrentAudio();
});

function playMusic() {
  pauseBirdInfoAudio();
  questionAudio.play();
  addActiveClass(gamePlayerPlayBtn);
}

function pauseMusic() {
  questionAudio.pause();
  removeActiveClass(gamePlayerPlayBtn);
}

export function stopCurrentAudio() {
  questionAudio.pause();
  questionAudio.currentTime = 0;
  removeActiveClass(gamePlayerPlayBtn);
}

export function setAudioSrc(url) {
  questionAudio.src = url;
}
