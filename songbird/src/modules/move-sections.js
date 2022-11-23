import { start } from "./start-game";
import { fillResultsSection } from "./fill-game-result";
import { fillGallerySection } from "./fill-gallery";

window.showStarpageSection = function () {
  document.querySelector(".startpage").classList.add("active");
  document.querySelector(".game").classList.remove("active");
  document.querySelector(".result").classList.remove("active");
  document.querySelector(".results").classList.remove("active");
};

window.showGameSection = function () {
  document.querySelector(".game").classList.add("active");
  document.querySelector(".startpage").classList.remove("active");
  document.querySelector(".result").classList.remove("active");
  document.querySelector(".results").classList.remove("active");
  start();
};

window.showResultSection = function () {
  document.querySelector(".result").classList.add("active");
  document.querySelector(".game").classList.remove("active");
  document.querySelector(".startpage").classList.remove("active");
};

window.showResultsSection = function () {
  document.querySelector(".results").classList.add("active");
  document.querySelector(".game").classList.remove("active");
  document.querySelector(".startpage").classList.remove("active");
  document.querySelector(".result").classList.remove("active");
  fillResultsSection();
};

window.showGallerySection = function () {
  document.querySelector(".gallery").classList.add("active");
  document.querySelector(".game").classList.remove("active");
  document.querySelector(".startpage").classList.remove("active");
  document.querySelector(".result").classList.remove("active");
  document.querySelector(".results").classList.remove("active");
  fillGallerySection();
};
