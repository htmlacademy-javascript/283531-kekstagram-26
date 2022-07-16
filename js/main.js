import {
  getRandomArrayElement,
  getRandomInteger,
  cutArrayElement,
  getGenerateStringFromArray,
  getGenerateId
} from './utils.js';
import {avatars, descriptions, ids, messages, names, urls} from './mock_data.js';
import {renderPhotoList} from './render.js';
import {
  openPhotoPopup, closePhotoPopup
} from './main_photo.js';


const NUM_OF_COMMENTS = 25;
// 4.15. Больше деталей
const commentsArr = [];

const pictureList = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');

const commentsList = document.querySelector('.social__comments');
const commentsItem = document.querySelector('.social__comment');

const generateComment = () => ({
  id: getGenerateId(),
  avatar: getRandomArrayElement(avatars),
  message: getGenerateStringFromArray(messages, 1, 2),
  name: getRandomArrayElement(names)
});
export const pictureComments = Array.from({length: 2}, generateComment);

for (let i = 0; i < NUM_OF_COMMENTS; i++) {
  commentsArr[i] = [];
  for (let j = 0; j < getRandomInteger(3, 100); j++) {
    commentsArr[i].push(generateComment());
  }
}

const photoDescription = () => ({
  id: cutArrayElement(ids),
  url: cutArrayElement(urls),
  description: getRandomArrayElement(descriptions),
  likes: getRandomInteger(15, 200),
  comments: getRandomArrayElement(commentsArr),
});

export const photos = Array.from({length: 25}, photoDescription);


renderPhotoList(pictureList, pictureTemplate);
openPhotoPopup()();
// renderComments(commentsList, commentsItem);
document.addEventListener('keydown', (evt) => {
  if (evt.code === 'Escape') {
    closePhotoPopup();
  }
});
