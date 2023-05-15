/* eslint-disable import/extensions */
/* eslint-disable import/no-self-import */
// app.js
// modal.js 구현
import { openModal } from './modal.js';

const $btn = document.querySelector('#btn');

$btn.addEventListener('click', () => {

  openModal({
    text: '모달입니다.',
  });
});