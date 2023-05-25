const uploadPreviewImg = document.querySelector('.img-upload__preview').querySelector('img');
const effectsList = document.querySelector('.effects__list');

const onEffectsListClick = (evt) => {
  if (evt.target.nodeName === 'li > input > label > span') {
    alert('1');
  }
};

// uploadPreviewImg.addEventListener('click', onEffectsListClick);

export { onEffectsListClick };
