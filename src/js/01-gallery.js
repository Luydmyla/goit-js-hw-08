// Add imports above this line
// Описан в документации
import SimpleLightbox from 'simplelightbox';
// Дополнительный импорт стилей
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items.js';
// Change code below this line
// console.log(galleryItems);
// --- ----нашла ссылку на элемент div.gallery ------------
const galleryListElem = document.querySelector('.gallery');
console.log(galleryListElem);
// --------------создаю разметку по шаблону (шаблонная строка)----------
const listImageElement = createListImageElement(galleryItems);
function createListImageElement(galleryItems) {

     return galleryItems.map(galleryItem => ` <a class="gallery__item" href="${galleryItem.original}">
  <img class="gallery__image" src="${galleryItem.preview}" alt="${galleryItem.description}" />
</a> `).join("");
}
// console.log(listImageElement);

// --------------рендер разметки (2 способа)-------------
// galleryListElem.innerHTML = listImageElements;
galleryListElem.insertAdjacentHTML("beforeend", listImageElement)

// --------- использую библиотеку симпллайтбокс как обработчик событий по клику на изображения-----------------
 let gallery = new SimpleLightbox('.gallery a', {
      captionsData: 'alt',
      captionPosition: 'bottom',
      captionDelay: 250,
    })
