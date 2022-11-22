import { gameStage } from "./start-game";
import { addActiveClass, removeActiveClass } from "./utils";

const stages = document.querySelectorAll(".stage__item");

export function markActiveStage() {
  stages.forEach((item) => {
    item.classList.remove("active");
  });

  stages[gameStage].classList.add("active");
}
