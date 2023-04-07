const setLocalStorage = (tasks) => {
  localStorage.setItem('taskList', JSON.stringify(tasks));
};

const readLocalStorage = () => {
  const tasks = JSON.parse(localStorage.getItem('taskList'));

  return tasks;
};

export { setLocalStorage, readLocalStorage };