import { fillTextContent } from "./change-interface-language";

const languageSwitcher = document.querySelector(".startpage__checkbox-input");

let language = localStorage.getItem("language")
  ? localStorage.getItem("language")
  : "ru";

if (language === "en") {
  languageSwitcher.checked = true;
}

languageSwitcher.addEventListener("change", (e) => {
  e.preventDefault();

  if (languageSwitcher.checked) {
    localStorage.setItem("language", "en");
    language = "en";
    fillTextContent();
  } else {
    localStorage.setItem("language", "ru");
    language = "ru";
    fillTextContent();
  }
});

export function getLanguage() {
  return language;
}
