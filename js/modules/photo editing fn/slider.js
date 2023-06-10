const sliderFieldset = document.querySelector('.img-upload__effect-level');
const sliderField = document.querySelector('.effect-level__value');
const slider = document.querySelector('.effect-level__slider');
const uploadPreviewImg = document.querySelector('.img-upload__preview img');

noUiSlider.create(slider, {
  range: {
    min: 0,
    max: 100
  },
  start: 50,
  step: 10,
  connect: 'lower',
  format: {
    to: function (value) {
      if (Number.isInteger(value)) {
        return value;
      } else {
        return value.toFixed(1);
      }
    },
    from: function (value) {
      return parseFloat(value);
    }
  }
});

sliderFieldset.classList.add('hidden');

/**
 * Fn takes the value of the selected effect, the unit of measurement (optional). The value of the slider changes depending on the selected effect. The value of the slider is passed to the "filter" attribute of the photo
 * @param {string} filterName
 * @param {string} isUnitsMeasurements
 */
const useEffectSlider = (filterName, isUnitsMeasurements) => {
  slider.noUiSlider.on('update', () => {
    if (filterName === 'none') {
      uploadPreviewImg.style.removeProperty('filter');
      sliderFieldset.classList.add('hidden');
      sliderField.value = '';
      return;
    } else {
      sliderFieldset.classList.remove('hidden');
    }

    if (isUnitsMeasurements) {
      uploadPreviewImg.style.filter = `${filterName}(${slider.noUiSlider.get()}${isUnitsMeasurements})`;
    } else {
      uploadPreviewImg.style.filter = `${filterName}(${slider.noUiSlider.get()})`;
    }
    sliderField.value = slider.noUiSlider.get();
  });
};

const useSelectedEffects = (value) => {
  if (value === 'none') {
    useEffectSlider('none');
  }

  if (value === 'chrome') {
    slider.noUiSlider.updateOptions({
      range: {
        min: 0,
        max: 1
      },
      step: 0.1,
      start: 1
    });
    useEffectSlider('grayscale');
  }

  if (value === 'sepia') {
    slider.noUiSlider.updateOptions({
      range: {
        min: 0,
        max: 1
      },
      step: 0.1,
      start: 1
    });
    useEffectSlider('sepia');
  }

  if (value === 'marvin') {
    slider.noUiSlider.updateOptions({
      range: {
        min: 0,
        max: 100
      },
      step: 1,
      start: 100
    });
    useEffectSlider('invert', '%');
  }

  if (value === 'phobos') {
    slider.noUiSlider.updateOptions({
      range: {
        min: 0,
        max: 3
      },
      step: 0.1,
      start: 3
    });
    useEffectSlider('blur', 'px');
  }

  if (value === 'heat') {
    slider.noUiSlider.updateOptions({
      range: {
        min: 1,
        max: 3
      },
      step: 0.1,
      start: 3
    });
    useEffectSlider('brightness');
  }
};

export { useSelectedEffects };
