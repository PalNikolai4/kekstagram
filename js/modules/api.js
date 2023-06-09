const createLoader = (onSuccess, onFail) => () => {
  return fetch('https://25.javascript.pages.academy/kekstagram/data')
  .then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error();
    }
  })
  .then((data) => onSuccess(data))
  .catch(() => onFail());
}


const sendData = (onSucces, onFail, body) => {
  fetch(
    'https://25.javascript.pages.academy/kekstagram',
    {
      method: 'POST',
      body,
    },
  )
    .then((response) => {
      if (response.ok) {
        onSucces();
      } else {
        throw new Error();
      }
    })
    .catch(() => onFail()); // проставить оператор вызова
};


export { createLoader, sendData };