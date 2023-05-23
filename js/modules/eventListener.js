import { isEscKey } from './utill.js';

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

  document.addEventListener('keydown', onCloseFullPhotoEscKeydown);
  closeFullPhotoButton.addEventListener('click', onCloseFullPhotoClick);
};


function closeFullPhoto() {
  bigPictureContainer.classList.add('hidden');
  document.body.classList.remove('modal-open');

  document.removeEventListener('keydown', onCloseFullPhotoEscKeydown);
  closeFullPhotoButton.removeEventListener('click', onCloseFullPhotoClick);
}

export { openFullPhoto };


// const bigPictureContainer = document.querySelector('.big-picture');
/**
 * Fn closes the view of the full size photo by clicking on cross or esc key
 */
// const closeFullPhoto = () => {
//   const closeButton = bigPictureContainer.querySelector('.big-picture__cancel');
//   closeButton.addEventListener('click', () => {
//     bigPictureContainer.classList.add('hidden');
//   });

//   document.addEventListener('keydown', (evt) => {
//     evt.preventDefault();
//     if (isEscKey(evt)) {
//       bigPictureContainer.classList.add('hidden');
//     }
//   });
// };
