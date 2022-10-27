let frameSize = 4;

// A utility function to count inversions in given
// array 'arr[]'. Note that this function can be
// optimized to work in O(n Log n) time. The idea
// here is to keep code small and simple.
function getInvCount(matrix) {
  const arr = matrix.flat();
  const emptyPuzzle = Math.max(...arr);

  let inv_count = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] !== emptyPuzzle && arr[j] !== emptyPuzzle && arr[i] > arr[j]) {
        inv_count++;
      }
    }
  }
  return inv_count;
}

// find Position of empty from bottom +++
function findXPosition(matrix) {
  const emptyPuzzle = Math.max(...matrix.flat());

  // start from bottom-right corner of matrix
  for (let i = frameSize - 1; i >= 0; i--) {
    for (let j = frameSize - 1; j >= 0; j--) {
      if (matrix[i][j] === emptyPuzzle) {
        return frameSize - i;
      }
    }
  }
}
// This function returns true if given
// instance of N*N - 1 puzzle is solvable
function isPuzzlesSolvable(puzzles) {
  // count inversions in given puzzles
  const invCount = getInvCount(puzzles);
  // if grid is odd
  if (frameSize % 2 !== 0) {
    // return true if inversion count is even
    return invCount % 2 == 0;
    // grid is even
  } else {
    // (pos = even && invCount = odd) || (pos = odd && invCount = even)
    // or true if (pos + invCount % 2 !== 0)
    const pos = findXPosition(puzzles);
    return (pos + invCount) % 2 !== 0;
  }
}

export function checkCombination(puzzles) {
  frameSize = puzzles.length;

  if (isPuzzlesSolvable(puzzles)) {
    return true;
  } else {
    return false;
  }
}
