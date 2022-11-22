import { gameStage } from "./start-game";
import { addActiveClass, removeActiveClass } from "./utils";

const stages = document.querySelectorAll(".stage__item");

export function markActiveStage() {
  stages.forEach((item) => {
    removeActiveClass(item);
  });

  addActiveClass(stages[gameStage]);
}
