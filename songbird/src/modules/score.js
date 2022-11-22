const scoreEl = document.querySelector(".score__number");

let gameScore = 0;
let stageScore = 5;

export function getStageScore() {
  return stageScore;
}

export function getGameScore() {
  return gameScore;
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

export function resetGameScore() {
  gameScore = 0;
}

export function renderScore() {
  scoreEl.textContent = gameScore;
}
