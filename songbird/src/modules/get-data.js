import { getLanguage } from "./language-switcher";
import birdsData from "../data/birds";
import birdsDataEn from "../data/birds-en";

const copyDataRu = [...birdsData];
const copyDataEn = [...birdsDataEn];

function selectData() {
  const curentLang = getLanguage();
  let birdsData;
  if (curentLang === "en") {
    birdsData = copyDataEn;
  } else if (curentLang === "ru") {
    birdsData = copyDataRu;
  }

  return birdsData;
}

export function getData() {
  const data = selectData();
  return data;
}
