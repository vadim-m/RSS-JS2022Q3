// Добавить элементу класс active
function setActiveClass(item) {
  item.classList.add("active");
}

// Удалить элементу класс active
function removeActiveClass(item) {
  item.classList.remove("active");
}

// Переключить элементу класс active
function toggleActiveClass(item) {
  item.classList.toggle("active");
}

// Burger menu
const burgerButton = document.querySelector(".burger-menu");
const headerElem = document.querySelector(".header");
const headerDropdown = document.querySelector(".header__dropdown");
burgerButton.addEventListener("click", (e) => {
  e.preventDefault();

  toggleActiveClass(headerElem);
  toggleActiveClass(burgerButton);
});

headerDropdown.addEventListener("click", (e) => {
  removeActiveClass(headerElem);
  removeActiveClass(burgerButton);
});

// Testimonials Slider
const range = document.querySelector(".testimonials__slider");
const testimonialsList = document.querySelector(".testimonials__list");

// Обработка изменения слайдера range
range.addEventListener("change", () => {
  const testimonialElem = document.querySelector(".testimonials__item-wrap");
  const width = window.getComputedStyle(testimonialElem).width;
  testimonialsList.style.left = `${-range.value * parseFloat(width)}px`;
});

// Проверка на рамзер экрана, чтобы добавить +1 к интервалу для >= small desktop
function checkRange() {
  if (window.innerWidth < 1200) {
    range.setAttribute("max", "8");
  }
}

// Testimonials Popup
const popup = document.querySelector(".popup");
const popupItem = document.querySelector(".popup__item");

// Добавляем обработчик при ширине tablets и ниже
function checkTestimonials() {
  if (window.innerWidth < 992) {
    // Обработка клика на обертке отзывов
    testimonialsList.addEventListener("click", (e) => {
      setActiveClass(popup);
      popupItem.innerHTML = e.target.innerHTML;

      // Созадем кнопку закрытия отзыва (крестик)
      const popupButton = document.createElement("button");
      popupButton.classList.add("popup__close");
      popupItem.appendChild(popupButton);

      // Убрать popup при клике на кнопку закрытия отзыва
      popupButton.addEventListener("click", (e) => {
        e.preventDefault();
        removeActiveClass(popup);
      });
    });
  }
}

// Убрать popup при клике на область вокруг отзыва
popup.addEventListener("click", (e) => {
  if (e.target.classList.contains("popup__content")) {
    removeActiveClass(popup);
  }
});

checkRange();
checkTestimonials();

// Pets Carusel
function showTooltip() {
  alert(
    "Единственное что не успел сделать это карусель в блоке Pets. Не успел уложится в дедлайн. Если будет возможность проверьте, пожалуйста, не в первые дни кроссчека. Я постараюсь закончить третью неделю полностью чуть позже. Или напишите мне в discord @Vadim_M#0673, спасибо!"
  );
}
