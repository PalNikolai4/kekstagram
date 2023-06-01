import { getValueSelectedEffects } from './slider.js'
const uploadPreviewImg = document.querySelector('.img-upload__preview').querySelector('img');
const effectsList = document.querySelector('.effects__list');

const onEffectsListChange = (evt) => {
  if (evt.target.matches('input[type="radio"]')) {
    const currentsClassesImg = uploadPreviewImg.classList;
    currentsClassesImg.forEach((currentClassImg) => {
      const isContains = currentClassImg.includes('effects__preview--');
      if (isContains) {
        uploadPreviewImg.classList.remove(currentClassImg);
      }

    });
    uploadPreviewImg.classList.add(`effects__preview--${evt.target.value}`);
    getValueSelectedEffects(evt.target.value);
    // Вызываю ФН-1, передаю ей evt.target.value (none, chrome, sepia, marvin, phobos, heat)
    // ФН-1 внутри вызывает другую ФН-2 и передаёт ей evt.target.value
    // ФН-2 обрабатывает результат

  }
};

const addEffectUploadPreviewImg = () => {
  effectsList.addEventListener('change', onEffectsListChange);
};

const removeEffectUploadPreviewImg = () => {
  effectsList.removeEventListener('change', onEffectsListChange);
};

export {addEffectUploadPreviewImg, removeEffectUploadPreviewImg};
