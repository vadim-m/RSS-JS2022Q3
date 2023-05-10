// 0 and 1 includes
export function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function addActiveClass(el) {
  el.classList.add("active");
}

export function removeActiveClass(el) {
  el.classList.remove("active");
}
