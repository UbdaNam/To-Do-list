const removeTask = (tasks, index) => {
  const newTask = tasks.filter((task) => task.index !== index);

  return newTask;
};

export default removeTask;