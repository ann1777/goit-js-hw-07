import { galleryItems } from './gallery-items.js';
// Change code below this line
//1.Creating markup based on the galleryItems data array and the provided gallery item template.
 
const galleryContainer = document.querySelector('.gallery');
const itemsMarkup = createGalleryItemsMarkup(galleryItems);
galleryContainer.insertAdjacentHTML('beforeend', itemsMarkup);
galleryContainer.addEventListener('click', onImgClickCreateModal);

// rendered items
function createGalleryItemsMarkup(items) {
    return items.map(({ preview, original, description }) => {
        return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`
    }).join('');
}

// 2. Implementation of delegation to ul.gallery and obtaining the url of a large image.
function onImgClickCreateModal(e) {
    e.preventDefault();
    if (e.target.nodeName !== "IMG") {return;}

    const isItemImage = e.target.classList.contains("gallery__image");
    if (!isItemImage) {
        return;
    }

    const currentImgUrl = e.target.dataset.source;

    const instance = basicLightbox.create(
        `
		<img src="${currentImgUrl}" width="1280" height="auto"/>
        `,
        {
            onShow: (instance) => {
                window.addEventListener("keydown", onEscKeyPress);
            },
            onClose: (instance) => {
                window.removeEventListener("keydown", onEscKeyPress);
            },
        }
    );
    instance.show();

    function onEscKeyPress(event) {
        const ESC_KEY_CODE = 'Escape';
        const isEscKey = event.code === ESC_KEY_CODE;
        if (isEscKey) {
            instance.close();
        }
    }
}

// 3. Connecting the script and styles of the basicLightbox modal window library. Use the jsdelivr CDN service and add a link to the minified (.min) library files to the project.


// 4. Opening a modal window by clicking on a gallery element. To do this, familiarize yourself with the documentation and examples.


// 5. Overriding the value of the src attribute of the <img> element in the modal window before opening. Use the ready-made markup of the modal window with an image from the examples of the basicLightbox library.


console.log(galleryItems);
