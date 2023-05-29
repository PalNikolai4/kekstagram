import { isEscKey } from './utill.js';
import { editScalePhoto, removeAllEventScale } from './photo editing fn/scale.js';
import { addEffectUploadPreviewImg, removeEffectUploadPreviewImg } from './photo editing fn/effects.js';
import './validate-form.js';

const uploadImgForm = document.querySelector('#upload-select-image');
const cancelEditImgButton = document.querySelector('.img-upload__cancel');
const photoHashTags = uploadImgForm.querySelector('.text__hashtags');
const photoDescription = uploadImgForm.querySelector('.text__description');

const showFormEditContainer = () => {
  uploadImgForm.querySelector('.img-upload__overlay').classList.remove('hidden');
  document.body.classList.add('modal-open');
};

const hideFormEditContainer = () => {
  uploadImgForm.querySelector('.img-upload__overlay').classList.add('hidden');
  document.body.classList.remove('modal-open');
};

const onCloseFormEditImgEsc = (evt) => {
  if (photoHashTags === document.activeElement || photoDescription === document.activeElement) {
    evt.stopPropagation();
  } else if (isEscKey(evt)) {
    closeFormEditImg();
  }
};

const openFormEditImg = () => {
  showFormEditContainer();
  cancelEditImgButton.addEventListener('click', closeFormEditImg);
  document.addEventListener('keydown', onCloseFormEditImgEsc);
  editScalePhoto();
  addEffectUploadPreviewImg();
};

const resetUploadFileInput = () => { document.querySelector('#upload-file').value = ''; };

function closeFormEditImg() {
  hideFormEditContainer();
  cancelEditImgButton.removeEventListener('click', closeFormEditImg);
  document.removeEventListener('keydown', onCloseFormEditImgEsc);
  removeAllEventScale();
  removeEffectUploadPreviewImg();
  resetUploadFileInput();
}

export { openFormEditImg };
