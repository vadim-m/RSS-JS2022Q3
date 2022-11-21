const scoreEl = document.querySelector(".score__number");

let gameScore = 10;
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

export function renderScore() {
  scoreEl.textContent = gameScore;
}
