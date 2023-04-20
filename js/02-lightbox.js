import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainer = document.querySelector('.gallery');
const itemsMarkup = createGalleryItemsMarkup(galleryItems);

//rendered items
function createGalleryItemsMarkup(items) {
    return items.map(({preview, original, description}) => {
        return `<div class="gallery__item">
        <a class="gallery__link" href="${original}">
            <img class="gallery__image"
            src="${preview}"
            alt="${description}"
            loading="lazy"
           />
        </a>
    </div>`
    }).join('');
}
galleryContainer.insertAdjacentHTML('beforeend', itemsMarkup);

var lightbox = new SimpleLightbox('.gallery a', { 
    captionsData: "alt",
    captionDelay: 250
 });

console.log(galleryItems);
