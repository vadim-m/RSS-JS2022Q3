import { createElement, appendElement } from "./utils";

export function appendButtons(parent) {
  appendElement(parent, buttonsElem);
}

// create buttons wrapper
const buttonsElem = createElement("div", "buttons", "buttons", "");

// create all btns
export const shuffleBtnElem = createElement(
  "button",
  "button",
  "shuffle",
  "Shuffle"
);
appendElement(buttonsElem, shuffleBtnElem);

export const soundBtnElem = createElement(
  "button",
  "button",
  "sound",
  "Sound On/Off"
);
appendElement(buttonsElem, soundBtnElem);

export const resultBtnElem = createElement(
  "button",
  "button",
  "result",
  "Results"
);
appendElement(buttonsElem, resultBtnElem);
