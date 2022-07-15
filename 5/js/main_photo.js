import {mainPhoto} from './main.js';

const body = document.querySelector('body');
const socialCommentCount = document.querySelector('.social__comment-count');
const commentsLoader = document.querySelector('.comments-loader');
const pictureListElement = document.querySelector('.pictures');
const bigPictureTemplate = document.querySelector('#picture').content.querySelector('.big-picture');


const bigPictureFragment = document.createDocumentFragment();

mainPhoto.forEach(({url, likes, comments, description }) => {
  const bigPictureElement = bigPictureTemplate.cloneNode(true);
  bigPictureElement.querySelector('.big-picture__img').src = url;
  bigPictureElement.querySelector('.likes-count').textContent = likes;
  bigPictureElement.querySelector('.comments-count').textContent = comments;
  bigPictureElement.querySelector('.social__caption').textContent = description;
  bigPictureFragment.appendChild(bigPictureElement);
});
pictureListElement.appendChild(bigPictureFragment);


socialCommentCount.classList.remove('hidden');
commentsLoader.classList.remove('hidden');


bigPictureTemplate.classList.remove('hidden');
body.classList.add('modal-open');
