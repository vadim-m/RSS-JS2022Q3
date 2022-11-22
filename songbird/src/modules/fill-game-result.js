import { addActiveClass, removeActiveClass } from "./utils";

let stageScore = 5;

const resultLogo = document.querySelector(".result__logo");
const resultScore = document.querySelector(".result__score");
const resultVictory = document.querySelector(".result__victory");
const resultsList = document.querySelector(".results__list");

export function fillResultSection(score, gameStages) {
  resultScore.textContent = score;

  if (score === stageScore * gameStages) {
    addActiveClass(resultLogo);
    addActiveClass(resultVictory);
  } else {
    removeActiveClass(resultLogo);
    removeActiveClass(resultVictory);
  }
}

export function fillResultsSection() {
  const gameScoreFromLocaleStorage = JSON.parse(
    localStorage.getItem("gameScore")
  );
  const gameScoreData = gameScoreFromLocaleStorage
    ? gameScoreFromLocaleStorage
    : ["-- // --"];

  resultsList.innerHTML = "";

  gameScoreData.forEach((item) =>
    createResultsItem("li", "results__item", item)
  );
}

function createResultsItem(tag, ccsClass, content) {
  const newElement = document.createElement(tag);
  newElement.classList.add(ccsClass);
  newElement.textContent = content;
  resultsList.appendChild(newElement);
}
