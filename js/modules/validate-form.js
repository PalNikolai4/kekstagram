const uploadImgForm = document.querySelector('#upload-select-image');

const pristine = new Pristine(uploadImgForm, {
  classTo: 'img-upload__text',
  errorTextParent: 'img-upload__text',
  errorTextTag: 'div',
  errorTextClass: 'error__text',
  errorClass: 'img-upload__text--invalid',
  successClass: 'img-upload__text--valid'
}, true);


const validateTextHashtags = (items) => {

  if (items.length > 20) {
    // errorMessage = 'Максимум 20 символов';
    return false;
  }

  if (items.length === 0) { return true; }

  if (items.length > 0 && items.length <= 20) {
    const re = /^#[A-Za-zА-Яа-яЁё0-9]{1,19}$/;

    const arrHashTags = items.split(' ');
    if (arrHashTags.length > 5) {
      // errorMessage = 'Максимум 5 хэштегов';
      return false;
    }

    for (let i = 0; i < arrHashTags.length; i++) {
      for (let j = i + 1; j < arrHashTags.length; j++) {
        if (arrHashTags[i].toLowerCase() === arrHashTags[j].toLowerCase()) {
          // errorMessage = 'Хэштеги должны быть разными';
          return false;
        }
      }

      const isContains = re.test(arrHashTags[i]);
      if (!isContains) {
        // errorMessage = 'Хэштеги содержат недопустимые символы и не могут состоять только из одной #';
        return false;
      }
    }
    return true;
  }
};

pristine.addValidator(uploadImgForm.querySelector('.text__hashtags'), validateTextHashtags, 'Что-то пошло не так');


// #first #second#third #fourth
const validateTextDescription = (item) => item.length <= 140;
pristine.addValidator(uploadImgForm.querySelector('.text__description'), validateTextDescription, 'Максимум 140 символов');

uploadImgForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  pristine.validate();
});
