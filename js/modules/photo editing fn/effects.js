const uploadPreviewImg = document.querySelector('.img-upload__preview').querySelector('img');
const effectsList = document.querySelector('.effects__list');

const oneffectsListChange = (evt) => {
  if (evt.target.matches('input[type="radio"]')) {
    const currentsClassesImg = uploadPreviewImg.classList;
    currentsClassesImg.forEach((currentClassImg) => {
      const isContains = currentClassImg.includes('effects__preview--');
      if (isContains) {
        uploadPreviewImg.classList.remove(currentClassImg);
      }

    });
    uploadPreviewImg.classList.add(`effects__preview--${evt.target.value}`);
  }
};

const addEffectUploadPreviewImg = () => {
  effectsList.addEventListener('change', oneffectsListChange);
};

const removeEffectUploadPreviewImg = () => {
  effectsList.removeEventListener('change', oneffectsListChange);
};

export {addEffectUploadPreviewImg, removeEffectUploadPreviewImg};
