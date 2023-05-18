import { getDescriptionPhoto } from "./data.js";
import { getArrayGivenLength } from "./utill.js"
import { showFullPhoto } from "./full-picture.js";

const picturesContainer = document.querySelector('.pictures');
const bigPictureContainer = document.querySelector('.big-picture');
const templatePicture = document.querySelector('#picture').content.querySelector('.picture');

const fragment = document.createDocumentFragment();
const arrayDescriptionsPhotos = getArrayGivenLength(getDescriptionPhoto, 1, 25, 5);


const drawThumbnailsInPage = (item) => {
  for (let i = 0; i < item.length; i++) {
    const picture = templatePicture.cloneNode(true);
    picture.querySelector('.picture__img').src = item[i].url;
    picture.querySelector('.picture__img').alt = item[i].description;
    picture.querySelector('.picture__comments').textContent = item[i].comments.length;
    picture.querySelector('.picture__likes').textContent = item[i].likes;
    picture.querySelector('.picture__comments').textContent = item[i].comments.length;
    fragment.append(picture);
    showFullPhoto(item[i].url, item[i].likes, item[i].comments.length, item[i].description, item[i].comments);
  }
  picturesContainer.append(fragment);
}
const thumbnailsInPage = drawThumbnailsInPage(arrayDescriptionsPhotos);
