import { createElement, appendElement } from "./utils";

export function appendCounters(parent) {
  appendElement(parent, countersElem);
}

// create counters wrapper
const countersElem = createElement("div", "counters", "counters", "");

// create moves counter
let movesCount = 0;

export const counterElem = createElement(
  "div",
  "counter",
  "move-counter",
  `Moves: ${movesCount}`
);
appendElement(countersElem, counterElem);

export function increaseMoves() {
  movesCount++;
}

export function resetMoves() {
  movesCount = 0;
}

export function updateMoves() {
  counterElem.textContent = `Moves: ${movesCount}`;
}

export function getMoves() {
  return movesCount;
}

// create stopwatch
let sec = 0;
let min = 0;
let timer;

export const stopwatchElem = createElement(
  "div",
  "counter",
  "stopwatch-counter",
  `Time: 0${min} : 0${sec}`
);
appendElement(countersElem, stopwatchElem);

export function startStopwatch() {
  timer = setTimeout(updateStopwatch, 1000);
}

export function resetStopwatch() {
  sec = 0;
  min = 0;
}

export function stopStopwatch() {
  clearTimeout(timer);
}

function addSecStopwatch() {
  sec++;
  if (sec >= 60) {
    sec = 0;
    min++;
    if (min >= 60) {
      alert("It took you too long!");
    }
  }
}

function updateStopwatch() {
  addSecStopwatch();
  stopwatchElem.textContent = `
    Time: ${min > 9 ? min : "0" + min} : 
          ${sec > 9 ? sec : "0" + sec}
    `;
  startStopwatch();
}
