import "./index.html";
import "./index.scss";
import {
  createElement,
  appendElement,
  fillArray,
  shuffleArray,
  getMatrix,
} from "./modules/utils";
import {
  appendButtons,
  shuffleBtnElem,
  soundBtnElem,
  resultBtnElem,
} from "./modules/buttons";
import {
  appendCounters,
  increaseMoves,
  resetMoves,
  updateMoves,
  startStopwatch,
  resetStopwatch,
  stopStopwatch,
} from "./modules/counters";
import { appendSizeSelect, selectElem } from "./modules/size-select";
import { playSound, togglePlaySound } from "./modules/sounds-player";
import { checkCombination } from "./modules/is-puzzles-solvable";
import { appendScoreList, appendScorePopup, showPopup } from "./modules/score";

// create and add page wrapper
const wrapperElem = createElement("div", "wrapper", "noId", "");
appendElement(document.body, wrapperElem);
// add buttons
appendButtons(wrapperElem);
// add counters
appendCounters(wrapperElem);
// create and add puzzle wrapper
const puzzlesElem = createElement("div", "puzzles", "puzzles", "");
appendElement(wrapperElem, puzzlesElem);
// add size select
appendSizeSelect(wrapperElem);
// add list and popup
appendScoreList(wrapperElem);
appendScorePopup(wrapperElem);

// PARAMS FOR START GAME
let sideSize = 4;
let puzzleCount = sideSize * sideSize;
let initialDigitsArr = [];
let matrix;
let puzzles = [];

// START GAME
startGame(sideSize);

// EVENT LISTENERS
// shuffle button click
shuffleBtnElem.addEventListener("click", (e) => {
  e.preventDefault();
  // play shuffle sound
  playSound("shuffle");
  // moves counter reset
  resetMoves();
  updateMoves();
  // stopwatch reset
  resetStopwatch();

  let mixedArr = shuffleArray(matrix.flat());
  matrix = getMatrix(mixedArr, sideSize);

  // check combine
  let isSolvable = checkCombination(matrix);
  console.log(isSolvable);
  while (!isSolvable) {
    mixedArr = shuffleArray(matrix.flat());
    matrix = getMatrix(mixedArr, sideSize);
    isSolvable = checkCombination(matrix);
  }

  setPuzzles(matrix);
});

// sound button click
soundBtnElem.addEventListener("click", (e) => {
  e.preventDefault();
  e.target.classList.toggle("active");
  // On / Off sounds
  togglePlaySound();
});

// puzzles wrapper click (on one puzzle)
puzzlesElem.addEventListener("click", (e) => {
  const puzzle = e.target;

  if (e.target !== puzzlesElem) {
    const puzzleNum = +puzzle.dataset.pos;
    const puzzlePosition = getPositionByNum(puzzleNum, matrix);
    const emptyPuzzlePosition = getPositionByNum(puzzleCount, matrix);

    const isPossible = canSwapPuzzles(puzzlePosition, emptyPuzzlePosition);
    if (isPossible) {
      // moves counter
      increaseMoves();
      updateMoves();
      // play move sound
      playSound("move");
      // swap items
      doSwapPuzzles(matrix, puzzlePosition, emptyPuzzlePosition);
      setPuzzles(matrix);
      checkVictory(matrix);
    }
  }
});

// select (change frame) click
selectElem.addEventListener("change", (e) => {
  sideSize = e.target.value;
  startGame(sideSize);
});

// result button click
resultBtnElem.addEventListener("click", (e) => {
  document.querySelector("#score").classList.toggle("hide");
});

// FUNCTIONS
export function startGame(frameSize) {
  frameSize = frameSize ? frameSize : sideSize;
  // clear puzzles and stop stopwatch if its not a first game
  if (puzzles.length > 0) {
    puzzlesElem.innerHTML = ``;
    puzzles = [];
    stopStopwatch();
  }
  // calc puzzles counr
  puzzleCount = frameSize * frameSize;
  // create array from 0 to size X size
  initialDigitsArr = fillArray(puzzleCount);
  // fill items in puzzles wrapper
  fillPuzzles(initialDigitsArr);
  // get shuffles array
  let mixedArr = shuffleArray(initialDigitsArr);
  // get started matrix
  matrix = getMatrix(mixedArr, sideSize);

  // check combine
  let isSolvable = checkCombination(matrix);
  while (!isSolvable) {
    mixedArr = shuffleArray(matrix.flat());
    matrix = getMatrix(mixedArr, sideSize);
    isSolvable = checkCombination(matrix);
  }

  // set position for every puzzle
  setPuzzles(matrix);
  // play shuffle sound
  playSound("shuffle");
  // start stopwatch
  resetStopwatch();
  startStopwatch();
  // moves counter reset
  resetMoves();
  updateMoves();
}

// fill puzzles wrapper
function fillPuzzles(arr) {
  for (let i = 1; i <= arr.length; i++) {
    const puzzle = createElement("div", "puzzle", "noId", i);
    puzzle.dataset.pos = i;
    // fill puzzles array
    puzzles.push(puzzle);
    // hide last puzzle
    if (i === arr.length) {
      puzzle.style.display = "none";
    }
    // add puzzle in puzzles wrapper
    appendElement(puzzlesElem, puzzle);
  }
}

// set  position for every puzzle item
function setPuzzlePosition(posX, posY, puzzle) {
  const step = 100;
  puzzle.style.width = `${100 / sideSize}%`;
  puzzle.style.height = `${100 / sideSize}%`;
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
function doSwapPuzzles(matrix, firstPos, secondPos) {
  const firstPosition = matrix[firstPos.y][firstPos.x];
  matrix[firstPos.y][firstPos.x] = matrix[secondPos.y][secondPos.x];
  matrix[secondPos.y][secondPos.x] = firstPosition;
}

function checkVictory(matrix) {
  const flattedMatrix = matrix.flat();
  for (let i = 0; i < flattedMatrix.length; i++) {
    if (flattedMatrix[i] !== initialDigitsArr[i]) {
      return;
    }
  }
  // play music
  playSound("win");
  // stop stopwatch
  stopStopwatch();
  // show popup
  showPopup();
}
