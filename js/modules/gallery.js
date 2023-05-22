import { getDescriptionPhoto } from './data.js';
import { getArrayGivenLength } from './utill.js';
import { drawArrayThumbnails } from './thumbnails.js';
import { showFullPhoto } from './full-picture.js';

const picturesContainer = document.querySelector('.pictures');
const arrayDescriptionsPhotos = getArrayGivenLength(getDescriptionPhoto, 1, 25, 5);

// const thumbnailsInPage = drawArrayDescriptionsPhotos(arrayDescriptionsPhotos);
drawArrayThumbnails(arrayDescriptionsPhotos);
const thumbnailsOnPage = picturesContainer.querySelectorAll('a.picture');

for (let i = 0; i < thumbnailsOnPage.length; i++) {
  thumbnailsOnPage[i].addEventListener('click', (evt) => {
    evt.preventDefault();
    showFullPhoto(arrayDescriptionsPhotos[i]);
  });
}
