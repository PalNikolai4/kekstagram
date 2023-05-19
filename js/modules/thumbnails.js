// import { getDescriptionPhoto } from "./data.js";
// import { getArrayGivenLength } from "./utill.js"
import { showFullPhoto } from "./full-picture.js";

const picturesContainer = document.querySelector('.pictures');
const bigPictureContainer = document.querySelector('.big-picture');
const templatePicture = document.querySelector('#picture').content.querySelector('.picture');
const fragment = document.createDocumentFragment();

const drawArrayDescriptionsPhotos = (thumbnails) => {
  thumbnails.forEach(({ url, description, likes, comments }) => {
    const picture = templatePicture.cloneNode(true);
    picture.querySelector('.picture__img').src = url;
    picture.querySelector('.picture__img').alt = description;
    picture.querySelector('.picture__comments').textContent = comments.length;
    picture.querySelector('.picture__likes').textContent = likes;
    fragment.append(picture);
  });
  picturesContainer.append(fragment);
}


export { drawArrayDescriptionsPhotos }
