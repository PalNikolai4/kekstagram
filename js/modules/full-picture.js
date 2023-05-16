const bigPictureContainer = document.querySelector('.big-picture');


const closeFullPhoto = () => {
  const closeButton = bigPictureContainer.querySelector('.big-picture__cancel');
  closeButton.addEventListener('click', () => {
    bigPictureContainer.classList.add('hidden');
  })
}

const showFullPhoto = (item) => {
  item.addEventListener('click', (evt) => {
    evt.preventDefault();
    bigPictureContainer.classList.remove('hidden');
    bigPictureContainer.querySelector('.big-picture__img').querySelector('img').src = item.querySelector('.picture__img').src;
    bigPictureContainer.querySelector('.likes-count').textContent = item.querySelector('.picture__likes').textContent;
    bigPictureContainer.querySelector('.comments-count').textContent = item.querySelector('.picture__comments').textContent;

    closeFullPhoto();
  })
}



export {showFullPhoto}


// const bigPictureContainer = document.querySelector('.big-picture');
// const bigPictureSocial = bigPictureContainer.querySelector('.big-picture__social');

// const closeFullPhoto = () => {
//   const closeButton = bigPictureContainer.querySelector('.big-picture__cancel');
//   closeButton.addEventListener('click', () => {
//     bigPictureContainer.classList.add('hidden');
//   })
// }

// const showFullPhoto = (item, comments) => {
//   item.addEventListener('click', function (evt) {
//     evt.preventDefault();
//     bigPictureContainer.classList.remove('hidden');
//     bigPictureContainer.querySelector('.big-picture__img').querySelector('img').src = item.querySelector('.picture__img').src;
//     bigPictureSocial.querySelector('.likes-count').textContent = item.querySelector('.picture__likes').textContent;
//     bigPictureSocial.querySelector('.comments-count').textContent = item.querySelector('.picture__comments').textContent;
//     closeFullPhoto();
//     })
// }

// export {showFullPhoto}
