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
  if (content) { element.textContent = content; }
  return element;
};

const createComment = ({avatar, name, message}) => {
  const userComment = createElement('li', 'social__comment');

  const userCommentPicture = createElement('img', 'social__picture');
  userCommentPicture.src = avatar;
  userCommentPicture.alt = name;
  userComment.append(userCommentPicture);

  const userCommentText = createElement('p', 'social__text', message);
  userComment.append(userCommentText);

  return userComment;
};

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
  });
};

const showFullPhoto = ({ url, description, likes, comments }) => {
  bigPictureContainer.classList.remove('hidden');
  bigPictureContainer.querySelector('.big-picture__img').querySelector('img').src = url;
  // console.log(thumbnail);
  bigPictureContainer.querySelector('.likes-count').textContent = likes;
  bigPictureContainer.querySelector('.comments-count').textContent = comments.length;
  bigPictureContainer.querySelector('.social__caption').textContent = description;

  comments.forEach((comment) => {
    const userComment = createComment(comment);
    // console.log(userComment)
  });

  closeFullPhoto();
};

export { showFullPhoto };
