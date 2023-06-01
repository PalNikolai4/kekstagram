const sliderFieldset = document.querySelector('.img-upload__effect-level');
const sliderField = document.querySelector('.effect-level__value');
const slider = document.querySelector('.effect-level__slider');
const uploadPreviewImg = document.querySelector('.img-upload__preview').querySelector('img');

noUiSlider.create(slider, {
	range: {
		min: 0,
		max: 100
	},
	start: 50,
	step: 10,
	connect: 'lower'
	// доделать форматирование чисел
})

const useEffectSlider = (filterName, unitsMeasurements) => {
	slider.noUiSlider.on('update', () => {
		if (filterName === 'none') {
			uploadPreviewImg.style.removeProperty('filter');
			sliderFieldset.classList.add('hidden');
		} else {
			sliderFieldset.classList.remove('hidden');
		}

		if (unitsMeasurements) {
			sliderField.value = slider.noUiSlider.get();
			uploadPreviewImg.style.filter = `${filterName}(${parseFloat(sliderField.value)}${unitsMeasurements})`;
		} else {
			sliderField.value = slider.noUiSlider.get();
			uploadPreviewImg.style.filter = `${filterName}(${parseFloat(sliderField.value)})`;
		}

	})
}

const useSelectedEffects = (value) => {

	if (value === 'none') {
		slider.noUiSlider.updateOptions({
			range: {
				min: 0,
				max: 100
			},
			start: 100,
			step: 10,
		})
		const filterName = 'none';
		useEffectSlider(filterName);
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
		const filterName = 'grayscale';
		useEffectSlider(filterName);
	}

	if (value === 'sepia') {
		slider.noUiSlider.updateOptions({
			range: {
				min: 0,
				max: 1
			},
			step: 0.1,
			start: 1
		})
		const filterName = 'sepia';
		useEffectSlider(filterName);
	}

	if (value === 'marvin') {
		slider.noUiSlider.updateOptions({
			range: {
				min: 0,
				max: 100
			},
			step: 1,
			start: 100
		})
		const filterName = 'invert';
		useEffectSlider(filterName, '%');
	}

	if (value === 'phobos') {
		slider.noUiSlider.updateOptions({
			range: {
				min: 0,
				max: 3
			},
			step: 0.1,
			start: 3
		})
		const filterName = 'blur';
		useEffectSlider(filterName, 'px');
	}

	if (value === 'heat') {
		slider.noUiSlider.updateOptions({
			range: {
				min: 1,
				max: 3
			},
			step: 0.1,
			start: 3
		})
		const filterName = 'brightness';
		useEffectSlider(filterName);
	}
}


/**
 * Fn takes the value of the selected effect and passes that value to Fn useSelectedEffects
 * @param {string} item
 */
const getValueSelectedEffects = (item) => {
	useSelectedEffects(item);
}

export { getValueSelectedEffects }
