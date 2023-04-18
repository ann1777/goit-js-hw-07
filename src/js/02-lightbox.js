import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainer = document.querySelector('.gallery');
const itemsMarkup = createGalleryItemsMarkup(galleryItems);
galleryContainer.insertAdjacentHTML('beforeend', itemsMarkup);

var lightbox = new SimpleLightbox('.gallery a', { 
    captionsData: "alt"
 });

//rendered items
function createGalleryItemsMarkup(items) {
    return items.map(({preview, original, description}) => {
        return `<li>
        <a class="gallery__item" href=${original}>
            <img class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
           />
        </a>
        </li>`
    }).join('');
}


console.log(galleryItems);
