// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import "simplelightbox/dist/simple-lightbox.min.css";
import SimpleLightbox from "simplelightbox"

console.log(galleryItems);
const galleryEl = document.querySelector('.gallery');


const imagesEl = galleryItems.map(({ preview, original, description }) =>
  `<li>
    <a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>
</li>`
).join('');
    


galleryEl.insertAdjacentHTML('beforeend',imagesEl);

// open
let gallery = new SimpleLightbox('.gallery a', {captionsData: "alt", captionDelay:250,});
