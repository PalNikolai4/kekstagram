const scaleSmallerButton = document.querySelector('.scale__control--smaller');
const scaleBiggerButton = document.querySelector('.scale__control--bigger');
const scaleField = document.querySelector('.scale__control--value');
const uploadPreviewImg = document.querySelector('.img-upload__preview').querySelector('img');

/**
 * Fn applies the resulting value to the photo
 * @param {number} item
 */
const changeValue = (item) => {
  uploadPreviewImg.style.scale = item;
};

/**
 * Fn decreases zoom values ​​on button click by 25 to 0
 */
const onDecreaseScaleValue = () => {
  if (parseInt(scaleField.value, 10) > 0) {
    scaleField.value = `${parseInt(scaleField.value, 10) - 25}%`;
    changeValue(scaleField.value);
  }
};

/**
 * Fn increases zoom values ​​on button click by 25 to 100
 */
const onIncreaseScaleValue = () => {
  if (parseInt(scaleField.value, 10) < 100) {
    scaleField.value = `${parseInt(scaleField.value, 10) + 25}%`;
    changeValue(scaleField.value);
  }
};

/**
 * Fn sets the initial photo scale to 100%. Adds a click event listener for scale
 */
const editScalePhoto = () => {
  scaleField.value = '100%';
  changeValue(parseInt(scaleField.value) / 100);

  scaleSmallerButton.addEventListener('click', onDecreaseScaleValue);
  scaleBiggerButton.addEventListener('click', onIncreaseScaleValue);
};

/**
 * Fn removes a click event listener for scale
 */
const removeAllEventScale = () => {
  scaleSmallerButton.removeEventListener('click', onDecreaseScaleValue);
  scaleBiggerButton.removeEventListener('click', onIncreaseScaleValue);
};


export { editScalePhoto, removeAllEventScale };
