import { getArrayThumbnails } from './thumbnails.js';
import { drawFullPhoto } from './full-picture.js';
import { clearArr, getRandomUniqueNum } from './utill.js';

const addClickHandlerthumbnailsOnPage = (dataArr) => {
  getArrayThumbnails(dataArr);
  const thumbnailsOnPage = document.querySelector('.pictures').querySelectorAll('a.picture');
  for (let i = 0; i < thumbnailsOnPage.length; i++) {
    thumbnailsOnPage[i].addEventListener('click', () => {
      drawFullPhoto(dataArr[i]);
    });
  }
};

const filtersForm = document.querySelector('.img-filters__form');
const onFiltersFormButtonClick = (evt) => {
  const buttons = filtersForm.querySelectorAll('.img-filters__button');
  buttons.forEach(button => {
    const activeClass = button.classList.contains('img-filters__button--active');
    if (activeClass) {
      button.classList.remove('img-filters__button--active');
    }
  });
  evt.target.classList.add('img-filters__button--active');
}
filtersForm.addEventListener('click', onFiltersFormButtonClick);

const useFilter = (arr) => {
  filtersForm.addEventListener('click', (evt) => {
    const cloneArr = arr.slice();
    if (evt.target.id === 'filter-default') {
      clearArr(document.querySelectorAll('.pictures .picture'));
      addClickHandlerthumbnailsOnPage(cloneArr);
    }
    if (evt.target.id === 'filter-random') {
      clearArr(document.querySelectorAll('.pictures .picture'));
      const uniquNumArr = [];
      const uniquNum = getRandomUniqueNum(0, cloneArr.length - 1);
      for (let i = 0; i < 10; i++) {
        const num = uniquNum();
        uniquNumArr.push(cloneArr[num]);
      }
      addClickHandlerthumbnailsOnPage(uniquNumArr);
    }
    if (evt.target.id === 'filter-discussed') {
      clearArr(document.querySelectorAll('.pictures .picture'));
      const sortArr = cloneArr.sort((a, b) => {
       return b.comments.length - a.comments.length
      })
      addClickHandlerthumbnailsOnPage(sortArr);
    }
  });

}

export { addClickHandlerthumbnailsOnPage, useFilter };
