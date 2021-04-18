import galleryItems from './gallery-items.js';

const galleryContainer = document.querySelector('.js-gallery');
const galleryModalContainer = document.querySelector('.js-lightbox');
const lightBoxImage = document.querySelector('.lightbox__image');
const modalCloseBut = document.querySelector('.lightbox__button');

let curentIndex = 0;

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

galleryModalContainer.addEventListener('click', onModalCloseClick);

window.addEventListener('keydown', onModalKeyPress);


function onClic(evt) {
    if (evt.target.nodeName !== 'IMG') {
        return;
    }
    evt.preventDefault();
    galleryModalContainer.classList.add('is-open');
    lightBoxImage.src = evt.target.dataset.source;

    curentIndex = galleryItems.findIndex((item, index, array) => {
        return item.original === evt.target.dataset.source;
    });

};

function onModalCloseClick(evt) {

    if ((evt.target.nodeName !== 'BUTTON') && (evt.target.nodeName !== 'IMG')) {
        return;
    }

    galleryModalContainer.classList.remove('is-open');
    lightBoxImage.src = '';
}

function onModalKeyPress(evt) {
    
    if ((evt.code !== 'Escape') && (evt.code !== 'ArrowLeft') && (evt.code !== 'ArrowRight')) {
        return;
    }

    if (evt.code === 'Escape') {
        galleryModalContainer.classList.remove('is-open');
        lightBoxImage.src = '';
    } else if (evt.code !== 'ArrowRight') {
        curentIndex -= 1;
        if (curentIndex < 0) {
            curentIndex = galleryItems.length - 1;
        }
        lightBoxImage.src = galleryItems[curentIndex].original;
    } else {
        curentIndex += 1;
        if (curentIndex > galleryItems.length - 1) {
            curentIndex = 0;
        }
        lightBoxImage.src = galleryItems[curentIndex].original;
    }
}









