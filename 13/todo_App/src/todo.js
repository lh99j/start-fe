import { getTodos, saveTodos } from './storage.js';

function createTodo(text) {
  if (!text.trim()) return;
  
  const todos = getTodos();
  todos.push(text);
  saveTodos(todos);
}

function deleteTodo(index) {
  const todos = getTodos();
  todos.splice(index, 1);
  saveTodos(todos);
}

export { createTodo, deleteTodo };