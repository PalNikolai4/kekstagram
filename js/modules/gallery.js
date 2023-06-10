import { drawFullPhoto } from './full-picture.js';
import { getArrayThumbnails } from './thumbnails.js';
import { clearArr, getRandomUniqueNum } from './utill.js';
const filtersForm = document.querySelector('.img-filters__form');

/**
 * Fn adds a 'click' event to all thumbnails on the page (view full image)
 * @param {Array} dataArr
 */
const addClickHandlerthumbnailsOnPage = (dataArr) => {
  getArrayThumbnails(dataArr);
  const thumbnailsOnPage = document.querySelector('.pictures').querySelectorAll('a.picture');
  for (let i = 0; i < thumbnailsOnPage.length; i++) {
    thumbnailsOnPage[i].addEventListener('click', () => {
      drawFullPhoto(dataArr[i]);
    });
  }
};

/**
 * Fn removes and adds the active class to the filter buttons when they are clicked
 */
const onFiltersFormButtonClick = (evt) => {
  const buttons = filtersForm.querySelectorAll('.img-filters__button');
  buttons.forEach((button) => {
    const activeClass = button.classList.contains('img-filters__button--active');
    if (activeClass) {
      button.classList.remove('img-filters__button--active');
    }
  });
  evt.target.classList.add('img-filters__button--active');
};
filtersForm.addEventListener('click', onFiltersFormButtonClick);

/**
 * Fn get an array of photos and sorts it depending on the selected filter
 * @param {Array} arr
 */
const useFilter = (arr) => {
  filtersForm.addEventListener('click', (evt) => {
    const cloneArr = arr.slice();
    clearArr(document.querySelectorAll('.pictures .picture'));

    if (evt.target.id === 'filter-default') {
      addClickHandlerthumbnailsOnPage(cloneArr);
    }

    if (evt.target.id === 'filter-random') {
      const uniquNumArr = [];
      const uniquNum = getRandomUniqueNum(0, cloneArr.length - 1);
      for (let i = 0; i < 10; i++) {
        const num = uniquNum();
        uniquNumArr.push(cloneArr[num]);
      }
      addClickHandlerthumbnailsOnPage(uniquNumArr);
    }

    if (evt.target.id === 'filter-discussed') {
      const sortArr = cloneArr.sort((a, b) => b.comments.length - a.comments.length);
      addClickHandlerthumbnailsOnPage(sortArr);
    }
  });
};

export { addClickHandlerthumbnailsOnPage, useFilter };
