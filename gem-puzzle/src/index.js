import "./index.html";
import "./index.scss";
import { createElement, appendElement } from "./modules/utils";
import {
  appendButtons,
  shuffleBtnElem,
  soundBtnElem,
  resultBtnElem,
} from "./modules/buttons";
import {
  appendCounters,
  countersElem,
  increaseMoves,
  resetMoves,
  updateMoves,
  getMoves,
  stopwatchElem,
} from "./modules/counters";
import { appendSizeSelect, selectElem } from "./modules/size-select";

// create and add wrapper
const wrapperElem = createElement("div", "wrapper", "noId", "");
appendElement(document.body, wrapperElem);

// add buttons
appendButtons(wrapperElem);
// add counters
appendCounters(wrapperElem);

// create and add puzzle wrapper
const puzzleElem = createElement("div", "puzzles", "puzzles", "");
appendElement(wrapperElem, puzzleElem);

// add size select
appendSizeSelect(wrapperElem);

// side size
let sideSize = 4;
let puzzleCount = sideSize * sideSize;

// Handle click on puzzle (event listener on puzzles wrapper)
puzzleElem.addEventListener("click", (e) => {
  const puzzle = e.target;

  if (e.target !== puzzleElem) {
    const puzzleNum = +puzzle.dataset.pos;
    const puzzlePosition = getPositionByNum(puzzleNum, matrix);
    const emptyPuzzlePosition = getPositionByNum(puzzleCount, matrix);

    const isPossible = canSwapPuzzles(puzzlePosition, emptyPuzzlePosition);

    if (isPossible) {
      // moves counter
      increaseMoves();
      updateMoves();

      swapPuzzles(matrix, puzzlePosition, emptyPuzzlePosition);
      setPuzzles(matrix);
    }
  }
});

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
  // moves counter
  resetMoves();
  updateMoves();

  const mixedArr = shuffleArray(matrix.flat());
  matrix = getMatrix(mixedArr);

  setPuzzles(matrix);
});

// start the game when page uploaded
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

// put puzzles in its place
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

// find puzzle coordinates
function getPositionByNum(num, matrix) {
  for (let y = 0; y < matrix.length; y++) {
    for (let x = 0; x < matrix[y].length; x++) {
      if (matrix[y][x] === num) {
        return { x, y };
      }
    }
  }

  return null;
}

// is valid to swap two items?
function canSwapPuzzles(firstPos, secondPos) {
  const dx = Math.abs(firstPos.x - secondPos.x);
  const dy = Math.abs(firstPos.y - secondPos.y);

  return (
    (dx === 1 || dy === 1) &&
    (firstPos.x === secondPos.x || firstPos.y === secondPos.y)
  );
}

// swap to items
function swapPuzzles(matrix, firstPos, secondPos) {
  const firstPosition = matrix[firstPos.y][firstPos.x];
  matrix[firstPos.y][firstPos.x] = matrix[secondPos.y][secondPos.x];
  matrix[secondPos.y][secondPos.x] = firstPosition;
}

// moves counter

selectElem.addEventListener("change", (e) => {
  sideSize = e.target.value;
  puzzleCount = sideSize * sideSize;
  const mixedArr = shuffleArray(matrix.flat());
  matrix = getMatrix(mixedArr);

  setPuzzles(matrix);
});
