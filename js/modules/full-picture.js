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

// const createComment = (item) => {
//   const socialComment = createElement('li', 'social__comment');

//   const socialPicture = createElement('img', 'social__picture');
//   socialPicture.src = item.avatar;
//   socialPicture.alt = item.name;
//   socialComment.append(socialPicture);

//   const socialText = createElement('p', 'social__text', item.message);
//   socialComment.append(socialText);

//   return socialComment;
// }

const createComment = (userComment) => {
  const socialComment = createElement('li', 'social__comment');

  const socialPicture = createElement('img', 'social__picture');
  socialPicture.src = userComment.avatar;
  socialPicture.alt = userComment.name;
  socialComment.append(socialPicture);

  const socialText = createElement('p', 'social__text', userComment.message);
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

const showFullPhoto = (thumbnail, usersComments) => {
  bigPictureContainer.classList.remove('hidden');
  bigPictureContainer.querySelector('.big-picture__img').querySelector('img').src = thumbnail.querySelector('.picture__img').src;
  bigPictureContainer.querySelector('.likes-count').textContent = thumbnail.querySelector('.picture__likes').textContent;
  bigPictureContainer.querySelector('.comments-count').textContent = thumbnail.querySelector('.picture__comments').textContent;
  bigPictureContainer.querySelector('.social__caption').textContent = thumbnail.querySelector('.picture__img').alt;

  usersComments.comments.forEach(comment => {
    const userComment = createComment(comment);
    console.log(userComment)
  });

  closeFullPhoto();
}

export { showFullPhoto }
