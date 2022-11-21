import {
  gameCorrectId,
  changeDisabledNextBtn,
  changeKindVisibility,
  changeGenusVisibility,
  changeImageVisibility,
  encreaseStageCount,
} from "./start-game";
import { stopMusic } from "./main-player";
import { playSound } from "./options-sound-player";
import { decreaseStageScore, getStageScore, increaseGameStore } from "./score";

let isStagePlaying = true;

export function changeIsStagePlaying() {
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
      const stageScore = getStageScore();
      increaseGameStore(stageScore);
      encreaseStageCount();
    } else {
      addModifier(target, "bad");
      playSound("bad");
      decreaseStageScore();
    }
  }
}
