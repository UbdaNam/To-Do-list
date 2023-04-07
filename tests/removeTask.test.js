import removeTask from '../src/modules/removeTask.js';

describe('Unit tests for remove task function', () => {
  test('remove one task from the task list with one task', () => {
    const currentTaskList = [
      {
        description: 'Task 1',
        completed: false,
        index: 1,
      },
    ];
    const index = 1;
    const deletedTask = {
      description: 'Task 1',
      completed: false,
      index: 1,
    };

    const newTaskList = removeTask(currentTaskList, index);

    expect(newTaskList).not.toContainEqual(deletedTask);
  });

  test('expect task with given index to be removed from tasklist', () => {
    const anotherTaskList = [
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
    ];
    const index = 2;

    const tasklist = removeTask(anotherTaskList, index);

    expect(tasklist).not.toContainEqual({
      description: 'Task 2',
      completed: false,
      index: 2,
    });
  });

  test('remove the first task form the task list', () => {
    const anotherTaskList = [
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
    ];
    const index = 1;

    const tasklist = removeTask(anotherTaskList, index);

    expect(tasklist).not.toContainEqual({
      description: 'Task 2',
      completed: true,
      index: 1,
    });
  });
});
