import markCompleted from '../src/modules/markCompleted.js';

describe('Unit tests for update task status function', () => {
  test('Change status of task 2 to completed', () => {
    const currentTaskList = [
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
    const index = 2;
    const newTask = {
      description: 'Task 2',
      completed: true,
      index: 2,
    };

    const newTaskList = markCompleted(index, currentTaskList);

    expect(newTaskList).toContainEqual(newTask);
  });

  test('Change status of task 2 to completed', () => {
    const currentTaskList = [
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
      {
        description: 'Task 3',
        completed: true,
        index: 3,
      },
    ];
    const index = 3;
    const newTask = {
      description: 'Task 3',
      completed: false,
      index: 3,
    };

    const newTaskList = markCompleted(index, currentTaskList);

    expect(newTaskList).toContainEqual(newTask);
  });
});
