import { getArrayThumbnails } from './thumbnails.js';
import { drawFullPhoto } from './full-picture.js';

const addClickHandlerthumbnailsOnPage = (dataArr) => {
  getArrayThumbnails(dataArr);
  const thumbnailsOnPage = document.querySelector('.pictures').querySelectorAll('a.picture');
  for (let i = 0; i < thumbnailsOnPage.length; i++) {
    thumbnailsOnPage[i].addEventListener('click', () => {
      drawFullPhoto(dataArr[i]);
    });
  }
};

export { addClickHandlerthumbnailsOnPage };
