import { sendData } from './api.js';
import { closeFormEditImg } from './events-form.js';
import { blockButtonUploadData, unBlockButtonUploadData } from './utill.js';
import { showSuccessUploadMessage, showErrorUploadMessage } from './utill.js';
const uploadImgForm = document.querySelector('#upload-select-image');

const pristine = new Pristine(uploadImgForm, {
  classTo: 'img-upload__text',
  errorTextParent: 'img-upload__text',
  errorTextTag: 'div',
  errorTextClass: 'error__text',
  errorClass: 'img-upload__text--invalid',
  successClass: 'img-upload__text--valid'
}, true);

const errorMessageArr = [];

const getErrorMessage = () => errorMessageArr.shift();

const pushErrorMessageArr = (message) => {
  errorMessageArr.push(message);
};

const validateHashtags = (items) => {
  let errorMessage = null;
  if (items.length > 20) {
    errorMessage = 'Максимум 20 символов';
    pushErrorMessageArr(errorMessage);
    return false;
  }

  if (items.length === 0) { return true; }

  if (items.length > 0 && items.length <= 20) {
    const re = /^#[A-Za-zА-Яа-яЁё0-9]{1,19}$/;

    const arrHashTags = items.split(' ');
    if (arrHashTags.length > 5) {
      errorMessage = 'Максимум 5 хэштегов';
      pushErrorMessageArr(errorMessage);
      return false;
    }

    for (let i = 0; i < arrHashTags.length; i++) {
      for (let j = i + 1; j < arrHashTags.length; j++) {
        if (arrHashTags[i].toLowerCase() === arrHashTags[j].toLowerCase()) {
          errorMessage = 'Хэштеги должны быть разными';
          pushErrorMessageArr(errorMessage);
          return false;
        }
      }

      const isContains = re.test(arrHashTags[i]);
      if (!isContains) {
        errorMessage = 'Хэштеги содержат недопустимые символы и не могут состоять только из одной #';
        pushErrorMessageArr(errorMessage);
        return false;
      }
    }
    return true;
  }
};

pristine.addValidator(uploadImgForm.querySelector('.text__hashtags'), validateHashtags, getErrorMessage);

const validateDescription = (item) => item.length <= 140;
pristine.addValidator(uploadImgForm.querySelector('.text__description'), validateDescription, 'Максимум 140 символов');

uploadImgForm.addEventListener('input', () => pristine.validate() ? unBlockButtonUploadData() : blockButtonUploadData());

const sendFormData = () => {
  uploadImgForm.addEventListener('submit', (evt) => {
    blockButtonUploadData();
    evt.preventDefault();
    if (pristine.validate()) {
      sendData(
        () => { // это 1 аргумент sendData - onSucces
          unBlockButtonUploadData();
          closeFormEditImg();
          showSuccessUploadMessage();
        },
        () => { // это 2 аргумент sendData - onFail
          unBlockButtonUploadData();
          closeFormEditImg();
          showErrorUploadMessage();
        },
        new FormData(evt.target) // это 3 аргумент sendData - body
      );
    }
  });
};

export { sendFormData };
