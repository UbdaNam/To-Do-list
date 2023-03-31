import './style.css';
import showTasks from './modules/showTasks.js';
import { readLocalStorage, setLocalStorage } from './modules/localStorage.js';
import addTask from './modules/addTask.js';
import removeTask from './modules/removeTask.js';
import updateIndex from './modules/updateIndex.js';
import { editTask, updateTask } from './modules/editTask.js';

const addInput = document.getElementById('addInput');
const toDoList = () => readLocalStorage() || [];
showTasks(toDoList());
// Add task
addInput.addEventListener('keyup', ({ key }) => {
  if (key === 'Enter') {
    addTask(toDoList(), addInput.value);
    showTasks(toDoList());
    addInput.value = '';
  }
});
// Edit task
const param = (currentList, currentIndex, li) => {
  const obj = editTask(li);
  const description = obj.descriptionEle;
  const { deleteIcon } = obj;

  // Delete Task
  deleteIcon.addEventListener('click', () => {
    removeTask(currentList, currentIndex);
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
export default param;