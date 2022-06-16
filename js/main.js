// Функция, возвращающая случайное целое число из переданного диапазона включительно.
const randomInteger = function (min, max) {

  if (min >= max) {
    return ('range does not match, please try numbers from 0 to 10 inclusive');
  }
  return Math.floor(Math.random() * (max - min + 1) + min);
};
randomInteger(0, 10);

// Функция для проверки максимальной длины строки. Будет использоваться для проверки длины введённого комментария, но должна быть универсальна. Пример использования функции:

const maxStringLength = function (testString, maxLength) {
  let stringLength = 0;
  for (let i = 0; i <= testString.length; i++) {
    stringLength++;
  }
  return stringLength <= maxLength;
};
maxStringLength('Hello world', 140);
