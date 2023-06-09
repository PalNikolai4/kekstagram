/**
 * Fn checks the length of a string
 * @param {string} string
 * @param {number} maxLength
 * @returns {boolean}
 */
const checkStringLength = (string = '', maxLength = 100) => string.toString().length <= maxLength;

/**
 * Fn returns random positive integer in the range from min to max. If quantity = true, Fn return quantity.
 * @param {number} min default = 0
 * @param {number} max default = 100
 * @param {number} quantity
 * @returns {number}
 */
const getRandomPositiveInt = (min = 0, max = 100, quantity) => {
  if (quantity && parseInt(quantity, 10) >= 0) {return quantity;}

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

/**
 * Fn creates a closure. Fn designed to create consecutive, non-repeating numbers.
 * @param {number} min default = 0
 * @returns
 */
const getUniqueNum = (min = 0) => {
  let num = min - 1;
  return function () {
    num++;
    return num;
  };
};

/**
 * Fn creates a closure. Fn designed to generate random non-repeating numbers
 * @param {number} min
 * @param {number} max
 * @returns
 */
const getRandomUniqueNum = (min, max) => {
  const previousNum = [];
  return () => {
    let currentNum = getRandomPositiveInt(min, max);

    if (previousNum.length >= (max - min + 1)) {
      console.error(`Перебраны все числа в диапазоне от ${min} до ${max}`);
      return null;
    }

    while (previousNum.includes(currentNum)) {
      currentNum = getRandomPositiveInt(min, max);
    }

    previousNum.push(currentNum);
    return currentNum;
  };
};

/**
 * Fn returns random element from array
 * @param {array} array
 * @returns
 */
const getRandomElemArray = (array) => array[getRandomPositiveInt(0, array.length - 1)];

/**
 * Fn returns an array with a length ranging from min to max. If quantity = true, Fn returns an array with a length = quantity.
 * @param {*} fn
 * @param {*} min
 * @param {*} max
 * @param {*} quantity
 * @returns
 */
const getArrayGivenLength = (fn, min = 1, max = 25, quantity) => Array.from({ length: getRandomPositiveInt(min, max, quantity) }, fn);

/**
 * Fn takes an HTML tag name and returns an element
 * @param {string} tagName
 * @param {string} tagClass
 * @param {string} content
 * @returns
 */
const createElement = (tagName, tagClass, content) => {
  const element = document.createElement(tagName);
  if (tagClass) { element.classList.add(tagClass); }
  if (content) { element.textContent = content; }
  return element;
};

const isEntKey = (evt) => evt.key === 'Enter';

const isEscKey = (evt) => evt.key === 'Escape';

/**
 * Fn takes an array.length > 0, return array.length === 0
 * @param {array} arr
 */
const clearArrComments = (arr) => {
  let i = 0;
  while (arr.length > 0) {
    const elem = arr.shift();
    i++;
  }
};

const clearArr = (arr) => {
  arr.forEach(element => {
    element.remove();
  });
}

/**
 * Fn shows an error message if it was not possible to get data from the server
 */
const showErrorMessageGetData = () => {
  const errorMessage = createElement('div', 'error-message', 'Произошла ошибка загрузки файлов. Перезагрузите страницу.');
  errorMessage.style.backgroundColor = 'red';
  errorMessage.style.borderRadius = '10px';
  errorMessage.style.fontSize = '20px';
  errorMessage.style.left = 0;
  errorMessage.style.margin = '0 auto';
  errorMessage.style.padding = '15px 5px';
  errorMessage.style.position = 'absolute';
  errorMessage.style.right = 0;
  errorMessage.style.textAlign = 'center';
  errorMessage.style.textTransform = 'none';
  errorMessage.style.top = '10%';
  errorMessage.style.width = '50%';
  errorMessage.style.zIndex = 10;
  setTimeout(() => {
    errorMessage.remove();
  }, 5000);
  document.body.append(errorMessage);
};

const blockButtonUploadData = () => {
  document.querySelector('.img-upload__submit').disabled = true;
};

const unBlockButtonUploadData = () => {
  document.querySelector('.img-upload__submit').disabled = false;
};

// Successful image upload message
const onSuccessMessageClick = (evt) => {
  if (evt.target.matches('.success__button') || !evt.target.closest('.success__inner')) {
    closeSuccessMessage();
  }
};

const onSuccessMessageEsc = (evt) => {
  if (isEscKey(evt)) {
    closeSuccessMessage();
  }
};

const showSuccessUploadMessage = () => {
  const template = document.querySelector('#success').content.querySelector('.success');
  const sectionSucces = template.cloneNode(true);
  document.addEventListener('click', onSuccessMessageClick);
  document.addEventListener('keydown', onSuccessMessageEsc);
  document.body.append(sectionSucces);
};

const closeSuccessMessage = () => {
  document.querySelector('.success').remove();
  document.removeEventListener('click', onSuccessMessageClick);
  document.removeEventListener('keydown', onSuccessMessageEsc);
};


// Image upload error message
const onErrorMessageClick = (evt) => {
  if (evt.target.matches('.error__button') || !evt.target.closest('.error__inner')) {
    closeErrorUploadMessage();
  }
};

const onErrorMessageEscKeydown = (evt) => {
  if (isEscKey(evt)) {
    closeErrorUploadMessage();
  }
};

const showErrorUploadMessage = () => {
  const template = document.querySelector('#error').content.querySelector('.error');
  const sectionError = template.cloneNode(true);
  document.addEventListener('click', onErrorMessageClick);
  document.addEventListener('keydown', onErrorMessageEscKeydown);
  document.body.append(sectionError);
};

const closeErrorUploadMessage = () => {
  document.querySelector('.error').remove();
  document.removeEventListener('click', onErrorMessageClick);
  document.removeEventListener('keydown', onErrorMessageEscKeydown);
};

const showImgFilters = () => {
  document.querySelector('.img-filters').classList.remove('img-filters--inactive');
}

export { checkStringLength, getRandomPositiveInt, getUniqueNum, getRandomUniqueNum, getRandomElemArray, getArrayGivenLength,
  createElement, isEntKey, isEscKey, clearArr, clearArrComments, showErrorMessageGetData, blockButtonUploadData, unBlockButtonUploadData,
  showSuccessUploadMessage, showErrorUploadMessage, showImgFilters };
