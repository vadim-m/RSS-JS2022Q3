import { addActiveClass, removeActiveClass } from "./utils";
import { pauseBirdInfoAudio } from "./start-game";

const gamePlayerPlayBtn = document.querySelector(".player__btn--play");
const gamePlayerMuteBtn = document.querySelector(".player__btn--volume");
const gamePlayerProgress = document.querySelector(".player__progress-range");
const gamePlayerTimePassed = document.querySelector(".player__time--passed");
const gamePlayerTimeTotal = document.querySelector(".player__time--total");
const gamePlayerVolumeProgress = document.querySelector(
  ".player__volume-range"
);

const questionAudio = new Audio();
questionAudio.addEventListener("timeupdate", updateAudioProgress);
questionAudio.addEventListener("ended", stopCurrentAudio);

gamePlayerPlayBtn.addEventListener("click", (e) => {
  e.preventDefault();

  if (questionAudio.paused) {
    playCurrentAudio();
  } else {
    pauseCurrentAudio();
  }
});

gamePlayerMuteBtn.addEventListener("click", () => {
  // ! add func - KASHA
  if (questionAudio.volume) {
    addActiveClass(gamePlayerMuteBtn);
    localStorage.setItem("volume", questionAudio.volume);
    questionAudio.volume = 0;
    gamePlayerVolumeProgress.value = 0;
  } else if (questionAudio.volume === 0) {
    // ! add func - KASHA
    const volume = localStorage.getItem("volume");
    questionAudio.volume = volume ? volume : 100;
    removeActiveClass(gamePlayerMuteBtn);
    gamePlayerVolumeProgress.value = volume * 100;
  }
});

gamePlayerVolumeProgress.addEventListener("input", () => {
  const value = gamePlayerVolumeProgress.value;

  if (value == 0) {
    addActiveClass(gamePlayerMuteBtn);
  } else {
    removeActiveClass(gamePlayerMuteBtn);
    localStorage.setItem("volume", questionAudio.volume);
  }
  questionAudio.volume = value / 100;
});

gamePlayerProgress.addEventListener("input", updatePlayingAudioInfo);

function updateAudioProgress() {
  const maxValue = gamePlayerProgress.max;
  const duration = questionAudio.duration;
  const currentTime = questionAudio.currentTime;
  const progress = (currentTime / duration) * maxValue;
  gamePlayerProgress.value = progress ? progress : 0;

  const minutesPassed = Math.floor(currentTime / 60) || "0";
  const secondsPassed = Math.floor(currentTime % 60) || "0";
  const minutesDuration = Math.floor(duration / 60) || "0";
  const secondsDuration = Math.floor(duration % 60) || "0";

  gamePlayerTimePassed.textContent = `${minutesPassed}:${
    secondsPassed < 10 ? `0${secondsPassed}` : secondsPassed
  }`;
  gamePlayerTimeTotal.textContent = `${minutesDuration}:${
    secondsDuration < 10 ? `0${secondsDuration}` : secondsDuration
  }`;
}

function updatePlayingAudioInfo() {
  const maxValue = gamePlayerProgress.max;
  const progress = gamePlayerProgress.value;
  questionAudio.currentTime = (progress / maxValue) * questionAudio.duration;
}

function playCurrentAudio() {
  pauseBirdInfoAudio();
  questionAudio.play();
  addActiveClass(gamePlayerPlayBtn);
}

function pauseCurrentAudio() {
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
