const updateTasks = (index, taskList) => {
  taskList.forEach((task) => {
    if (task.index === index) {
      task.completed = !task.completed;
    }
  });

  return taskList;
};

const markCompleted = (index, taskList) => {
  const updatedList = updateTasks(index, taskList);
  return updatedList;
};

export default markCompleted;