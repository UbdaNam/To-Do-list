const setLocalStorage = (tasks) => {
  const data = JSON.stringify(tasks);
  localStorage.setItem('taskList', data);
};

const readLocalStorage = () => {
  const data = localStorage.getItem('taskList');
  const tasks = JSON.parse(data);

  return tasks;
};

export { setLocalStorage, readLocalStorage };