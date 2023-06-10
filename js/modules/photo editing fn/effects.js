import { useSelectedEffects } from './slider.js';

const uploadPreviewImg = document.querySelector('.img-upload__preview img');
const effectsList = document.querySelector('.effects__list');

/**
 * Fn applies the selected effect to the photo
 * @param {evt} evt
 */
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
    useSelectedEffects(evt.target.value);
  }
};

/**
 * Fn adds an event listener on change
 */
const addEffectUploadPreviewImg = () => {
  effectsList.addEventListener('change', onEffectsListChange);
};

/**
 * Fn removes the event listener on change
 */
const removeEffectUploadPreviewImg = () => {
  effectsList.removeEventListener('change', onEffectsListChange);
};

export {addEffectUploadPreviewImg, removeEffectUploadPreviewImg};
