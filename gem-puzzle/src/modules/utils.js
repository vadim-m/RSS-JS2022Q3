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
