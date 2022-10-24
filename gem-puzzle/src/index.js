import "./index.html";
import "./index.scss";
import { createElement, appendElement } from "./modules/utils";

// get elements from page
const bodyElem = document.querySelector("body");

// side size
let sideSize = 4;
let puzzleCount = sideSize * sideSize;

// create wrapper
const wrapperElem = createElement("div", "wrapper", "noId", "");
appendElement(bodyElem, wrapperElem);

// create buttons wrapper
const buttonsElem = createElement("div", "buttons", "noId", "");
appendElement(wrapperElem, buttonsElem);

// create shuffle button
const shuffleBtnElem = createElement("button", "button", "shuffle", "Shuffle");
appendElement(buttonsElem, shuffleBtnElem);

// create puzzles wrapper
const puzzleElem = createElement("div", "puzzles", "puzzles", "");
appendElement(wrapperElem, puzzleElem);

// create array from 0 to size X size
const initialDigitsArr = new Array(puzzleCount)
  .fill(0)
  .map((value, index) => index + 1);

// start functions
fillPuzzles();

// matrix
let matrix = getMatrix(initialDigitsArr);

// get puzzles elements
const puzzles = Array.from(document.querySelectorAll(".puzzle"));
// delete last element
puzzles[puzzleCount - 1].style.display = "none";

// set position for every puzzle
setPuzzles(matrix);

// shuffle button click
shuffleBtnElem.addEventListener("click", (e) => {
  e.preventDefault();
  const mixedArr = shuffleArray(matrix.flat());
  matrix = getMatrix(mixedArr);

  setPuzzles(matrix);
});

// first click for upload page
shuffleBtnElem.click();

// fill puzzles wrapper
function fillPuzzles() {
  for (let i = 1; i <= initialDigitsArr.length; i++) {
    const puzzle = createElement("div", "puzzle", "noId", i);
    puzzle.dataset.pos = i;
    appendElement(puzzleElem, puzzle);
  }
}

// get matrix from simple array
function getMatrix(arr) {
  const matrix = [];

  for (let i = 0; i < sideSize; i++) {
    matrix.push([]);
  }

  let x = 0;
  let y = 0;

  for (let i = 0; i < arr.length; i++) {
    if (x >= sideSize) {
      y++;
      x = 0;
    }
    matrix[y][x] = arr[i];
    x++;
  }

  return matrix;
}

// set  position for every puzzle item
function setPuzzlePosition(posX, posY, puzzle) {
  const step = 100;
  puzzle.style.transform = `translate3D(${posX * step}%, ${posY * step}%, 0)`;
}

// put puzzles in place
function setPuzzles(matrix) {
  for (let y = 0; y < matrix.length; y++)
    for (let x = 0; x < matrix[y].length; x++) {
      const puzzleValue = matrix[y][x];
      const puzzle = puzzles[puzzleValue - 1];

      setPuzzlePosition(x, y, puzzle);
    }
}

// shuffle array fucntion
function shuffleArray(array) {
  let currentIndex = array.length,
    randomIndex;

  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}
