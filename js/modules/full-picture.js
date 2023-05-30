import { createElement } from './utill.js';
import { openFullPhoto } from './events-gallery.js';
import { clearArr } from './utill.js';

const bigPictureContainer = document.querySelector('.big-picture');
const socialCommentsList = bigPictureContainer.querySelector('.social__comments');
const commentsLoaderButton = document.querySelector('.social__comments-loader');

const deleteAllComments = () => {
  socialCommentsList.innerHTML = '';
};

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

const createComments = (comments) => {
  const commentsFragment = document.createDocumentFragment();
  comments.forEach((comment) => {
    const userComment = createComment(comment);
    commentsFragment.append(userComment);
  });
  socialCommentsList.append(commentsFragment);
};

/**
 * Fn creates an array and moves 5 elements into it from the array passed to it
 * @param {array} items
 */
const addFiveComments = (items) => {
  const temporaryStorage = [];
  for (let i = 0; i < 5; i++) {
    const item = items.shift();
    temporaryStorage.push(item);
  }
  createComments(temporaryStorage);
  clearArr(temporaryStorage);
};

/**
 * Fn creates an array and moves all the elements from the array passed to it into it
 * @param {array} items
 */
const addAllComments = (items) => {
  const temporaryStorage = [];
  for (let i = 0; i < items.length;) {
    const item = items.shift();
    temporaryStorage.push(item);
  }
  createComments(temporaryStorage);
  clearArr(temporaryStorage);
};

const getCommentsCountShow = () => {
  document.querySelector('.comments-count-show').textContent = socialCommentsList.children.length;
};

/**
 * Fn hides the ".social__comments-loader" button if all comments are displayed
 */
const hideOrShowCommentsLoaderButton = () => {
  let commentsCountShow = document.querySelector('.comments-count-show').textContent;
  let commentsCount = bigPictureContainer.querySelector('.comments-count').textContent;
  commentsCountShow = parseInt(commentsCountShow, 10);
  commentsCount = parseInt(commentsCount, 10);

  if (commentsCountShow === commentsCount) {
    commentsLoaderButton.classList.add('hidden');
  } else {
    commentsLoaderButton.classList.remove('hidden');
  }

};

/**
 * Fn shows 5 comments. Click on the button, 5 more comments are shown. If there are less than 5 comments, show all remaining
 * @param {array} items
 */
const drawComments = (items) => {
  const cloneArr = items.slice();
  if (cloneArr.length < 5) { addAllComments(cloneArr); }
  if (cloneArr.length === 5) { addFiveComments(cloneArr); }
  getCommentsCountShow();
  hideOrShowCommentsLoaderButton();

  if (cloneArr.length > 5) {
    addFiveComments(cloneArr);
    getCommentsCountShow();
    commentsLoaderButton.addEventListener('click', () => {

      if (cloneArr.length > 5) {
        addFiveComments(cloneArr);
      } else if (cloneArr.length === 5) {
        addFiveComments(cloneArr);
      } else if (cloneArr.length < 5) {
        addAllComments(cloneArr);
      }
      getCommentsCountShow();
      hideOrShowCommentsLoaderButton();
    });
  }
};

const drawFullPhoto = ({ url, description, likes, comments }) => {
  bigPictureContainer.querySelector('.big-picture__img').querySelector('img').src = url;
  bigPictureContainer.querySelector('.likes-count').textContent = likes;
  bigPictureContainer.querySelector('.comments-count').textContent = comments.length;
  bigPictureContainer.querySelector('.social__caption').textContent = description;
  openFullPhoto();
  deleteAllComments();
  drawComments(comments);
};

export { drawFullPhoto, deleteAllComments };
