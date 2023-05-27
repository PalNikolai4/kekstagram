const uploadImgForm = document.querySelector('#upload-select-image');
const imgUploadFieldset = uploadImgForm.querySelector('.img-upload__text');


const pristine = new Pristine(uploadImgForm, {
  classTo: 'img-upload__text',
  errorTextParent: 'img-upload__text',
  errorTextTag: 'div',
  errorTextClass: 'error__text',
  errorClass: 'img-upload__text--invalid',
  successClass: 'img-upload__text--valid'
}, true);

const validateTextarea = (item) => { return item.length <= 140 };

pristine.addValidator(uploadImgForm.querySelector('.text__description'), validateTextarea, 'Максимум 140 символов');


uploadImgForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  pristine.validate();
})
