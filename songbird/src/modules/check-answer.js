import {
  gameCorrectId,
  changeDisabledNextBtn,
  changeKindVisibility,
  changeGenusVisibility,
  changeImageVisibility,
} from "./start-game";
import { stopMusic } from "./main-player";
import { playSound } from "./options-sound-player";

let isStagePlaying = true;

// ! for end game
function changeIsStagePlaying() {
  isStagePlaying = !isStagePlaying;
}

function addModifier(el, modifier) {
  let currentClass = el.classList[0];
  el.classList.add(`${currentClass}--${modifier}`);
}

function checkId(id) {
  return +id === gameCorrectId;
}

export function checkAnswer(target, id) {
  if (isStagePlaying) {
    if (checkId(id)) {
      changeIsStagePlaying();
      stopMusic();
      changeDisabledNextBtn();
      changeKindVisibility();
      changeGenusVisibility();
      changeImageVisibility();
      addModifier(target, "good");
      playSound("good");
    } else {
      addModifier(target, "bad");
      playSound("bad");
    }
  }
}
