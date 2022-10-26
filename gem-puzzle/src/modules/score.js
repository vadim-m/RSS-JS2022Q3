import { createElement, appendElement } from "./utils";
import { getStopwatchTime, getMoves } from "./counters";
import { startGame } from "../index";

// get scores from Locale Storage
const scoreDataFromLocaleStorage = JSON.parse(localStorage.getItem("scores"));
const scoresData = scoreDataFromLocaleStorage ? scoreDataFromLocaleStorage : [];

// create list wrapper
const listElem = createElement(
  "ul",
  "score",
  "score",
  "Top results (sort by moves):"
);

export function appendScoreList(parent) {
  fillList(scoresData, listElem);
  appendElement(parent, listElem);
}

export function appendScorePopup(parent) {
  appendElement(parent, scorePopup);
}

// fill list func
export function fillList(dataArr, list) {
  if (dataArr.length === 0) {
    dataArr.push("No score. You are playing for the first time!");
  }

  for (let i = 0; i < dataArr.length; i++) {
    const score__item = createElement("li", "score__item", "noId", "");
    if (typeof dataArr[i] === "object") {
      score__item.textContent = `
      ${i + 1}.
      Moves: ${dataArr[i]["moves"]} - 
      Date: ${dataArr[i]["date"]} - 
      Time: ${dataArr[i]["minutes"]} : ${dataArr[i]["seconds"]}
      `;
    } else {
      score__item.textContent = `${i + 1}. ${dataArr[i]}`;
      dataArr.pop();
    }
    // add score  in list
    appendElement(list, score__item);
  }
}

// score popup
const scorePopup = createElement("div", "score__popup", "popup", "");
const scorePopupText = createElement(
  "div",
  "score__popup-text",
  "noId",
  `Hooray! You solved the puzzle in: 00:00 and 0 moves!`
);
appendElement(scorePopup, scorePopupText);
const scorePopupBtn = createElement(
  "button",
  "score__popup-btn",
  "popup-btn",
  "Play Again!"
);
appendElement(scorePopup, scorePopupBtn);

scorePopupBtn.addEventListener("click", (e) => {
  e.preventDefault();
  // Начать игру
  startGame();
  // Закрыть
  scorePopup.classList.remove("active");
});

// get score obj
function getGameScore() {
  const moves = getMoves();
  const time = getStopwatchTime();
  const date = new Date().toLocaleDateString();

  const gameResult = {
    moves,
    date,
    minutes: time[0],
    seconds: time[1],
  };

  return gameResult;
}

export function showPopup() {
  // Получили объект
  const gameScore = getGameScore();
  showPopupScore(gameScore);
  addGameScore(gameScore);
  scorePopup.classList.add("active");
}

function showPopupScore(obj) {
  scorePopupText.innerText = `Hooray! You solved the puzzle in: \n${obj.minutes}:${obj.seconds} and ${obj.moves} moves!`;
}

function addGameScore(obj) {
  scoresData.push(obj);
  scoresData.sort(function (a, b) {
    return parseFloat(a.moves) - parseFloat(b.moves);
  });

  const maxScoresCount = 10;

  if (scoresData.length > maxScoresCount) {
    scoresData.splice(maxScoresCount, 1);
  }

  // save scores array to Local Storage
  localStorage.setItem("scores", JSON.stringify(scoresData));
  // clear list
  listElem.innerHTML = "Top results (sort by moves):";
  // update list
  fillList(scoresData, listElem);
}
