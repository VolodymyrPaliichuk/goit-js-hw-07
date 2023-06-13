import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector(".gallery");

const addItems = galleryItems
  .map((galleryItem) => {
    return `<li class="gallery__item">
   <a class="gallery__link" href="${galleryItem.original}">
      <img class="gallery__image" src="${galleryItem.preview}" alt="${galleryItem.description}" />
   </a>
</li>`;
  })
  .join("");

gallery.insertAdjacentHTML("afterbegin", addItems);

let lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});

gallery.addEventListener("click", (event) => {
  event.preventDefault();

  if (event.target.nodeName !== "A") {
    return;
  }

  lightbox.on("show.simplelightbox", function () {
    event.target.getAttribute("href");
  });
});
