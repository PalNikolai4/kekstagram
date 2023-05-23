import { getDescriptionPhoto } from './data.js';
import { getArrayGivenLength } from './utill.js';
import { drawArrayThumbnails } from './thumbnails.js';
import { showFullPhoto } from './full-picture.js';

const arrayDescriptionsPhotos = getArrayGivenLength(getDescriptionPhoto, 1, 25, 5);
drawArrayThumbnails(arrayDescriptionsPhotos);
const thumbnailsOnPage = document.querySelector('.pictures').querySelectorAll('a.picture');

for (let i = 0; i < thumbnailsOnPage.length; i++) {
  thumbnailsOnPage[i].addEventListener('click', (evt) => {
    evt.preventDefault();
    showFullPhoto(arrayDescriptionsPhotos[i]);
  });
}
