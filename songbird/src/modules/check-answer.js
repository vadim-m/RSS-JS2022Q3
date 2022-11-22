import {
  gameCorrectId,
  changeDisabledNextBtn,
  changeKindVisibility,
  changeGenusVisibility,
  changeImageVisibility,
} from "./start-game";
import { stopCurrentAudio } from "./main-player";
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

function checkVictory(id) {
  return +id === gameCorrectId;
}

function checkedClicked(option) {
  let isClicked = option.className.includes("bad");

  return isClicked;
}

export function checkAnswer(target, id) {
  if (isStagePlaying) {
    if (checkVictory(id)) {
      changeIsStagePlaying();
      stopCurrentAudio();
      changeDisabledNextBtn();
      changeKindVisibility();
      changeGenusVisibility();
      changeImageVisibility();
      addModifier(target, "good");
      playSound("good");
      const stageScore = getStageScore();
      increaseGameStore(stageScore);
    } else {
      if (!checkedClicked(target)) {
        addModifier(target, "bad");
        decreaseStageScore();
      }
      playSound("bad");
    }
  }
}
