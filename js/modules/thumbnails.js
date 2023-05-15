import { getArrayGivenLength } from "./utill.js";
import { getDescriptionPhoto } from "./data.js";
import { showFullPhoto } from "./full-picture.js";

const templatePicture = document.querySelector('#picture').content.querySelector('.picture');
const picturesContainer = document.querySelector('.pictures');
const fragment = document.createDocumentFragment();
const arrayComment = getArrayGivenLength(getDescriptionPhoto);

arrayComment.forEach(({id, url, description, likes, comments}) => {
  const thumbnails = templatePicture.cloneNode(true);
  thumbnails.querySelector('.picture__img').src = url;
  thumbnails.querySelector('.picture__likes').textContent = likes;
  thumbnails.querySelector('.picture__comments').textContent = comments.length;
  showFullPhoto(thumbnails);
  fragment.append(thumbnails);
})

picturesContainer.append(fragment);

/*
    <a href="#" class="picture">
      <img class="picture__img" src="" width="182" height="182" alt="Случайная фотография">
      <p class="picture__info">
        <span class="picture__comments"></span>
        <span class="picture__likes"></span>
      </p>
    </a>
*/
