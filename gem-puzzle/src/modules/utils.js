export function createElement(tag, ccsClass, id, content) {
  const newElement = document.createElement(tag);
  newElement.classList.add(ccsClass);
  if (id !== "noId") {
    newElement.id = id;
  }
  newElement.textContent = content;
  return newElement;
}

export function appendElement(parent, child) {
  parent.appendChild(child);
}

// fill array from 0 to size X
export function fillArray(itemsCount) {
  return new Array(itemsCount).fill(0).map((value, index) => index + 1);
}

// shuffle array fucntion
export function shuffleArray(arr) {
  const array = arr.slice();

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

// create matrix
// get matrix from simple array
export function getMatrix(arr, sideSize) {
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
