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

const gameScoreFromLocaleStorage = JSON.parse(
  localStorage.getItem("gameScore")
);
const gameScoreData = gameScoreFromLocaleStorage
  ? gameScoreFromLocaleStorage
  : ["-- // --"];

export function addGameScoreToLocal(score) {
  if (typeof gameScoreData[0] === "string") {
    gameScoreData.shift();
  }

  gameScoreData.push(score);
  gameScoreData.sort(function (a, b) {
    return b - a;
  });

  const maxScoresCount = 5;
  if (gameScoreData.length > maxScoresCount) {
    gameScoreData.splice(maxScoresCount, 1);
  }

  localStorage.setItem("gameScore", JSON.stringify(gameScoreData));
}
