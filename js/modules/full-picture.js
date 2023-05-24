import { createElement } from './utill.js';
import { openFullPhoto } from './events-gallery.js';

const bigPictureContainer = document.querySelector('.big-picture');
const socialCommentsList = bigPictureContainer.querySelector('.social__comments');

/**
 * Fn takes the comment data as an object and creates a comment
 * @param {object} param0
 * @returns
 */
const createComment = ({ avatar, name, message }) => {
  const userComment = createElement('li', 'social__comment');

  const userCommentPicture = createElement('img', 'social__picture');
  userCommentPicture.src = avatar;
  userCommentPicture.alt = name;
  userComment.append(userCommentPicture);

  const userCommentText = createElement('p', 'social__text', message);
  userComment.append(userCommentText);

  return userComment;
};

const deleteAllComments = () => {
  socialCommentsList.innerHTML = '';
}

const createComments = (comments) => {
  const commentsFragment = document.createDocumentFragment();
  comments.forEach((comment) => {
    const userComment = createComment(comment);
    commentsFragment.append(userComment);
  });
  socialCommentsList.append(commentsFragment);
}

const showFullPhoto = ({ url, description, likes, comments }) => {
  bigPictureContainer.querySelector('.big-picture__img').querySelector('img').src = url;
  bigPictureContainer.querySelector('.likes-count').textContent = likes;
  bigPictureContainer.querySelector('.comments-count').textContent = comments.length;
  bigPictureContainer.querySelector('.social__caption').textContent = description;
  openFullPhoto();
  createComments(comments);
};

export { showFullPhoto, deleteAllComments };
