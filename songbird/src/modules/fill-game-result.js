import { addActiveClass, removeActiveClass } from "./utils";

let stageScore = 5;

const resultLogo = document.querySelector(".result__logo");
const resultScore = document.querySelector(".result__score");
const resultVictory = document.querySelector(".result__victory");

// ! если макс - то виктори актив картинка актив

export function fillResultSection(score, gameStages) {
  resultScore.textContent = score;

  if (score === stageScore * gameStages) {
    addActiveClass(resultLogo);
    addActiveClass(resultVictory);
  } else {
    removeActiveClass(resultLogo);
    removeActiveClass(resultVictory);
  }
}
