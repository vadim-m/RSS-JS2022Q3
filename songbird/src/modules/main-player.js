import { addActiveClass, removeActiveClass } from "./utils";

export const gamePlayerPlayBtn = document.querySelector(".player__btn--play");
export const gamePlayerPlayMute = document.querySelector(
  ".player__btn--volume"
);

const questionAudio = new Audio();

gamePlayerPlayBtn.addEventListener("click", () => {
  if (questionAudio.paused) {
    playMusic();
  } else {
    pauseMusic();
  }
});

function playMusic() {
  questionAudio.play();
  addActiveClass(gamePlayerPlayBtn);
}

function pauseMusic() {
  questionAudio.pause();
  removeActiveClass(gamePlayerPlayBtn);
}

export function setAudioSrc(url) {
  questionAudio.src = url;
}
