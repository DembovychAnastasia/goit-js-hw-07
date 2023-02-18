import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

console.log(galleryItems);
const container = document.querySelector('.gallery');
console.log(container);
const itemsMarkup = createGalleryItems(galleryItems);

function createGalleryItems(items) {
  return items.map(({ preview, original, description }) => {
      return `<li>
      <a class="gallery__item" href="${original}">
  <img class="gallery__image"
  src="${preview}" 
  alt="${description}" />
</a>
</li>`
  }).join('');
}
container.insertAdjacentHTML('beforeend', itemsMarkup);

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

