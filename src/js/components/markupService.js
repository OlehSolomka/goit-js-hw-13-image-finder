import { getImg } from './apiService';
import { buttonLocker, scrollIntoView, refs } from './uxService';
import imgCardTemplate from '../templates/img-card.template.hbs';

let page = 1;
let endPoint = null;
let imgMarkup = null;

function createMarkup(data) {
  if (endPoint === '') {
    imgMarkup = '';
    buttonLocker();
  } else {
    imgMarkup = imgCardTemplate(data);
  }
  refs.list.innerHTML = imgMarkup;
  scrollIntoView();
}
function createExtendedMarkup(data) {
  const extendedMarkup = imgCardTemplate(data);
  refs.list.insertAdjacentHTML('beforeend', extendedMarkup);
  scrollIntoView();
}

export function createImgList(e) {
  page = 1;
  refs.button.classList.remove('hide');
  endPoint = e.target.value;
  getImg(endPoint, page).then(data => {
    if (data.hits.length < 12) {
      refs.button.classList.add('hide');
    }
    createMarkup(data);
  });
}
export function createExtendedImgList() {
  page += 1;
  getImg(endPoint, page).then(data => {
    createExtendedMarkup(data);
  });
}
