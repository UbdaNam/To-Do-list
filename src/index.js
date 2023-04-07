import './style.css';
import showTasks from './modules/showTasks.js';
import { readLocalStorage, setLocalStorage } from './modules/localStorage.js';
import addTask from './modules/addTask.js';
import removeTask from './modules/removeTask.js';
import updateIndex from './modules/updateIndex.js';
import { editTask, updateTask } from './modules/editTask.js';
import markCompleted from './modules/markCompleted.js';
import deleteCompleted from './modules/deleteAllCompleted.js';

const addInput = document.getElementById('addInput');
const removeBtn = document.querySelector('.removeBtn');
const toDoList = () => readLocalStorage() || [];
showTasks(toDoList());
// Add task
addInput.addEventListener('keyup', ({ key }) => {
  if (key === 'Enter') {
    const newList = addTask(toDoList(), addInput.value);
    setLocalStorage(newList);
    showTasks(toDoList());
    addInput.value = '';
  }
});
// Edit task
const param = (currentList, currentIndex, li) => {
  const obj = editTask(li);
  const { deleteIcon, descriptionEle: description } = obj;

  // Delete Task
  deleteIcon.addEventListener('click', () => {
    const newList = removeTask(currentList, currentIndex);
    setLocalStorage(newList);
    showTasks(toDoList());
    const data = updateIndex(toDoList());
    setLocalStorage(data);
  });

  // Rename Task
  description.addEventListener('keyup', (event) => {
    if (event.keyCode === 13) {
      event.preventDefault();
      const text = description.innerText;
      const updatedTasks = updateTask(currentList, currentIndex, text);
      setLocalStorage(updatedTasks);
      showTasks(toDoList());
    }
  });
};
// update status of completed tasks
const checkCompleted = (currentList, index) => {
  const updatedList = markCompleted(index, currentList);
  setLocalStorage(updatedList);
  showTasks(toDoList());
};
removeBtn.addEventListener('click', () => {
  const newList = deleteCompleted(toDoList());
  const data = updateIndex(newList);
  setLocalStorage(data);
  showTasks(toDoList());
});

export { param, checkCompleted };