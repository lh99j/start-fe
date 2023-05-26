const LOCAL_STORAGE_KEY = 'todos';

function getTodos() {
  let todos;
  try {
    todos = JSON.parse(window.localStorage.getItem(LOCAL_STORAGE_KEY));
  } catch (error) {
    console.error('localStorage에서 할 일 파싱 오류', error);
  }
  return todos || [];
}

function saveTodos(todos) {
  window.localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
}

export { LOCAL_STORAGE_KEY, getTodos, saveTodos };