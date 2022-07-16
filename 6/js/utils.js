/**
 * get random number
 * @param min {number}
 * @param max {number}
 * @return {string|number}
 */
// Функция, возвращающая случайное целое число из переданного диапазона включительно.
export const getRandomInteger = function (min, max) {
  if (min >= max) {
    return ('range does not match, please try numbers from 0 to 10 inclusive');
  }
  return Math.floor(Math.random() * (max - min + 1) + min);
};
getRandomInteger(0, 10);
/**
 * get random element of array
 * @param element {Array}
 * @return {*}
 */
export const getRandomArrayElement = (element) => element[getRandomInteger(0, element.length - 1)];

/**
 * @param testString
 * @param maxLength
 * @return {boolean}
 */
// Функция для проверки максимальной длины строки. Будет использоваться для проверки длины введённого комментария, но должна быть универсальна. Пример использования функции:

export const getMaxStringLength = function (testString, maxLength) {
  let stringLength = 0;
  for (let i = 0; i <= testString.length; i++) {
    stringLength++;
  }
  return stringLength <= maxLength;
};
getMaxStringLength('Hello world', 140);
/**
 * @param arr
 * @return {any}
 */
export const cutArrayElement = (arr) => {
  const generateNumber = getRandomInteger(0, arr.length - 1);
  return arr.splice(generateNumber, 1)[0];
};
/**
 * @param arr
 * @param min
 * @param max
 * @return {*}
 */
export const getGenerateStringFromArray = (arr, min, max) => {
  const results = [];
  const copyArrays = [...arr];
  const num = getRandomInteger(min, max);

  for (let i = 0; i < num; i++) {
    results.push(...copyArrays.splice(getRandomInteger(0, copyArrays.length - 1), 1));
  }

  return results[0];
};

/**
 * @type {number}
 */
let a = 0;

export const getGenerateId = () => {
  a = a + 1;
  return a;
};
