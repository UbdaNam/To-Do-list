import { updateTask } from "../src/modules/editTask";

describe('Unit tests for update task description function', () => {

  test('Update task 1 description', () => {
    const currentTaskList = [
      {
        description: 'Task 1',
        completed: true,
        index: 1,
      },
    ];
    const index = 1;
    const description = "Updated description";
    const newTask = {
      description: 'Updated description',
      completed: true,
      index: 1,
    };

    const newTaskList = updateTask(currentTaskList, index, description);

    expect(newTaskList).toContainEqual(newTask);
  });

  test('Update task 2 description', () => {
    const currentTaskList = [
      {
        description: 'Task 1',
        completed: true,
        index: 1,
      },
      {
        description: 'Task 2',
        completed: false,
        index: 2,
      },
      {
        description: 'Task 3',
        completed: false,
        index: 3,
      }
    ];
    const index = 2;
    const description = "Updated description";
    const newTask = {
      description: 'Updated description',
      completed: false,
      index: 2,
    };

    const newTaskList = updateTask(currentTaskList, index, description);

    expect(newTaskList).toContainEqual(newTask);
  });

});