/**
 * @jest-environment jsdom
 */

import addTask from "../src/modules/addTask.js";
import { setLocalStorage, readLocalStorage } from "../src/modules/localStorage.js";
import renderList from "../src/modules/renderList.js";

describe('Unit tests for add task with dom manipulation', () => {

  test('Add 1 list element in to the unordered list', () => {

    document.body.innerHTML =
      '<div class="container">' +
      '<input type="text" name="addInput" id="addInput" placeholder="Add to your list...">' +
      '<ul class="to-do-list"></ul>' +
      '</div>';
    const ul = document.querySelector('.to-do-list');
    const addInput = document.getElementById('addInput');
    const toDoList = [];
    addInput.value = "Task 1";
    const newList = addTask(toDoList, addInput.value);
    setLocalStorage(newList);
    const taskList = readLocalStorage();

    taskList.forEach((task) => {
      renderList(task, ul);
    });
    
    const list = document.querySelectorAll('.to-do-list li');
    expect(list).toHaveLength(1);
  });

});