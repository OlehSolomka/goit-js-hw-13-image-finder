import '../sass/main.scss';
import { refs } from './components/uxService';
import debounce from 'lodash.debounce';
import { createImgList, createExtendedImgList } from './components/markupService';

refs.input.addEventListener('input', debounce(createImgList, 1000));
refs.button.addEventListener('click', e => {
  e.target.blur();
  createExtendedImgList();
});
