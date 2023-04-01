const updateTasks = (index, taskList) => {
  taskList.forEach((item) => {
    if (item.index === index) {
      item.completed = !item.completed;
    }
  });

  return taskList;
};

const markCompleted = (index, taskList) => {
  const updatedList = updateTasks(index, taskList);
  return updatedList;
};

export default markCompleted;