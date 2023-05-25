import { getRandomPositiveInt } from './utill.js';
import { getRandomElemArray } from './utill.js';
import { getUniqueNum } from './utill.js';
import { getRandomUniqueNum } from './utill.js';
import { getArrayGivenLength } from './utill.js';

const DESCRIPTIONS = ['Я в коридоре', 'Зачем худеть? Пять минут фотошопа и ты прекрасен', 'Глаза боятся, рука делает', 'Трудно быть кэжуал, когда ты лакшери', 'Кросота в простате', 'Моя кровать — это волшебное место. Стоит улечься, как я вспоминаю все, что мне нужно было сделать', 'В жареной картошке нет слова «мы». Этот тот случай, когда каждый за себя', 'Знаю, что голоса в моей голове не настоящие, но иногда их идеи потрясающие', 'Шоколад не задает глупых вопросов, шоколад понимает меня с полуслова', 'В доме, где есть котлеты, всегда уютно'];
const MESSAGE_COMMENT = ['Всё отлично!', 'В целом всё неплохо. Но не всё.', 'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально', 'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше', 'Я поскользнулась на банановой кожуре и уронила фотоаппарат на кота и у меня получилась фотография лучше', 'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!', 'У вас редкий талант - испортить то, что уже испорчено', 'Если больной очень хочет жить, врачи бессильны', 'Если оптимизм – это недостаток информации, а пессимизм - недостаток ума, тогда вы - единственный в своём роде', 'Мне теперь даже склероз не поможет'];
const NAMES_AUTHOR_COMMENTS = ['Лешачиха', 'Белая дама', 'Моровая дева', 'Водная баба', 'Полуночница', 'Гарпия', 'Эриния', 'Кухарка', 'Пряха', 'Шептуха'];
const descriptionPhotoID = getUniqueNum(1);
const descriptionPhotoURL = getUniqueNum(1);
const photoСommentID = getRandomUniqueNum(1, 1000);


/**
 * Fn returns the comment as an object
 * @returns {object}
 */
const getPhotoСomment = () => ({
  id: photoСommentID(),
  avatar: `img/avatar-${getRandomPositiveInt(1, 6)}.svg`,
  message: getRandomElemArray(MESSAGE_COMMENT),
  name: getRandomElemArray(NAMES_AUTHOR_COMMENTS)
});

/**
 * Fn returns the description of the photo as an object
 * @returns {object}
 */
const getDescriptionPhoto = () => ({
  id: descriptionPhotoID(),
  url: `photos/${descriptionPhotoURL()}.jpg`,
  description: getRandomElemArray(DESCRIPTIONS),
  likes: getRandomPositiveInt(15, 200),
  comments: getArrayGivenLength(getPhotoСomment, 1, 3)
});

export { getDescriptionPhoto };
