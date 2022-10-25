import { createElement, appendElement } from "./utils";
import { stopStopwatch } from "./counters";

const fakeData = ["1 valuevaluevale", 2, 3, 4, 5, 6, 7, 8, 9, 10];

export function appendScoreList(parent) {
  // create list wrapper
  const listElem = createElement(
    "ul",
    "score",
    "score",
    "Top results (sort by moves):"
  );

  fillList(fakeData, listElem);
  appendElement(parent, listElem);
}

export function appendScorePopup(parent) {
  appendElement(parent, scorePopup);
}

// fill list fc
export function fillList(dataArr, list) {
  for (let i = 0; i < dataArr.length; i++) {
    const score__item = createElement("li", "score__item", "noId", dataArr[i]);
    // add puzzle in puzzles wrapper
    appendElement(list, score__item);
  }
}

const scorePopup = createElement("div", "score__popup", "popup", "");

const scorePopupText = createElement(
  "div",
  "score__popup-text",
  "noId",
  "Hooray! You solved the puzzle in ##:## and N moves!"
);

const scorePopupBtn = createElement(
  "button",
  "score__popup-btn",
  "popup-btn",
  "Save Result!"
);
scorePopupBtn.addEventListener("click", (e) => {
  e.preventDefault();
  getGameScore();
});

appendElement(scorePopup, scorePopupText);
appendElement(scorePopup, scorePopupBtn);

// add вместо двух функций
export function getGameScore() {
  stopStopwatch();
  scorePopupText.innerText =
    "Hooray!You solved the puzzle: \nin 22:## and N moves!";
}
