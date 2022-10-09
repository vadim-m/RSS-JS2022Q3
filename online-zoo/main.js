const range = document.querySelector(".testimonials__slider");
const testimonialsList = document.querySelector(".testimonials__list");

// Обработка изменения слайдера range
range.addEventListener("change", () => {
  const testimonialElem = document.querySelector(".testimonials__item-wrap");
  const width = window.getComputedStyle(testimonialElem).width;
  testimonialsList.style.left = `${-range.value * parseFloat(width)}px`;
});

// Проверка на рамзер экрана, чтобы добавить +1 к интервалу для small desktop
function checkRange() {
  if (window.innerWidth < 1200) {
    range.setAttribute("max", "8");
  }
}

checkRange();
