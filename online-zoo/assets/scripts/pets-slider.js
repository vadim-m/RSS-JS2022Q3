const slider = document.querySelector(".pets__wrapper");
const leftButton = document.querySelector(".pets__control--left");
const rightButton = document.querySelector(".pets__control--right");

const petsData = [
  {
    photo: "panda",
    title: "Giant Pandas",
    habitat: "Native to Southwest Chin",
    icon: "banana",
  },
  {
    photo: "eagle",
    title: "Eagles",
    habitat: "Native to Southwest Chin",
    icon: "meet",
  },
  {
    photo: "gorilla",
    title: "gorillas",
    habitat: "Native to Congo",
    icon: "banana",
  },
  {
    photo: "sloth",
    title: "two-woed sloths",
    habitat: "Native South America",
    icon: "banana",
  },
  {
    photo: "cheetah",
    title: "cheetahs",
    habitat: "Native to Africa",
    icon: "meet",
  },
  {
    photo: "dog",
    title: "Golden Retrievers",
    habitat: "Native to Scotland",
    icon: "meet",
  },
  {
    photo: "alligator",
    title: "alligators",
    habitat: "Native to Southeastern U. S.",
    icon: "meet",
  },
  {
    photo: "penguin",
    title: "penguins",
    habitat: "Native to Antarctica",
    icon: "meet",
  },
  {
    photo: "elephant",
    title: "elephants",
    habitat: "Native to Africa",
    icon: "banana",
  },
];

// Делаем второй слайд по центру родителя
let offset = -1;
// Начальная генерация трех сдайдов
draw("red");
draw("green");
draw("blue");

function draw(color) {
  const slide = document.createElement("div");
  slide.classList.add("pets__slide");
  slide.style.left = `${offset * 100}%`;
  slide.style.backgroundColor = color;

  // tesr fill
  slide.appendChild(fillSlide());
  //
  slider.appendChild(slide);

  offset++;
}

// Стрелка влево
function moveLeft() {
  // Предотвращаем много кликов до конца анимации
  leftButton.onclick = null;

  const slides = document.querySelectorAll(".pets__slide");
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.left = `${i * 100}%`;
  }

  // Удаляем последний слайд
  slides[slides.length - 1].remove();
  // Добавляем новый слайд в начало
  const slide = document.createElement("div");
  slide.classList.add(`pets__slide`);
  slide.style.left = `-100%`;
  slide.style.backgroundColor = `beige`;
  slider.prepend(slide);

  // Возращаем слушатель
  setTimeout(() => {
    leftButton.onclick = moveLeft;
  }, 1200);
}

// Стрелка вправо
function moveRight() {
  // Предотвращаем много кликов до конца анимации
  rightButton.onclick = null;

  const slides = document.querySelectorAll(".pets__slide");
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.left = `-${(slides.length - i - 1) * 100}%`;
  }

  // Удаляем первый слад
  slides[0].remove();
  // Добавляем новый слайд в конец
  const slide = document.createElement("div");
  slide.classList.add(`pets__slide`);
  slide.style.left = `100%`;
  slide.style.backgroundColor = `beige`;
  slider.appendChild(slide);

  // Возращаем слушатель
  setTimeout(() => {
    rightButton.onclick = moveRight;
  }, 1200);
}

function fillSlide() {
  const cards = document.createElement("div");
  cards.classList.add("pets__cards");

  for (let i = 0; i < 6; i++) {
    const card = document.createElement("div");
    card.classList.add("pets__card");
    card.innerHTML = `
        <div class="pets__photo">
          <img src="./assets/images/pets/${petsData[i]["photo"]}.jpg" alt="photo of ${petsData[i]["photo"]}" class="pets__img">
        </div>
        <div class="pets__info">
          <div class="pets__text">
            <h4 class="pets__title">${petsData[i]["title"]}</h4>
            <div class="pets__habitat">${petsData[i]["habitat"]}</div>
          </div>
          <div class="pets__icon">
            <svg class="pets__svg">
              <use xlink:href="./assets/icons/pets/pets.svg#${petsData[i]["icon"]}"></use>
            </svg>
          </div>
      `;

    cards.appendChild(card);
  }

  return cards;
}
