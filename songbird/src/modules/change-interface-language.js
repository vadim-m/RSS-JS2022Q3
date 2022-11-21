import { getLanguage } from "./language-switcher";

const textData = {
  "startpage__btn--game": ["Игра", "Game"],
  "startpage__btn--results": ["Результаты", "Results"],
  "startpage__btn--gallery": ["Галерея", "Gallery"],
  "startpage__checkbox-text": ["Сменить язык:", "Language:"],
  game__questions: ["Вопрос:", "Question:"],
  score__text: ["Счёт:", "Score:"],
  footer__info: ["Вадим Монастырский © 2022", "Vadim Monastyrskiy © 2022"],
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
