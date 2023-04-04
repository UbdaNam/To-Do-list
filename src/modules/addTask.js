const addTask = (tasks, description) => {
  const task = {
    description,
    completed: false,
    index: tasks.length + 1,
  };
  tasks.push(task);

  return tasks;
};

export default addTask;