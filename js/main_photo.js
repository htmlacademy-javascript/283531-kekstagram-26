import {mainPhoto} from './main.js';
// const pictures = document.querySelector('.pictures');
//
//
// pictures.addEventListener('click', (evt) => {
//   console.log(evt);
// });
const bigPicture = document.querySelector('.big-picture');


const body = document.querySelector('body');
const socialCommentCount = document.querySelector('.social__comment-count');
const commentsLoader = document.querySelector('.comments-loader');


const pictureListElement = document.querySelector('.pictures');
export const bigPictureOpen = () => {
  bigPicture.classList.remove('hidden');
};

export const appendInfo = () => {
  const bigPictureFragment = document.createDocumentFragment();

  mainPhoto.forEach(({url, likes, comments, description}) => {
    const bigPictureElement = bigPicture.cloneNode(true);
    bigPictureElement.querySelector('.big-picture__img').src = url;
    bigPictureElement.querySelector('.likes-count').textContent = likes;
    bigPictureElement.querySelector('.comments-count').textContent = comments;
    bigPictureElement.querySelector('.social__caption').textContent = description;
    bigPictureFragment.appendChild(bigPictureElement);
  });
  pictureListElement.appendChild(bigPictureFragment);
};

export const removeCommentCount = () => {
  socialCommentCount.classList.add('hidden');
};
export const removeLoader = () => {
  commentsLoader.classList.add('hidden');
};
export const bodyModalOpen = () => {
  body.classList.add('modal-open');
};

export const escFu = () => {

  document.addEventListener('keydown', (evt) => {
    if (evt.key === 'c') {
      bigPicture.classList.add('hidden');
    }
  });
};

export const bodyModalClose = () => {
  body.classList.remove('modal-open');
};
