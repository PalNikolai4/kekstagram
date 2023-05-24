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
    closeFullPhoto();
  }
};

const onCloseFullPhotoClick = (evt) => {
  evt.preventDefault();
  closeFullPhoto();
};

const openFullPhoto = () => {
  showFullPhotoContainer();
  deleteAllComments();
  document.addEventListener('keydown', onCloseFullPhotoEscKeydown);
  closeFullPhotoButton.addEventListener('click', onCloseFullPhotoClick);
};


function closeFullPhoto() {
  hideFullPhotoContainer();
  deleteAllComments();

  document.removeEventListener('keydown', onCloseFullPhotoEscKeydown);
  closeFullPhotoButton.removeEventListener('click', onCloseFullPhotoClick);
}

export { openFullPhoto };
