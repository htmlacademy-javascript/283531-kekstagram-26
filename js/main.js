// Функция, возвращающая случайное целое число из переданного диапазона включительно.
let randomInteger = function(min , max) {
  if (min >= 0 && max >= 0 && min <=10 && max <= 10) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
    console.log ('range does not match, please try numbers from 0 to 10 inclusive')

}
randomInteger(0,10)

// Функция для проверки максимальной длины строки. Будет использоваться для проверки длины введённого комментария, но должна быть универсальна. Пример использования функции:

let maxStringLength = function (testString, maxLength) {
  let stringLength = 0;
  for ( let i=0; i<=testString.length; i++) {
    stringLength++
  }
  if (stringLength <= maxLength){
    console.log (true)
  }
  else {
    console.log (false)
  }
}
maxStringLength( 'Hello world' , 140)
