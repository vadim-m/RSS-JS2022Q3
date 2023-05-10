import { createElement, appendElement } from "./utils";

export function appendSizeSelect(parent) {
  appendElement(parent, selectWrapElem);
}

// create select wrapper
const selectWrapElem = createElement(
  "div",
  "size",
  "noId",
  "Choose a frame size:"
);

// create select
export const selectElem = createElement(
  "select",
  "size__select",
  "size-select",
  ""
);

selectElem.innerHTML = `
      <option value="3">3</option>
      <option selected value="4">4</option>
      <option value="5">5</option>
      <option value="6">6</option>
      <option value="7">7</option>
      <option value="8">8</option>
      `;

appendElement(selectWrapElem, selectElem);
