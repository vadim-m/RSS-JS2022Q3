const scoreEl = document.querySelector(".score__number");

let gameScore = 0;
let stageScore = 5;

export function getStageScore() {
  return stageScore;
}

export function decreaseStageScore() {
  stageScore--;
}

export function resetStageScore() {
  stageScore = 5;
}

export function increaseGameStore(num) {
  gameScore += num;
}

export function resetGameStore() {
  gameScore = 0;
}

export function renderScore() {
  scoreEl.textContent = gameScore;
}
