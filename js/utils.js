/**
 * get random number
 * @param min {number}
 * @param max {number}
 * @return {string|number}
 */
export const getRandomInteger = function (min, max) {
  if (min >= max) {
    return ('range does not match, please try numbers from 0 to 10 inclusive');
  }
  return Math.floor(Math.random() * (max - min + 1) + min);
};

/**
 * get random element of array
 * @param element {Array}
 * @return {*}
 */
export const getRandomArrayElement = (element) => element[getRandomInteger(0, element.length - 1)];
