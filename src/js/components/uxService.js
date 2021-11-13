

export const refs = {
  list: document.querySelector('.gallery'),
  button: document.querySelector('button'),
  loader: document.querySelector('.loader'),
  input: document.querySelector('input'),
};

let imgMarkup;

export function buttonLocker() {
  if (!imgMarkup) {
    refs.button.classList.add('hide');
  }
}
export function scrollIntoView() {
  refs.list.scrollIntoView({
    behavior: 'smooth',
    block: 'end',
  });
}
export function showLoader() {
  refs.loader.classList.remove('hide');
}

export function hideLoader() {
  refs.loader.classList.add('hide');
}

