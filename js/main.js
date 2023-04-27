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

  if (!Number(max)) {
    max = 10;
  }

  min = Math.abs(min);
  max = Math.abs(max);

  if (min === max) {
      max += 1;
    }

  if (min > max) {
    let box = min;
    min = max;
    max = box;
  }

  return Math.round(Math.random() * (max - min) + min);
}

getRandomPositiveInteger(10, 99);


/*
 * Fn returns random positive integer in the range from min to max
 * @param {number} min default = 0
 * @param {number} max default = 100
 * @returns {number}
*/
