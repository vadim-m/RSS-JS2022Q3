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
  console.log(el.classList);
}

function checkId(id) {
  return +id === gameCorrectId;
}

export function checkAnswer(target, id) {
  // ! show info

  if (isStagePlaying) {
    if (checkId(id)) {
      addModifier(target, "good");
      changeIsStagePlaying();
      stopMusic();
      changeDisabledNextBtn();
      changeKindVisibility();
      changeGenusVisibility();
      changeImageVisibility();
      playSound("win");
    } else {
      addModifier(target, "bad");
      playSound("lose");
    }
    console.log(gameCorrectId, +id, target);
  }
}
