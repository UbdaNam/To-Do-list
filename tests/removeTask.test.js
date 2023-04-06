import removeTask from "../src/modules/removeTask";

describe('Unit tests for remove task function', () => {

  test('remove one task from the task list with one task', () => {
    const currentTaskList = [
      {
        description: "Task 1",
        completed: false,
        index: 1,
      }
    ];
    const index = 1;
    const deletedTask = {
      description: "Task 1",
      completed: false,
      index: 1,
    };

    const newTaskList = removeTask(currentTaskList, index);

    expect(newTaskList).not.toContainEqual(deletedTask)
  })
})