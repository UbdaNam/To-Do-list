import { setLocalStorage } from './localStorage.js';

const removeTask = (tasks, index) => {
  const newTask = tasks.filter((task) => task.index !== index);
  setLocalStorage(newTask);
};

export default removeTask;