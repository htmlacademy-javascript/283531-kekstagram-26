import {getRandomArrayElement, getRandomInteger} from './utils.js';
import {avatars, descriptions, ids, messages, names, urls} from './mock_data';

const NUM_OF_COMMENTS = 25;

let a = 0;

const getGenerateId = () => {
  a = a + 1;
  return a;
};

// Функция, возвращающая случайное целое число из переданного диапазона включительно.

getRandomInteger(0, 10);

// Функция для проверки максимальной длины строки. Будет использоваться для проверки длины введённого комментария, но должна быть универсальна. Пример использования функции:

const getMaxStringLength = function (testString, maxLength) {
  let stringLength = 0;
  for (let i = 0; i <= testString.length; i++) {
    stringLength++;
  }
  return stringLength <= maxLength;
};
getMaxStringLength('Hello world', 140);

// 4.15. Больше деталей
const cutArrayElement = (arr) => {
  const generateNumber = getRandomInteger(0, arr.length - 1);
  return arr.splice(generateNumber, 1)[0];
};

const getGenerateStringFromArray = (arr, min, max) => {
  const result = [];
  const copyArr = [...arr];
  const num = getRandomInteger(min, max);

  for (let i = 0; i < num; i++) {
    result.push(...copyArr.splice(getRandomInteger(0, copyArr.length - 1), 1));
  }

  return result[0];
};


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
