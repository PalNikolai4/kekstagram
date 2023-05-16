import { getDescriptionPhoto } from "./data.js";
import { getArrayGivenLength } from "./utill.js";
import { showFullPhoto } from "./full-picture.js";


const picturesContainer = document.querySelector('.pictures');
const bigPictureSocial = document.querySelector('.big-picture__social');
const socialCommentsList = document.querySelector('.social__comments');
const templatePicture = document.querySelector('#picture').content.querySelector('.picture');


const fragment = document.createDocumentFragment();
const arrayDescriptions = getArrayGivenLength(getDescriptionPhoto);


arrayDescriptions.forEach(({ id, url, description, likes, comments }) => {
  const thumbnails = templatePicture.cloneNode(true);
  thumbnails.querySelector('.picture__img').src = url;
  thumbnails.querySelector('.picture__likes').textContent = likes;
  thumbnails.querySelector('.picture__comments').textContent = socialCommentsList.children.length + comments.length;

  showFullPhoto(thumbnails, comments);
  fragment.append(thumbnails);
})


picturesContainer.append(fragment);
