const scaleSmallerButton = document.querySelector('.scale__control--smaller');
const scaleBiggerButton = document.querySelector('.scale__control--bigger');
const scaleField = document.querySelector('.scale__control--value');
const uploadPreviewImg = document.querySelector('.img-upload__preview').querySelector('img');

const changeValue = (item) => {
  uploadPreviewImg.style.scale = item;
};

const onDecreaseScaleValue = () => {
  if (parseInt(scaleField.value, 10) > 0) {
    scaleField.value = `${parseInt(scaleField.value, 10) - 25}%`;
    changeValue(scaleField.value);
  }
};

const onIncreaseScaleValue = () => {
  if (parseInt(scaleField.value, 10) < 100) {
    scaleField.value = `${parseInt(scaleField.value, 10) + 25}%`;
    changeValue(scaleField.value);
  }
};

const editScalePhoto = () => {
  scaleField.value = '100%';
  changeValue(parseInt(scaleField.value) / 100);

  scaleSmallerButton.addEventListener('click', onDecreaseScaleValue);
  scaleBiggerButton.addEventListener('click', onIncreaseScaleValue);
};

const removeAllEventScale = () => {
  scaleSmallerButton.removeEventListener('click', onDecreaseScaleValue);
  scaleBiggerButton.removeEventListener('click', onIncreaseScaleValue);
};


export { editScalePhoto, removeAllEventScale };
