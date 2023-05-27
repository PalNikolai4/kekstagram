import { openFormEditImg } from './events-form.js';

const uploadFileField = document.querySelector('#upload-file');

const onUploadFileFieldChange = () => {
  openFormEditImg();

  const uploadPreviewImg = document.querySelector('.img-upload__preview').querySelector('img');
  if (uploadFileField.files.length > 0) {
    uploadPreviewImg.src = URL.createObjectURL(uploadFileField.files[0]);
  }
}

uploadFileField.addEventListener('change', onUploadFileFieldChange);
