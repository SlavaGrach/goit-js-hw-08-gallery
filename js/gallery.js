import galleryItems from './gallery-items.js';

const galleryContainer = document.querySelector('.js-gallery');


const makeGalleryImage = ({preview, original, description}) => {
    const galleryItemEl = document.createElement('li');
    galleryItemEl.classList.add('gallery__item');

    const galleryLinkEl = document.createElement('a');
    galleryLinkEl.classList.add('gallery__link');
    galleryLinkEl.href = original;

    const galleryImgEl = document.createElement('img');
    galleryImgEl.classList.add('gallery__image');
    galleryImgEl.src = preview;
    galleryImgEl.setAttribute('data-source', original);
    galleryImgEl.alt = description;

    galleryLinkEl.append(galleryImgEl);
    galleryItemEl.append(galleryLinkEl);

    return galleryItemEl;
};

const elements = galleryItems.map(makeGalleryImage);

console.log(elements);

galleryContainer.append(...elements);


console.log(makeGalleryImage(galleryItems[0]));

// console.log(galleryContainer);
{/* <li class="gallery__item">
  <a
    class="gallery__link"
    href="https://cdn.pixabay.com/photo/2010/12/13/10/13/tulips-2546_1280.jpg"
  >
    <img
      class="gallery__image"
      src="https://cdn.pixabay.com/photo/2010/12/13/10/13/tulips-2546__340.jpg"
      data-source="https://cdn.pixabay.com/photo/2010/12/13/10/13/tulips-2546_1280.jpg"
      alt="Tulips"
    />
  </a>
</li> */}