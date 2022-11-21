import { getRndInteger } from "./utils";
import { getData } from "./get-data";

const gameSecretImage = document.querySelector(".gameplay__img");
const gameSecretTitle = document.querySelector(".gameplay__kind");
const gameSecretGenus = document.querySelector(".gameplay__genus");
const gamePlayerPlayBtn = document.querySelector(".player__btn--pause");
const gamePlayerPlayMute = document.querySelector(".player__btn--volume");

// variables for start game
let gameStage = 0;
let gameCorrectId;
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
  gameSecretImage.src = currentAnwer.image;
  gameSecretTitle.textContent = currentAnwer.name;
  gameSecretGenus.textContent = currentAnwer.species;
}

export function start() {
  const dataBirds = getData();
  const question = getQuestion(gameStage, dataBirds);

  fillStage(question);
}
