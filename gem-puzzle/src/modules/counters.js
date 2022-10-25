import { createElement, appendElement } from "./utils";

export function appendCounters(parent) {
  appendElement(parent, countersElem);
}

// create counters wrapper
const countersElem = createElement("div", "counters", "counters", "");

// moves counter
let movesCount = 0;

// create counters
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

// stopwatch
export const stopwatchElem = createElement(
  "div",
  "counter",
  "stopwatch-counter",
  "Time: 00 : 00"
);
appendElement(countersElem, stopwatchElem);
