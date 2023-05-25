import { isEscKey, isEntKey } from './utill.js';
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

const onCloseFullPhotoEntKeydown = (evt) => {
  if (isEntKey(evt)) {
    evt.preventDefault();
    closeFullPhoto();
  }
};

const onCloseFullPhotoClick = () => {
  closeFullPhoto();
};

const openFullPhoto = () => {
  showFullPhotoContainer();
  deleteAllComments();
  document.addEventListener('keydown', onCloseFullPhotoEscKeydown);
  closeFullPhotoButton.addEventListener('keydown', onCloseFullPhotoEntKeydown);
  closeFullPhotoButton.addEventListener('click', onCloseFullPhotoClick);
};


function closeFullPhoto() {
  hideFullPhotoContainer();
  deleteAllComments();

  document.removeEventListener('keydown', onCloseFullPhotoEscKeydown);
  closeFullPhotoButton.addEventListener('keydown', onCloseFullPhotoEntKeydown);
  closeFullPhotoButton.removeEventListener('click', onCloseFullPhotoClick);
}

export { openFullPhoto };
