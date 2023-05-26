import { createTodo } from './todo.js';
import { updateDisplay } from './display.js';

const $form = document.querySelector('.new-task');
const $input = document.querySelector('.input-text');

function init(){
  $form.addEventListener('submit', (e) => {
    e.preventDefault();
    const text = $input.value;
    $input.value = '';
    createTodo(text);
    updateDisplay();
  });

  updateDisplay();
}

init();