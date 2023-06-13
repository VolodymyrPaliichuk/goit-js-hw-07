import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryList = document.querySelector(".gallery");

const addItems = galleryItems
  .map((item) => {
    return `<li class="gallery__item"><a class="gallery__link" href="${item.original}">
    <img class="gallery__image" src="${item.preview}" data-source="${item.original}" alt="${item.description}"/>
    </a></li>`;
  })
  .join("");
galleryList.insertAdjacentHTML("afterbegin", addItems);

const instance = basicLightbox.create(
  `
    <img src=""  alt=""/>`
);

galleryList.addEventListener("click", (event) => {
  event.preventDefault();

  if (event.target.nodeName !== "IMG") {
    return;
  }

  instance
    .element()
    .querySelector(".basicLightbox__placeholder img")
    .setAttribute("src", `${event.target.getAttribute("data-source")}`);

  instance.show();
});

galleryList.addEventListener("keydown", (event) => {
  const keyName = event.key;
  if (keyName === "Escape") {
    instance.close();
  }
});
