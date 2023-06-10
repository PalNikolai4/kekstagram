import { isEscKey } from './utill.js';
import { deleteAllComments } from './full-picture.js';

const bigPictureContainer = document.querySelector('.big-picture');
const closeFullPhotoButton = bigPictureContainer.querySelector('.big-picture__cancel');

const showFullPhotoContainer = () => {
  bigPictureContainer.classList.remove('hidden');
  document.body.classList.add('modal-open');
};

const hideFullPhotoContainer = () => {
  bigPictureContainer.classList.add('hidden');
  document.body.classList.remove('modal-open');
};

const onCloseFullPhotoEscKeydown = (evt) => {
  if (isEscKey(evt)) {
    evt.preventDefault();
    closeFullPhoto();
  }
};

const onCloseFullPhotoButton = () => { closeFullPhoto(); };

const openFullPhoto = () => {
  showFullPhotoContainer();
  document.addEventListener('keydown', onCloseFullPhotoEscKeydown);
  closeFullPhotoButton.addEventListener('click', onCloseFullPhotoButton);
};

function closeFullPhoto() {
  hideFullPhotoContainer();
  deleteAllComments();
  document.removeEventListener('keydown', onCloseFullPhotoEscKeydown);
  closeFullPhotoButton.removeEventListener('click', onCloseFullPhotoButton);
}


export { openFullPhoto };
