const slider = document.querySelector(".pets__slider");
const leftButton = document.querySelector(".pets__control--left");
const rightButton = document.querySelector(".pets__control--right");

// Массив с данными для карусели в блоке pets
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
    photo: "tiger",
    title: "amur tigers",
    habitat: "Native to Taiga",
    icon: "meet",
  },
  {
    photo: "horse",
    title: "horses",
    habitat: "Native to Asia",
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

// Создаем слайд. Сколько раз запустить draw()
// столько слайдов и будет крутиться в карусели
function draw() {
  // Создаем слайд
  const slide = document.createElement("div");
  slide.classList.add("pets__slide");
  slide.style.left = `${offset * 100}%`;

  // Наполняем слайд
  slide.appendChild(fillSlide());
  // Добавили слайд в слайдер (в pets__slider)
  slider.appendChild(slide);
  // Увеличили переменную смещения слайдов
  offset++;
}

// Это для смещения слайдов (-1 -->  второй слайд по центру родителя)
let offset = -1;

// Клик по стрелке влево
function moveLeft() {
  // Предотвращаем много кликов до конца анимации
  leftButton.onclick = null;
  // Двигаем имеющиеся слайды
  const slides = document.querySelectorAll(".pets__slide");
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.left = `${i * 100}%`;
  }

  // Удаляем последний слайд
  slides[slides.length - 1].remove();
  // Добавляем новый слайд в начало
  const slide = document.createElement("div");
  slide.classList.add(`pets__slide`);
  // Чтобы был левее всех
  slide.style.left = `-100%`;
  // Наполняем слайд
  slide.appendChild(fillSlide());
  // Добавляем в начало слайдера
  slider.prepend(slide);

  setTimeout(() => {
    // Возращаем слушатель
    leftButton.onclick = moveLeft;
    // Генерируем новые карточки последнему слайду
    const slides = document.querySelectorAll(".pets__slide");
    slides[slides.length - 1].innerHTML = "";
    slides[slides.length - 1].appendChild(fillSlide());
  }, 900);
}

// Клик по стрелке вправо
function moveRight() {
  // Предотвращаем много кликов до конца анимации
  rightButton.onclick = null;
  // Двигаем имеющиеся слайды
  const slides = document.querySelectorAll(".pets__slide");
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.left = `-${(slides.length - i - 1) * 100}%`;
  }

  // Удаляем первый слад
  slides[0].remove();
  // Добавляем новый слайд в конец
  const slide = document.createElement("div");
  slide.classList.add(`pets__slide`);
  // Чтобы был правее всех
  slide.style.left = `100%`;
  // Наполняем слайд
  slide.appendChild(fillSlide());
  // Добавляем в конец слайдера
  slider.appendChild(slide);

  setTimeout(() => {
    // Возращаем слушатель
    rightButton.onclick = moveRight;
    // Генерируем новые карточки первому слайду
    const slides = document.querySelectorAll(".pets__slide");
    slides[0].innerHTML = "";
    slides[0].appendChild(fillSlide());
  }, 900);
}

// Функция для заполнения одного слайда
function fillSlide() {
  // Создаем список карточек
  const cards = document.createElement("div");
  cards.classList.add("pets__cards");
  // Создаем массив с 6-ю рандомными числами
  const arrOfRndIndexes = getRandomArr();

  // Создаем 6 карточек и добавляем их в список
  for (let i = 0; i < 6; i++) {
    // Берем  индекс из массива с рандомными числами
    const rndIndex = arrOfRndIndexes[i];
    // Создаем и наполняем карточку
    const card = document.createElement("div");
    card.classList.add("pets__card");
    card.innerHTML = `
        <div class="pets__photo">
          <img src="./assets/images/pets/${petsData[rndIndex].photo}.jpg" alt="photo of ${petsData[rndIndex].photo}" class="pets__img">
        </div>
        <div class="pets__info">
          <div class="pets__text">
            <h4 class="pets__title">${petsData[rndIndex].title}</h4>
            <div class="pets__habitat">${petsData[rndIndex].habitat}</div>
          </div>
          <div class="pets__icon">
            <svg class="pets__svg">
              <use xlink:href="./assets/icons/pets/pets.svg#${petsData[rndIndex].icon}"></use>
            </svg>
          </div>
      `;
    // Добавляем каждую карточку в список карточек
    cards.appendChild(card);
  }
  // Возвращаем созданный список, чтобы затем добавить его в слайд
  return cards;
}

// Функция получения массива с 6-ю рандомными числами
function getRandomArr() {
  const arr = [];

  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    //Максимум не включается, минимум включается
    return Math.floor(Math.random() * (max - min)) + min;
  }
  // Наполняем массив 6-ю рандомными числа (по числу карточек)
  while (arr.length < 6) {
    // Диапазон от 0 до количества объектов из petsData
    const randonDigit = getRandomInt(0, petsData.length);
    // Если рандомное число уникально - добавляем в массив
    if (!arr.includes(randonDigit)) {
      arr.push(randonDigit);
    }
  }

  return arr;
}

// Начальная генерация трех сдайдов. Можно и больше
draw();
draw();
draw();
