import {
  getRandomArrayElement,
  getRandomInteger,
  cutArrayElement,
  getGenerateStringFromArray,
  getGenerateId
} from './utils.js';
import {AVATARS, DESCRIPTIONS, IDS, MESSAGES, NAMES, URLS} from './mock-data.js';
import {renderPhotoList} from './render.js';
import {
  closePhotoPopup
} from './main-photo.js';

const pictureListElement = document.querySelector('.pictures');
const pictureTemplateElement = document.querySelector('#picture').content.querySelector('.picture');
const NUM_OF_COMMENTS = 25;
// 4.15. Больше деталей
const commentsArr = [];

const generateComment = () => ({
  id: getGenerateId(),
  avatar: getRandomArrayElement(AVATARS),
  message: getGenerateStringFromArray(MESSAGES, 1, 2),
  name: getRandomArrayElement(NAMES)
});
export const pictureComments = Array.from({length: 2}, generateComment);

for (let i = 0; i < NUM_OF_COMMENTS; i++) {
  commentsArr[i] = [];
  for (let j = 0; j < getRandomInteger(3, 100); j++) {
    commentsArr[i].push(generateComment());
  }
}

const generatePhotoDescription = () => ({
  id: cutArrayElement(IDS),
  url: cutArrayElement(URLS),
  description: getRandomArrayElement(DESCRIPTIONS),
  likes: getRandomInteger(15, 200),
  comments: getRandomArrayElement(commentsArr),
});

export const photos = Array.from({length: 25}, generatePhotoDescription);

renderPhotoList(pictureListElement, pictureTemplateElement);

// renderComments(commentsList, commentsItem);
document.addEventListener('keydown', (evt) => {
  if (evt.code === 'Escape') {
    closePhotoPopup();
  }
});

