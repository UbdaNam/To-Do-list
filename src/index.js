import './style.css';

const toDoList = [
  {
    description: 'Eat my break fast',
    completed: true,
    index: 0,
  },
  {
    description: 'Finish my to-do-list project',
    completed: true,
    index: 1,
  },
  {
    description: 'Add funcionality to my to-do-list project',
    completed: false,
    index: 2,
  },
];
let fullList = '';
toDoList.forEach((item) => {
  const list = `
  <li>
  <div class="list-main">
    <input type="checkbox" ${item.completed === true ? 'checked' : ''} name="check" id="checkInput">
    <h4>${item.description}</h4>
  </div>
  <span class="material-symbols-outlined">
    more_vert
  </span>
</li>
  `;
  fullList += list;
});
const ulEle = document.querySelector('.to-do-list');
ulEle.innerHTML = fullList;