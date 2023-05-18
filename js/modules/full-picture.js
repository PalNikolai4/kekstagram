const bigPictureContainer = document.querySelector('.big-picture');

/**
 * Fn returns tag element.
 * @param {string} tagName
 * @param {string} tagClass
 * @param {string} content
 * @returns
 */
const createElement = (tagName, tagClass, content) => {
  const element = document.createElement(tagName);
  element.classList.add(tagClass);
  if (content) { element.textContent = content };
  return element;
}

const createComment = (item) => {
  const socialComment = createElement('li', 'social__comment');

  const socialPicture = createElement('img', 'social__picture');
  socialPicture.src = item.avatar;
  socialPicture.alt = item.name;
  socialComment.append(socialPicture);

  const socialText = createElement('p', 'social__text', item.message);
  socialComment.append(socialText);

  return socialComment;
}

/**
 * Fn closes the view of the full size photo by clicking on cross or esc key
 */
const closeFullPhoto = () => {
  const closeButton = bigPictureContainer.querySelector('.big-picture__cancel');
  closeButton.addEventListener('click', () => {
    bigPictureContainer.classList.add('hidden');
  });

  document.addEventListener('keydown', (evt) => {
    evt.preventDefault();
    if (evt.keyCode === 27) {
      bigPictureContainer.classList.add('hidden');
    }
  })
}

const showFullPhoto = (url, likes, commentsLength, description, comments) => {
  const socialCommentsList = bigPictureContainer.querySelector('.social__comments');
  const fragment = document.createDocumentFragment();

  bigPictureContainer.classList.remove('hidden');
  bigPictureContainer.querySelector('.big-picture__img').querySelector('img').src = url;
  bigPictureContainer.querySelector('.likes-count').textContent = likes;
  bigPictureContainer.querySelector('.comments-count').textContent = commentsLength;
  bigPictureContainer.querySelector('.social__caption').textContent = description;

  // какая-то хрень с комментариями!! Вместо 1-3 комментариев на каждое фото отрисовываются все
  comments.forEach(comment => {
    fragment.append(createComment(comment));
  });
  socialCommentsList.append(fragment);

  closeFullPhoto();
}

export { showFullPhoto }
