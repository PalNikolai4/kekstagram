import { isEscKey } from './utill.js';

const imgUploadSection = document.querySelector('.img-upload');
const uploadImgForm = document.querySelector('#upload-select-image');
const cancelEditImgButton = imgUploadSection.querySelector('.img-upload__cancel');

const closeFormEditImg = () => {
  uploadImgForm.querySelector('.img-upload__overlay').classList.add('hidden');
  document.body.classList.remove('modal-open');

  cancelEditImgButton.removeEventListener('click', closeFormEditImg);
  document.removeEventListener('keydown', onCloseFormEditImgEsc);
}


const onCloseFormEditImgEsc = (evt) => {
  evt.preventDefault();
  if (isEscKey(evt)) {
    closeFormEditImg();
  }
}


const openFormEditImg = () => {
  uploadImgForm.querySelector('.img-upload__overlay').classList.remove('hidden');
  document.body.classList.add('modal-open');

  cancelEditImgButton.addEventListener('click', closeFormEditImg);
  document.addEventListener('keydown', onCloseFormEditImgEsc);
}



export { openFormEditImg }
