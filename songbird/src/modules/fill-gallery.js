import { getData } from "./get-data";

const gallery = document.querySelector(".gallery__content");

export function fillGallerySection() {
  const birdsData = getData().flat();
  gallery.innerHTML = "";
  for (let bird in birdsData) {
    console.log(birdsData[bird]);
    createGalleryItem("li", "gallery__item", birdsData[bird]);
  }
}

function createGalleryItem(tag, ccsClass, item) {
  const newElement = document.createElement(tag);
  newElement.classList.add(ccsClass);
  newElement.innerHTML = `
  <div class="gallery__photo">
    <img class="gallery__img" src="${item.image}">
  </div>
  <div class="gallery__info">
    <div class="gallery__classification">
      <h4 class="gallery__kind">${item.name}</h4>
      <div class="gallery__genus">${item.species}</div>
    </div>
    <div class="gallery__description">
    ${item.description}
    </div>
    <div class="gallery__player">
      <audio class="gallery__audio html-audio" controls="" 
        controlslist="nodownload noplaybackrate" src="  ${item.audio}"></audio>
    </div>
  </div>
  `;
  gallery.appendChild(newElement);
}

// name species description audio image
