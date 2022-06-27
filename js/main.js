const NUM_OF_COMMENTS = 25;

let a = 0;

const getGenerateId = () => {
  a = a + 1;
  return a;
};

// Функция, возвращающая случайное целое число из переданного диапазона включительно.
const getRandomInteger = function (min, max) {
  if (min >= max) {
    return ('range does not match, please try numbers from 0 to 10 inclusive');
  }
  return Math.floor(Math.random() * (max - min + 1) + min);
};
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
const getRandomArrayElement = (element) => element[getRandomInteger(0, element.length - 1)];

const ids = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25];

const urls = ['photos/1.jpg', 'photos/2.jpg', 'photos/3.jpg', 'photos/4.jpg', 'photos/5.jpg', 'photos/6.jpg', 'photos/7.jpg', 'photos/8.jpg', 'photos/9.jpg', 'photos/10.jpg', 'photos/11.jpg', 'photos/12.jpg', 'photos/13.jpg', 'photos/14.jpg', 'photos/15.jpg', 'photos/16.jpg', 'photos/17.jpg', 'photos/18.jpg', 'photos/19.jpg', 'photos/20.jpg', 'photos/21.jpg', 'photos/22.jpg', 'photos/23.jpg', 'photos/24.jpg', 'photos/25.jpg'];

const descriptions = [
  'My 1 photo', 'My 2 photo', 'My 3 photo', 'My 4 photo', 'My 5 photo', 'My 6 photo', 'My 7 photo', 'My 8 photo', 'My 9 photo', 'My 10 photo', 'My 11 photo', 'My 12 photo', 'My 13 photo', 'My 14 photo', 'My 15 photo', 'My 16 photo', 'My 17 photo', 'My 18 photo', 'My 19 photo', 'My 20 photo', 'My 21 photo', 'My 22 photo', 'My 23 photo', 'My 24 photo', 'My 25 photo'];


const avatars = ['img/avatar-1.svg', 'img/avatar-2.svg', 'img/avatar-3.svg', 'img/avatar-4.svg', 'img/avatar-5.svg', 'img/avatar-6.svg',];

const messages = [
  'Всё отлично! ',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const getGenerateStringFromArray = (arr, min, max) => {
  const result = [];
  const copyArr = [...arr];
  const num = getRandomInteger(min, max);

  for (let i = 0; i < num; i++) {
    result.push(...copyArr.splice(getRandomInteger(0, copyArr.length - 1), 1));
  }

  return result[0];
};

const names = ['name 1', 'name 2', 'name 3', 'name 4', 'name 5', 'name 6', 'name 7', 'name 8', 'name 9', 'name 10', 'name 11', 'name 12', 'name 13', 'name 14', 'name 15', 'name 16', 'name 17', 'name 18', 'name 19', 'name 20', 'name 21', 'name 22', 'name 23', 'name 24', 'name 25'];

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
