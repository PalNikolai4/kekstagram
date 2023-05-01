/**
 * Fn returns a random positive integer from the range
 * @param {Number} min default = 0
 * @param {Number} max default = 100
 * @returns {Number}
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
    const box = min;
    min = max;
    max = box;
  }

  return Math.round(Math.random() * (max - min) + min);
};
getRandomPositiveInteger();
