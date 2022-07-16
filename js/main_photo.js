const bigPicture = document.querySelector('.big-picture');
const commentsList = document.querySelector('.social__comments');
const commentsItem = document.querySelector('#comment');
const body = document.querySelector('body');
// const pictureListElement = document.querySelector('.pictures');
const popupCloseButton = document.querySelector('.big-picture__cancel');

export const closePhotoPopup = () => {
  bigPicture.classList.add('hidden');
  body.classList.remove('modal-open');

  popupCloseButton.removeEventListener('click', closePhotoPopup);
};

export const openPhotoPopup = (data, commentsText) => () => {
  console.log('data', data);
  const img = document.querySelector('.big-picture__img img');
  img.src = data.url;
  document.querySelector('.likes-count').textContent = data.likes;
  document.querySelector('.social__caption').textContent = data.description;
  document.querySelector('.social__comment-count').textContent = `${data.comments.length} комментариев`;
  document.querySelector('.social__comments').textContent = commentsText;

  const commentsFragment = document.createDocumentFragment();

  data.comments.forEach((item) => {
    const {avatar, message, name} = item;
    const bigPictureComments = commentsItem.content.cloneNode(true);
    console.log(bigPictureComments);
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


