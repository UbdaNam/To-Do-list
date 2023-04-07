import deleteCompleted from '../src/modules/deleteAllCompleted.js';

describe('Unit tests for delete all completed function', () => {
  test('Delete all completed task with a list containing 1 task which is completed', () => {
    const currentTaskList = [
      {
        description: 'Task 1',
        completed: true,
        index: 1,
      },
    ];
    const newTask = {
      description: 'Task 1',
      completed: true,
      index: 1,
    };

    const newTaskList = deleteCompleted(currentTaskList);

    expect(newTaskList).not.toContainEqual(newTask);
  });
  test('Delete all completed task with a list containing 1 task which is completed', () => {
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
        completed: true,
        index: 3,
      },
      {
        description: 'Task 4',
        completed: false,
        index: 4,
      },
    ];

    const newTaskList = deleteCompleted(currentTaskList);

    expect(newTaskList).toContainEqual(
      {
        description: 'Task 2',
        completed: false,
        index: 2,
      },
      {
        description: 'Task 4',
        completed: false,
        index: 4,
      },
    );
  });
});