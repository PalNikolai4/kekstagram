import { getArrayDescriptionPhoto } from "./data.js";
import { showFullPhoto } from "./full-picture.js";

const picturesContainer = document.querySelector('.pictures');
const templatePicture = document.querySelector('#picture').content.querySelector('.picture');

const fragment = document.createDocumentFragment();
const arrayDescriptionsPhotos = getArrayDescriptionPhoto();


arrayDescriptionsPhotos.forEach(({ id, url, description, likes, comments }) => {
  const picture = templatePicture.cloneNode(true);
  picture.querySelector('.picture__img').src = url;
  console.log(picture.src)

  picture.querySelector('.picture__comments').textContent = comments.length;

  picture.querySelector('.picture__likes').textContent = likes;

  fragment.append(picture);
});
picturesContainer.append(fragment);
