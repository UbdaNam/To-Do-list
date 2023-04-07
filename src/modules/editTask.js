const editTask = (listEle) => {
  const description = listEle.querySelector('.list-main h4');
  const editIcon = listEle.querySelector('.menuBtn .material-symbols-outlined');
  listEle.classList.add('bgLightYello');
  listEle.querySelector('.menuBtn').classList.add('bgLightYello');
  description.setAttribute('contentEditable', '');
  description.focus();
  editIcon.classList.add('delete');
  editIcon.innerText = 'delete';
  const returnBtn = {
    deleteIcon: editIcon,
    descriptionEle: description,
  };
  return returnBtn;
};

const updateTask = (tasks, index, description) => {
  tasks.forEach((task) => {
    if (task.index === index) {
      task.description = description;
    }
  });
  return tasks;
};

export { editTask, updateTask };