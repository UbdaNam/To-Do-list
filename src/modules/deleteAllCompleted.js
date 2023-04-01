const deleteCompleted = (currentTaskList) => {
  const newList = currentTaskList.filter((task) => task.completed === false);
  return newList;
};

export default deleteCompleted;