import { getRndInteger } from "./utils";
import { getData } from "./get-data";
import { setAudioSrc } from "./main-player";

const gameSecretImage = document.querySelector(".gameplay__img");
const gameSecretTitle = document.querySelector(".gameplay__kind");
const gameSecretGenus = document.querySelector(".gameplay__genus");
const gameOptionsList = document.querySelector(".options__list");
const gameOptionsBtns = document.getElementsByClassName("options__btn");

// variables for start game
let gameStage = 0;
let gameCorrectId;
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
  console.log(question[correctAnswerInd], gameCorrectId);
}

function fillGameplay(currentAnwer) {
  // !
  gameSecretImage.src = currentAnwer.image;
  // !
  gameSecretTitle.textContent = currentAnwer.name;
  gameSecretGenus.textContent = currentAnwer.species;
  setAudioSrc(currentAnwer.audio);
}

function renderOptions(data) {
  gameOptionsList.innerHTML = "";
  const optionsItems = data.map(createOptionsItem);
  gameOptionsList.append(...optionsItems);
}

function createOptionsItem(data) {
  const item = document.createElement("li");
  item.classList.add("options__item");
  item.dataset.id = data.id;
  item.innerHTML = `<button data-id="${data.id}"class="options__btn">${data.name}</button>`;

  return item;
}

export function start() {
  const dataBirds = getData();
  const question = getQuestion(gameStage, dataBirds);

  fillStage(question);
  renderOptions(question);
}
