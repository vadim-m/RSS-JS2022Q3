import { getRndInteger } from "./utils";
import { getData } from "./get-data";
import { setAudioSrc, stopCurrentAudio } from "./main-player";
import { checkAnswer, changeIsStagePlaying } from "./check-answer";
import {
  renderScore,
  resetStageScore,
  resetGameScore,
  getGameScore,
  addGameScoreToLocal,
} from "./score";
import { markActiveStage } from "./mark-stage";
import { fillResultSection } from "./fill-game-result";
import birdsData from "../data/birds";

const gameSecretImageWrap = document.querySelector(".gameplay__pic");
const gameSecretImage = document.querySelector(".gameplay__img");
const gameSecretKind = document.querySelector(".gameplay__kind");
const gameSecretGenus = document.querySelector(".gameplay__genus");
const gameOptionsList = document.querySelector(".options__list");
const gameOptionsBtns = document.getElementsByClassName("options__btn");
const gameNextBtn = document.querySelector(".gameplay__btn-next");

const birdInfo = document.querySelector(".bird");
const birdInfoImage = document.querySelector(".bird__img");
const birdInfoAudio = document.querySelector(".bird__audio");
const birdInfoDesc = document.querySelector(".bird__description");
const birdInfoKind = document.querySelector(".bird__kind");
const birdInfoGenus = document.querySelector(".bird__genus");

// variables for start game
export let gameStage = 0;
export let gameCorrectId;
let dataBirds = [];

function increaseStageCount() {
  gameStage++;
}

gameNextBtn.addEventListener("click", startNewStage);
birdInfoAudio.addEventListener("play", stopCurrentAudio);

function addHandlerOptionsBtns() {
  for (let i = 0; i < gameOptionsBtns.length; i++) {
    gameOptionsBtns[i].addEventListener("click", (e) => {
      e.preventDefault();
      const answerId = e.target.dataset.id;
      checkAnswer(e.target, answerId);
      fillBirdInfo(answerId);
    });
  }
}

function getQuestion(index, data) {
  const question = data[index];
  return question;
}

function fillStage(question) {
  const correctAnswerInd = getRndInteger(0, question.length - 1);
  const correctAnwer = question[correctAnswerInd];
  gameCorrectId = correctAnwer.id;
  console.log(gameCorrectId);
  fillGameplay(correctAnwer);
}

function fillGameplay(currentAnwer) {
  gameSecretImage.src = currentAnwer.image;
  gameSecretKind.textContent = currentAnwer.name;
  gameSecretGenus.textContent = currentAnwer.species;
  setAudioSrc(currentAnwer.audio);
}

function fillBirdInfo(birdId) {
  const bird = dataBirds[gameStage].find((item) => item.id === +birdId);

  birdInfoImage.src = bird.image;
  birdInfoDesc.textContent = bird.description;
  birdInfoKind.textContent = bird.name;
  birdInfoGenus.textContent = bird.species;
  birdInfoGenus.textContent = bird.species;
  birdInfoAudio.src = bird.audio;
  showBirdInfoVisibility();
}

export function pauseBirdInfoAudio() {
  birdInfoAudio.pause();
}

function renderOptions(data) {
  gameOptionsList.innerHTML = "";
  const optionsItems = data.reverse().map(createOptionsItem);
  gameOptionsList.append(...optionsItems);
}

function createOptionsItem(data) {
  const item = document.createElement("li");
  item.classList.add("options__item");
  item.dataset.id = data.id;
  item.innerHTML = `<button data-id="${data.id}"class="options__btn">${data.name}</button>`;

  return item;
}

export function changeDisabledNextBtn() {
  gameNextBtn.disabled = !gameNextBtn.disabled;
}

export function changeKindVisibility() {
  gameSecretKind.classList.toggle("active");
}

export function changeGenusVisibility() {
  gameSecretGenus.classList.toggle("active");
}

export function changeImageVisibility() {
  gameSecretImageWrap.classList.toggle("active");
}

function showBirdInfoVisibility() {
  birdInfo.classList.remove("active");
}

function hideBirdInfoVisibility() {
  birdInfo.classList.add("active");
}

function newStagePreparation() {
  changeKindVisibility();
  changeGenusVisibility();
  changeImageVisibility();
  hideBirdInfoVisibility();
  stopCurrentAudio();
  pauseBirdInfoAudio();
  changeIsStagePlaying();
  changeDisabledNextBtn();
  resetStageScore();
}

export function startNewStage() {
  increaseStageCount();

  if (gameStage === dataBirds.length) {
    end();

    return;
  }

  const question = getQuestion(gameStage, dataBirds);

  newStagePreparation();

  fillStage(question);
  renderOptions(question);
  addHandlerOptionsBtns();
  renderScore();
  markActiveStage();
}

function end() {
  const score = getGameScore();
  addGameScoreToLocal(score);
  fillResultSection(score, birdsData.length);
  showResultSection();
  setTimeout(() => {
    newStagePreparation();
    resetGameScore();
  }, 500);
}

export function start() {
  gameStage = 0;
  dataBirds = getData();
  const question = getQuestion(gameStage, dataBirds);

  fillStage(question);
  renderOptions(question);
  addHandlerOptionsBtns();
  renderScore();
  markActiveStage();
}
