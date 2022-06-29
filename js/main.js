import {
  getRandomArrayElement,
  getRandomInteger,
  cutArrayElement,
  getGenerateStringFromArray,
  getGenerateId
} from './utils.js';
import {avatars, descriptions, ids, messages, names, urls} from './mock_data.js';

const NUM_OF_COMMENTS = 25;
// 4.15. Больше деталей
const comments = [];

const generateComment = () => ({
  id: getGenerateId(),
  avatar: getRandomArrayElement(avatars),
  message: getGenerateStringFromArray(messages, 1, 2),
  name: getRandomArrayElement(names)
});

for (let i = 0; i < NUM_OF_COMMENTS; i++) {
  comments[i] = [];
  for (let j = 0; j < getRandomInteger(3, 10); j++) {
    comments[i].push(generateComment());
  }
}

const photoDescription = () => ({
  id: cutArrayElement(ids),
  url: cutArrayElement(urls),
  description: getRandomArrayElement(descriptions),
  likes: getRandomInteger(15, 200),
  comments: getRandomArrayElement(comments),
});
Array.from({length: 25}, photoDescription); // log this
