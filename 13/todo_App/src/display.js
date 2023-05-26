import { getTodos } from './storage.js';
import { deleteTodo } from './todo.js';

window.deleteTodo = deleteTodo;

function createTodoElement(todo, index) {
  return `
    <li>
      <button class="delete" onClick="deleteTodo(${index}); updateDisplay();">x</button>
      <input type="checkbox" class="toggle-checked">
      <span class="text">${todo}</span>
    </li>
  `;
}

function updateDisplay() {
  const todos = getTodos();
  const list = document.querySelector('.task-list');
  list.innerHTML = '';
  todos.forEach((todo, index) => {
    const li = createTodoElement(todo, index);
    list.innerHTML += li;
  });
}

window.updateDisplay = updateDisplay;

export { createTodoElement, updateDisplay };