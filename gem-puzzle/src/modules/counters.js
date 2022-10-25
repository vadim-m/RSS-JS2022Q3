import { createElement, appendElement } from "./utils";

export function appendCounters(parent) {
  appendElement(parent, countersElem);
}

// create counters wrapper
const countersElem = createElement("div", "counters", "counters", "");

// create counters
export const counterElem = createElement(
  "div",
  "counter",
  "move-counter",
  "Moves: 0"
);
appendElement(countersElem, counterElem);

export const stopwatchElem = createElement(
  "div",
  "counter",
  "stopwatch-counter",
  "Time: 00 : 00"
);
appendElement(countersElem, stopwatchElem);
