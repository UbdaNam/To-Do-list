const renderList = (item, ulEle) => {
  const li = document.createElement('li');
  li.setAttribute('id', `id${item.index}`);
  li.innerHTML = `
    <div class="list-main">
      <input type="checkbox" ${item.completed === true ? 'checked' : ''} name="check" id="checkInput">
      <h4 class=${item.completed === true ? 'cross-text' : ''}>${item.description}</h4>
    </div>
    <button class="menuBtn" data-index=${item.index}>
    <span class="material-symbols-outlined">
      more_vert
    </span>
    </button>
    `;
  ulEle.appendChild(li);

  return li;
};

export default renderList;