import { getLanguage } from "./language-switcher";

const textData = {
  "startpage__btn--game": ["Игра", "Game"],
  "startpage__btn--results": ["Результаты", "Results"],
  "startpage__btn--gallery": ["Галерея", "Gallery"],
  "startpage__checkbox-text": ["Сменить язык:", "Language:"],
  game__questions: ["Вопрос:", "Question:"],
  score__text: ["Счёт:", "Score:"],
  footer__info: ["Вадим Монастырский © 2022", "Vadim Monastyrskiy © 2022"],
  bird__placeholder: [
    "Прослушайте трек и выберите правильный вариант ответа.",
    "Listen to the track and choose the correct answer.",
  ],
  result__victory: [
    "Поздравляем! Вы набрали максимум очков!",
    "Congratulations! You have scored the maximum points!",
  ],
  result__message: [
    "Спасибо за игру. Хотите сыграть ещё раз?",
    "Thanks for playing. Do you want to play again?",
  ],
  "result__btn--game": ["Игра", "Game"],
  "result__btn--main": ["Главная", "Main"],
  "result__btn--gallery": ["Галерея", "Gallery"],
  gallery__btn: ["Главная", "Main"],
  result__title: ["Результат:", "Result"],
  "results__btn--game": ["Игра", "Game"],
  "results__btn--main": ["Главная", "Main"],
  "results__btn--gallery": ["Галерея", "Gallery"],
};

function fillElemText(key) {
  const isRussian = getLanguage() === "ru" ? 0 : 1;

  document.querySelector(`.${key}`).textContent = textData[key][isRussian];
}
//
export function fillTextContent() {
  for (let key in textData) {
    fillElemText(key);
  }
}
