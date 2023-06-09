import { addClickHandlerthumbnailsOnPage, useFilter } from './modules/gallery.js';
import { createLoader } from './modules/api.js';
import { showErrorMessageGetData, showImgFilters } from './modules/utill.js';
import { sendFormData } from './modules/validate-form.js';
import './modules/form.js';

const getData = createLoader((data) => {
  addClickHandlerthumbnailsOnPage(data);
  showImgFilters(data);
  useFilter(data);
}, showErrorMessageGetData);

getData();
sendFormData();
/*
Примечания.

1. Самовольные решения.
    Измененния в разметке:
  - В элементе <div class="social__comment-count"> обернул в <span class="comments-count-show"> число, показывающее
    количество отображённых комментариев из общего количества. Значение динамически изменяется скриптом
    (модуль full-picture.js -> Fn getCommentsCountShow);

  - Строки 129 - 134. Обернул input и textarea в отдельный <fieldset class="img-upload__text text">. Для того, чтобы
    у каждого элемента был свой отдельный предок.
    Иначе некорректно работает вывод сообщения об ошибке pristine - блок сообщения textarea 'перекрывает' (даже если
    у него нет ошибок) блок сообщения об ошибке input.
    В двух случаях: 1 - input с ошибкой, textarea - нет; 2 - input с ошибкой, textarea - тоже - сообщение об ошибке
    в поле input не высвечивается. Пользователю придётся догадываться в чём проблема. Это неявное поведение.
  - maxlength в атрибутах обоих полей не указывал намеренно. Курс рассчитан в первую очередь на JS, а не на разметку.

  2. Доработать:
  - Модуль full-picture.js -> сделать рефактор Fn drawComments. В особенности вынести FN из тела addEventListener.
  - Модуль scale.js -> Fn removeAllEventScale -> export to events-form.js in Fn closeFormEditImg - обработчики при закрытии
    окна редактирования фотографии висят. Должны быть удалены!
  - Модуль slider.js -> стр. 39 - если расскоментировать вывод в консоль, несколько раз нажать на разные эффекты, то
    наблюдается следующая картина: нажал например на ХРОМ - в лог выведется значение фильтра grayscale(число),
    дальше нажать например сепия - выведется grayscale(число), sepia(число), и дальше по нарастающей. Чем больше change effects,
    тем больше раз происходит вызов Fn useEffectSlider.
*/
