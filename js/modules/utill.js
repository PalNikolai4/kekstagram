/**
 * Fn checks the length of a string
 * @param {string} string
 * @param {number} maxLength
 * @returns {boolean}
 */
const checkStringLength = (string = '', maxLength = 100) => string.toString().length <= maxLength;

/**
 * Fn returns random positive integer in the range from min to max
 * @param {number} min default = 0
 * @param {number} max default = 100
 * @returns {number}
 */
const getRandomPositiveInt = (min = 0, max = 100) => {
  if (!parseInt(min, 10)) {
    min = 0;
  }

  if (!parseInt(max, 10) && parseInt(max, 10) !== 0) {
    max = 100;
  }

  if (!parseInt(max, 10) && parseInt(max, 10) === 0) {
    max = 0;
  }

  min = Math.abs(min);
  max = Math.abs(max);

  if (min === max) {
    max += 1;
  }

  if (min > max) {
    const box = min;
    min = max;
    max = box;
  }

  return Math.round(Math.random() * (max - min) + min);
};

//Доделать
const getUniqueNum = (min = 0, max = 25) => {
  let num = min;
  while (min < max) {
    min++;
    return min;
  }

};

//Доделать
const getRandomUniqueNum = (min, max) => {
  let num = [];
  while (num.length < max) {
    num = getRandomPositiveInt(min, max);
    return num;
  }

};

/**
 * Fn returns random element from array
 * @param {array} array
 * @returns
 */
const getRandomElemArray = (array) => array[getRandomPositiveInt(0, array.length - 1)];

/**
 * Fn returns an array of objects of the specified length
 * @param {function} fn
 * @param {number} quantity
 * @returns {array}
 */
const getArrayObj = (fn, quantity) => {
  parseInt(quantity, 10) ? quantity : quantity = getRandomPositiveInt(1, 5);
  return Array.from({ length: quantity }, fn);
};

export {checkStringLength, getRandomPositiveInt, getUniqueNum, getRandomUniqueNum, getRandomElemArray, getArrayObj}
