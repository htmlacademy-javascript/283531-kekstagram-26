const bigPicture = document.querySelector('.big-picture');
const commentsList = document.querySelector('.social__comments');
const commentsItem = document.querySelector('#comment');
const body = document.querySelector('body');
const popupCloseButton = document.querySelector('.big-picture__cancel');
const likesCount = document.querySelector('.likes-count');
const socialCaption = document.querySelector('.social__caption');
const socialCommentCount = document.querySelector('.social__comment-count');

export const closePhotoPopup = () => {
  bigPicture.classList.add('hidden');
  body.classList.remove('modal-open');

  popupCloseButton.removeEventListener('click', closePhotoPopup);
};

export const openPhotoPopup = (data, commentsText) => () => {
  const img = document.querySelector('.big-picture__img img');
  img.src = data.url;
  likesCount.textContent = data.likes;
  socialCaption.textContent = data.description;
  socialCommentCount.textContent = `${data.comments.length} комментариев`;
  commentsList.textContent = commentsText;

  const commentsFragment = document.createDocumentFragment();

  data.comments.forEach((item) => {
    const {avatar, message, name} = item;
    const bigPictureComments = commentsItem.content.cloneNode(true);
    bigPictureComments.querySelector('.social__text').textContent = message;
    bigPictureComments.querySelector('img').src = avatar;
    bigPictureComments.querySelector('img').url = name;

    commentsFragment.append(bigPictureComments);
  });
  commentsList.appendChild(commentsFragment);

  bigPicture.classList.remove('hidden');
  body.classList.add('modal-open');

  popupCloseButton.addEventListener('click', closePhotoPopup);
};


