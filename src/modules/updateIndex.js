const updateIndex = (currentList) => {
  currentList.forEach((task, index) => task.index = index + 1);

  return currentList;
};

export default updateIndex;