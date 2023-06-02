// Add imports above this line
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { galleryItems } from './gallery-items';

function makeGallery(items) {
  return galleryItems.map(({ preview, original, description }) =>
    `<li class="gallery__item">
  <a class="gallery__link" href=${original}>
    <img
      class="gallery__image"
      src=${preview}
      data-source=${original}
      alt=${description}
    />
  </a>
</li>`
  )
      .join("")

  }
const galleryList = document.querySelector('.gallery');
const galleryCards = makeGallery(galleryItems);

galleryList.innerHTML = galleryCards; 

const lightbox = new SimpleLightbox('.gallery a', { 
    captionSelector:'img',
    captionType: 'attr',
    captionsData: 'alt',
    captionDelay: 100,
 });

console.log(galleryItems);