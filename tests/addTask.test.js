import addTask from '../src/modules/addTask.js';

describe('Unit tests for add task function', () => {
  test('Add one task to empty list', () => {
    const sampleTaskList = [];
    const description = 'Add test for add task';
    const newTask = {
      description: 'Add test for add task',
      completed: false,
      index: 1,
    };

    const newTaskList = addTask(sampleTaskList, description);

    expect(newTaskList).toContainEqual(newTask);
  });

  test('Add one task to a list with 2 items', () => {
    const sampleTaskList = [
      {
        description: 'Task 1',
        completed: false,
        index: 1,
      },
      {
        description: 'Task 2',
        completed: false,
        index: 2,
      },
    ];
    const description = 'Task 3';
    const newTask = {
      description: 'Task 3',
      completed: false,
      index: 3,
    };

    const newTaskList = addTask(sampleTaskList, description);

    expect(newTaskList).toContainEqual(newTask);
  });
});
