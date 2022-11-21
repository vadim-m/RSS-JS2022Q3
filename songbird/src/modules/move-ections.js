window.showStarpageSection = function () {
  document.querySelector(".startpage").classList.add("active");
  document.querySelector(".game").classList.remove("active");
  document.querySelector(".results").classList.remove("active");
};

window.showGameSection = function () {
  document.querySelector(".game").classList.add("active");
  document.querySelector(".startpage").classList.remove("active");
  document.querySelector(".results").classList.remove("active");
  // ! TO DO start game
};

window.showResultSection = function () {
  document.querySelector(".results").classList.add("active");
  document.querySelector(".game").classList.remove("active");
  document.querySelector(".startpage").classList.remove("active");
};
