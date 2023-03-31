import { setLocalStorage } from './localStorage.js';

const addTask = (tasks, description) => {
  const task = {
    description,
    completed: false,
    index: tasks.length + 1,
  };
  tasks.push(task);
  setLocalStorage(tasks);

  return tasks;
};

export default addTask;