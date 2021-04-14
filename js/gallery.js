import galleryItems from './gallery-items.js';

const galleryContainer = document.querySelector('.js-gallery');
const galleryModalContainer = document.querySelector('.js-lightbox');
const lightBoxImage = document.querySelector('.lightbox__image');
const modalCloseBut = document.querySelector('.lightbox__button');

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

galleryContainer.append(...elements);

galleryContainer.addEventListener('click', onClic);

function onClic(evt) {
    if (evt.target.nodeName !== 'IMG') {
        console.log(evt.target.nodeName);
        return;
    }
    evt.preventDefault();
    galleryModalContainer.classList.add('is-open');
    lightBoxImage.src = evt.target.src;

};

galleryModalContainer.addEventListener('click', onBtnClick);

function onBtnClick(evt) {
    if (evt.target.nodeName !== 'BUTTON') {
        return;
    }

    galleryModalContainer.classList.remove('is-open');
    lightBoxImage.src = '';
}





