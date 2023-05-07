const DESCRIPTIONS = ['Я в коридоре', 'Зачем худеть? Пять минут фотошопа и ты прекрасен', 'Глаза боятся, рука делает', 'Трудно быть кэжуал, когда ты лакшери', 'Красота в простате', 'Моя кровать — это волшебное место. Стоит улечься, как я вспоминаю все, что мне нужно было сделать', 'В жареной картошке нет слова «мы». Этот тот случай, когда каждый за себя', 'Знаю, что голоса в моей голове не настоящие, но иногда их идеи потрясающие', 'Шоколад не задает глупых вопросов, шоколад понимает меня с полуслова', 'В доме, где есть котлеты, всегда уютно'];
const MESSAGE_COMMENT = ['Всё отлично!', 'В целом всё неплохо. Но не всё.', 'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально', 'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше', 'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше', 'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!', 'У вас редкий талант - испортить то, что уже испорчено', 'Если больной очень хочет жить, врачи бессильны', 'Оптимизм – это недостаток информации', 'Меня теперь даже склероз не спасёт'];
const NAMES_AUTHOR_COMMENTS = ['Лешачиха', 'Белая дама', 'Моровая дева', 'Водная баба', 'Полуночница', 'Гарпия', 'Эриния', 'Кухарка', 'Пряха', 'Шептуха'];

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

  if (min > max) {
    let box = min;
    min = max;
    max = box;
  }

  return Math.round(Math.random() * (max - min) + min);
};

//Доделать
const getUniqueNum = (min = 0, max = 25) => {
  let num = min;
  while (min < max) {
    min ++;
    return min;
  }

}

//Доделать
const getRandomUniqueNum = (min, max) => {
  let num = [];
  while (num.length < max) {
    num = getRandomPositiveInteger(min, max);
    return num;
  }

}

/**
 * Fn returns random element from array
 * @param {array} array
 * @returns
 */
const getRandomElemArray = (array) => { array[getRandomPositiveInteger(0, array.length - 1)] }

/**
 * Fn returns the comment as an object
 * @returns {object}
 */
const getPhotoСomment = () => {
  return {
    id: getRandomUniqueNum(1, 100),
    avatar: `img/avatar-${getRandomPositiveInteger(1, 6)}.svg`,
    message: getRandomElemArray(MESSAGE_COMMENT),
    name: getRandomElemArray(NAMES_AUTHOR_COMMENTS)
});

/**
 * Fn returns an array of comment objects
 * @param {number} quantity
 * @returns {array}
 */
const getQuantityComments = (quantity) => {
  parseInt(quantity, 10) ? quantity : quantity = getRandomPositiveInt(1, 5);
  return Array.from({ length: quantity }, getPhotoСomment);
};

/**
 * Fn returns the description of the photo as an object
 * @returns {object}
 */
const descriptionPhoto = () => {
  return {
    id: getUniqueNum(1, 25),
    url: `photos/${getUniqueNum(1, 25)}.jpg`,
    description: getRandomElemArray(DESCRIPTIONS),
    likes: getRandomPositiveInteger(15, 200),
    comments: Array.from({length: getRandomPositiveInteger(1, 5)}, getPhotoСomment)
  }
}

const arrayDescriptionPhoto = Array.from({length: 5}, descriptionPhoto);
console.log(arrayDescriptionPhoto);
