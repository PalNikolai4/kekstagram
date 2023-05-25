const uploadPreviewImg = document.querySelector('.img-upload__preview').querySelector('img');
const effectsList = document.querySelector('.effects__list');

const onEffectsListClick = (evt) => {
  const selectedEffect = effectsList.querySelector('input[type="radio"]:checked');
  console.log(selectedEffect);

};

effectsList.addEventListener('change', onEffectsListClick);

export { onEffectsListClick };
