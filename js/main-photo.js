const bigPictureElement = document.querySelector('.big-picture');
const commentsListElement = document.querySelector('.social__comments');
const commentsItemElement = document.querySelector('#comment');
const body = document.querySelector('body');
const popupCloseButtonElement = document.querySelector('.big-picture__cancel');
const likesCountElement = document.querySelector('.likes-count');
const socialCaptionElement = document.querySelector('.social__caption');
const socialCommentCountElement = document.querySelector('.social__comment-count');

export const closePhotoPopup = () => {
  bigPictureElement.classList.add('hidden');
  body.classList.remove('modal-open');

  popupCloseButtonElement.removeEventListener('click', closePhotoPopup);
};

export const openPhotoPopup = (data, commentsText) => () => {
  const img = document.querySelector('.big-picture__img img');
  img.src = data.url;
  likesCountElement.textContent = data.likes;
  socialCaptionElement.textContent = data.description;
  socialCommentCountElement.textContent = `${data.comments.length} комментариев`;
  commentsListElement.textContent = commentsText;

  const commentsFragment = document.createDocumentFragment();

  data.comments.forEach((item) => {
    const {avatar, message, name} = item;
    const bigPictureComments = commentsItemElement.content.cloneNode(true);
    bigPictureComments.querySelector('.social__text').textContent = message;
    bigPictureComments.querySelector('img').src = avatar;
    bigPictureComments.querySelector('img').url = name;

    commentsFragment.append(bigPictureComments);
  });
  commentsListElement.appendChild(commentsFragment);

  bigPictureElement.classList.remove('hidden');
  body.classList.add('modal-open');

  popupCloseButtonElement.addEventListener('click', closePhotoPopup);
};


