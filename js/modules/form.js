import { openFormEditImg } from './events-form.js'

const uploadImgForm = document.querySelector('#upload-select-image');
const uploadFileField = uploadImgForm.querySelector('#upload-file');



uploadFileField.addEventListener('change', (evt) => {
  openFormEditImg();

  const uploadPreviewImg = uploadImgForm.querySelector('.img-upload__preview').querySelector('img');
  uploadPreviewImg.src = URL.createObjectURL(uploadFileField.files[0]);
})
