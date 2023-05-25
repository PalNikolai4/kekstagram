import { isEscKey } from './utill.js';
import { editScalePhoto, removeAllEventScale } from './photo editing fn/scale.js';
import { onEffectsListClick } from './photo editing fn/effects.js';

const uploadImgForm = document.querySelector('#upload-select-image');
const cancelEditImgButton = document.querySelector('.img-upload__cancel');

const showFormEditContainer = () => {
  uploadImgForm.querySelector('.img-upload__overlay').classList.remove('hidden');
  document.body.classList.add('modal-open');
};

const hideFormEditContainer = () => {
  uploadImgForm.querySelector('.img-upload__overlay').classList.add('hidden');
  document.body.classList.remove('modal-open');
};

const onCloseFormEditImgEsc = (evt) => {
  if (isEscKey(evt)) {
    closeFormEditImg();
  }
};

const openFormEditImg = () => {
  showFormEditContainer();
  cancelEditImgButton.addEventListener('click', closeFormEditImg);
  document.addEventListener('keydown', onCloseFormEditImgEsc);
  editScalePhoto();

  // Работа с effects.js
  // const uploadPreviewImg = document.querySelector('.img-upload__preview').querySelector('img');
  const effectsList = document.querySelector('.effects__list');
  effectsList.addEventListener('click', onEffectsListClick);
};

function closeFormEditImg () {
  hideFormEditContainer();
  cancelEditImgButton.removeEventListener('click', closeFormEditImg);
  document.removeEventListener('keydown', onCloseFormEditImgEsc);

  removeAllEventScale();
}

export { openFormEditImg };
