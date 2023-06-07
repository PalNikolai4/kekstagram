const createLoader = (onSuccess, onFail) => () => fetch('https://25.javascript.pages.academy/kekstagram/data')
  .then((response) => {
    if (response.ok) {
      return response.json();
    }
    onFail();
    throw new Error(`${response.ok} ${response.status}`);
  })
  .then((data) => onSuccess(data))
  .catch((err) => console.log(err));


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
