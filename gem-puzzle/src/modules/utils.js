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

// shuffle array fucntion
export function shuffleArray(array) {
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
