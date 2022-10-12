const slider = document.querySelector(".pets__wrapper");
const leftButton = document.querySelector(".pets__control--left");
const rightButton = document.querySelector(".pets__control--right");

// Начальная генерация трех сдайдов

let offset = -1;

draw("red");
draw("green");
draw("blue");

function draw(color) {
  let slide = document.createElement("div");
  slide.classList.add("pets__slide");
  slide.style.left = `${offset * 100}%`;
  slide.style.backgroundColor = color;
  slider.appendChild(slide);

  offset++;
}

let c = 0;

function moveLeft() {
  leftButton.onclick = null;

  let slides = document.querySelectorAll(".pets__slide");
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.left = `${i * 100}%`;
  }

  // Удаляем последний слайд
  slides[slides.length - 1].remove();
  // Добавляем новый слайд в начало
  let slide = document.createElement("div");
  slide.classList.add(`pets__slide`);
  slide.style.left = `-100%`;
  slide.style.backgroundColor = `#${(c += 25)}c6${(c += 25)}`;
  slider.prepend(slide);

  setTimeout(() => {
    leftButton.onclick = moveLeft;
  }, 1200);
}

function moveRight() {
  rightButton.onclick = null;

  let slides = document.querySelectorAll(".pets__slide");
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.left = `-${(slides.length - i - 1) * 100}%`;
  }

  // Удаляем первый слад
  slides[0].remove();
  // Добавляем новый слайд в конец
  let slide = document.createElement("div");
  slide.classList.add(`pets__slide`);
  slide.style.left = `100%`;
  slide.style.backgroundColor = `#${(c += 25)}c6${(c += 25)}`;
  slider.appendChild(slide);

  setTimeout(() => {
    rightButton.onclick = moveRight;
  }, 1200);
}
