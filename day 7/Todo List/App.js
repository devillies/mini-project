// @flow

function renderTodo(item, id) {
  console.log('item : ', item);
  if (item.isDone) {
    return `<li id={item.id} onClick="emitEvent('crossList', '${id}')"><s>${
      item.name
    }</s></li>`;
  }
  return `<li onClick="emitEvent('crossList', '${id}')">${item.name}</li>`;
}

function renderApp(state: Array<Object>) {
  let list = state.todoList.map((item) => renderTodo(item, item.id)).join('');
  return `<ul> ${list}</ul>`;
}

export default renderApp;
