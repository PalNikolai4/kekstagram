const createLoader = (onSuccess, onFail) => () => fetch ('https://25.javascript.pages.academy/kekstagram/data')
  .then((response) => {
    if (response.ok) {
      return response.json();
    }
    onFail();
    throw new Error(`${response.ok} ${response.status}`);
  })
  .then((data) => onSuccess(data))
  .catch((err) => console.log(err));


export { createLoader };
