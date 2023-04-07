import { param, checkCompleted } from '../index.js';

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
    const li = document.createElement('li');
    li.setAttribute('id', `id${item.index}`);
    li.innerHTML = `
    <div class="list-main">
      <input type="checkbox" ${item.completed === true ? 'checked' : ''} name="check" id="checkInput">
      <h4 class=${item.completed === true ? 'cross-text' : ''}>${item.description}</h4>
    </div>
    <button class="menuBtn" data-index=${item.index}>
    <span class="material-symbols-outlined">
      more_vert
    </span>
    </button>
    `;
    const icon = li.querySelector('button .material-symbols-outlined');
    const checkBox = li.querySelector('.list-main input');
    icon.addEventListener('click', () => {
      passParam(li, toDoList, item.index);
    });
    checkBox.addEventListener('click', () => {
      checkBoxParam(toDoList, item.index);
    });
    ulEle.appendChild(li);
  });
};

export default showTasks;