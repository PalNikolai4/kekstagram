const imgUploadSection = document.querySelector('.img-upload');
const uploadImgForm = document.querySelector('#upload-select-image');

const uploadFileField = uploadImgForm.querySelector('#upload-file');

uploadFileField.addEventListener('change', () => {
  uploadImgForm.querySelector('.img-upload__overlay').classList.remove('hidden');
})
