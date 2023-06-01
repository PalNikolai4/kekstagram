import './modules/gallery.js';
import './modules/form.js';

/*
Примечания.

1. Измененния в разметке:
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
  - Модуль validate-form.js -> доработать вывод сообщения об ошибке из Fn validateTextHashtags (в зависимости
    от проверки) в pristine.addValidator вместо сообщения 'Что-то пошло не так'.
  - Модуль scale.js -> Fn removeAllEventScale -> export to events-form.js in Fn closeFormEditImg - обработчики при закрытии
    окна редактирования фотографии висят. Должны быть удалены!

*/
