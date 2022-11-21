import { getRndInteger } from "./utils";
import { getData } from "./get-data";
import { setAudioSrc } from "./main-player";
import { checkAnswer } from "./check-answer";

const gameSecretImageWrap = document.querySelector(".gameplay__pic");
const gameSecretImage = document.querySelector(".gameplay__img");
const gameSecretKind = document.querySelector(".gameplay__kind");
const gameSecretGenus = document.querySelector(".gameplay__genus");
const gameOptionsList = document.querySelector(".options__list");
const gameOptionsBtns = document.getElementsByClassName("options__btn");
const gameNextBtn = document.querySelector(".gameplay__btn-next");

const birdInfo = document.querySelector(".bird");
const birdInfoImage = document.querySelector(".bird__img");
const birdInfoDesc = document.querySelector(".bird__description");
const birdInfoKind = document.querySelector(".bird__kind");
const birdInfoGenus = document.querySelector(".bird__genus");

// variables for start game
let gameStage = 0;
let dataBirds = [];
export let gameCorrectId;
// ! можно потом его передавать в функцию проверки
let gameScore = 0;

function encreaseStageCount() {
  stage++;
}

function getQuestion(index, data) {
  const question = data[index];
  return question;
}

function fillStage(question) {
  const correctAnswerInd = getRndInteger(0, question.length - 1);
  const correctAnwer = question[correctAnswerInd];
  gameCorrectId = correctAnwer.id;
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
  enableBirdInfoVisibility();
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

export function enableBirdInfoVisibility() {
  birdInfo.classList.remove("active");
}

function addHandlerOptionsBtns() {
  for (let i = 0; i < gameOptionsBtns.length; i++) {
    gameOptionsBtns[i].addEventListener("click", (e) => {
      e.preventDefault();
      const answerId = e.target.dataset.id;
      checkAnswer(e.target, answerId);
      fillBirdInfo(answerId);
      // ! fill bird info
    });
  }
}

export function start() {
  dataBirds = getData();
  const question = getQuestion(gameStage, dataBirds);

  fillStage(question);
  renderOptions(question);
  addHandlerOptionsBtns();
}