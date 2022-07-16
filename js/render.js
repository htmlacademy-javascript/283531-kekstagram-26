import {pictureComments, photos} from './main.js';
import {openPhotoPopup} from './main_photo.js';


export const renderPhotoList = (pictureList, pictureTemplate) => {
  const pictureListFragment = document.createDocumentFragment();

  photos.forEach(({url, likes, comments, description}) => {
    const pictureElement = pictureTemplate.cloneNode(true);
    pictureElement.querySelector('.picture__img').src = url;
    pictureElement.querySelector('.picture__likes').textContent = likes;
    pictureElement.querySelector('.picture__comments').textContent = comments.length;

    const data = {
      url, likes, comments,
      description
    };


    pictureElement.addEventListener('click', () => {
      openPhotoPopup(data);
    });

    pictureListFragment.appendChild(pictureElement);
  });

  pictureList.appendChild(pictureListFragment);

  console.log(pictureListFragment);
};

export const renderComments = (commentsList, commentsItem) => {
  const commentsFragment = document.createDocumentFragment();

  pictureComments.forEach(({commentsText}) => {
    const bigPictureComments = commentsItem.cloneNode(true);
    bigPictureComments.querySelector('.social__comment').textContent =commentsText;

    commentsFragment.appendChild(bigPictureComments);
  });
  commentsList.appendChild(commentsFragment);
};
