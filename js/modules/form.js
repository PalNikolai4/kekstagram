const imgUploadSection = document.querySelector('.img-upload');
const uploadImgForm = document.querySelector('#upload-select-image');
const uploadFileField = uploadImgForm.querySelector('#upload-file');



uploadFileField.addEventListener('change', (evt) => {
  evt.preventDefault();
  uploadImgForm.querySelector('.img-upload__overlay').classList.remove('hidden');
  document.body.classList.add('modal-open');

  const uploadPreviewImg = uploadImgForm.querySelector('.img-upload__preview').querySelector('img');
  uploadPreviewImg.src = URL.createObjectURL(uploadFileField.files[0]);
})
