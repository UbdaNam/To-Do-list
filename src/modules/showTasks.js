import { param, checkCompleted } from '../index.js';
import renderList from './renderList.js';
const passParam = (li, toDoList, index) => {
  param(toDoList, index, li);
};

const checkBoxParam = (toDoList, index) => {
  checkCompleted(toDoList, index);
};

const showTasks = (toDoList) => {
  const ulEle = document.querySelector('.to-do-list');
  ulEle.innerHTML = '';
  toDoList.forEach((item) => {
    const li = renderList(item, ulEle);
    const icon = li.querySelector('button .material-symbols-outlined');
    const checkBox = li.querySelector('.list-main input');
    icon.addEventListener('click', () => {
      passParam(li, toDoList, item.index);
    });
    checkBox.addEventListener('click', () => {
      checkBoxParam(toDoList, item.index);
    });
  });
};

export default showTasks;