/**
 * Fn checks the length of a string
 * @param {String} string
 * @param {Number} maxLength
 * @returns {Boolean}
 */
// const checkStringLength = (string, maxLength) => string.length <= maxLength;
/**
 * Fn returns random positive integer in the range from min to max
 * @param {number} min default = 0
 * @param {number} max default = 100
 * @returns {number}
 */
const getRandomPositiveInteger = (min = 0, max = 100) => {
  if (!Number(min)) {
    min = 0;
  }

  if (!Number(max) && Number(max) !== 0) {
    max = 100;
  } else if (!Number(max) && Number(max) === 0) {
    max = 0;
  }

  min = Math.abs(min);
  max = Math.abs(max);

  if (min === max) {
      max += 1;
    }

  /*Эта проверка не нужна, т.к. сама формула исключает появление отрицательного результата, но оставлю её для предотвращения непредвиденного результата*/
  if (min > max) {
    let box = min;
    min = max;
    max = box;
  }

  return Math.round(Math.random() * (max - min) + min);
};


getRandomPositiveInteger();
