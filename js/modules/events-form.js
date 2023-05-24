import { isEscKey } from './utill.js';
import { editScalePhoto, removeAllEventScale } from './photo editing fn/scale.js';

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

const closeFormEditImg = () => {
  hideFormEditContainer();
  cancelEditImgButton.removeEventListener('click', closeFormEditImg);
  document.removeEventListener('keydown', onCloseFormEditImgEsc);

  removeAllEventScale();
};

function onCloseFormEditImgEsc (evt) {
  evt.preventDefault();
  if (isEscKey(evt)) {
    closeFormEditImg();
  }
}


const openFormEditImg = () => {
  showFormEditContainer();
  cancelEditImgButton.addEventListener('click', closeFormEditImg);
  document.addEventListener('keydown', onCloseFormEditImgEsc);

  editScalePhoto();
};


export { openFormEditImg };
