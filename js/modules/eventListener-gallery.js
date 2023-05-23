import { isEscKey } from './utill.js';
import { deleteAllComments } from './full-picture.js'

const bigPictureContainer = document.querySelector('.big-picture');
const closeFullPhotoButton = bigPictureContainer.querySelector('.big-picture__cancel');

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
  document.body.classList.add('modal-open');
  bigPictureContainer.classList.remove('hidden');
  deleteAllComments();

  document.addEventListener('keydown', onCloseFullPhotoEscKeydown);
  closeFullPhotoButton.addEventListener('click', onCloseFullPhotoClick);
};


function closeFullPhoto() {
  bigPictureContainer.classList.add('hidden');
  document.body.classList.remove('modal-open');
  deleteAllComments();

  document.removeEventListener('keydown', onCloseFullPhotoEscKeydown);
  closeFullPhotoButton.removeEventListener('click', onCloseFullPhotoClick);
}

export { openFullPhoto };
