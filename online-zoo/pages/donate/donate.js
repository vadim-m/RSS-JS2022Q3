const radioWrapper = document.querySelector(".scale__radios");
const radios = document.querySelectorAll(".scale__radio");
const labels = document.querySelectorAll(".scale__label");
const donateInput = document.querySelector("#donate-form__input");

// Обработка клика на обёртке радио кнопок
radioWrapper.addEventListener("click", (e) => {
  const value = e.target.id;

  changeActiveElements(labels, value);
  setInputValue(value);
});

// Изменение активного класса у элементов label
function changeActiveElements(nodelist, value) {
  nodelist.forEach((item) => {
    removeActiveClass(item);

    if (value === item.attributes.for.value) {
      setActiveClass(item);
    }
  });
}

// Установить значение в поле .donate-form__input
function setInputValue(value) {
  donateInput.value = value;
}

// Обработка изменения инпута
donateInput.addEventListener("input", (e) => {
  const value = donateInput.value;

  // Ограничения на ввод не более 4х цифр
  if (+value <= 0 || +value > 9999 || donateInput.length >= 4) {
    donateInput.value = value.slice(0, 4);
    return;
  }

  // Имитация клика по радио кнопке с установленным значением
  const radioButtonValues = [5000, 2000, 1000, 500, 250, 100, 50, 25];
  if (radioButtonValues.includes(+value)) {
    const targetRadio = document.querySelector(`.scale__radio[id='${+value}']`);
    targetRadio.click();

    return;
  }

  // Ввели число, которое не совпадает ни с одним из установленных значений
  changeActiveElements(labels, value);
  removeCheckedRadio(radios);
});

// Удаляем атрибут checked на радиокнопках
function removeCheckedRadio(nodelist) {
  nodelist.forEach((item) => {
    item.checked = false;
  });
}
