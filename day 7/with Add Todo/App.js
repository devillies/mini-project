// @flow

function renderTodo(item, id) {
  // console.log('item : ', item);
  if (item.isDone) {
    return `<li id={item.id} onClick="emitEvent('crossList', '${id}')"><s>${
      item.name
    }</s></li>`;
  }
  return `<li onClick="emitEvent('crossList', '${id}')">${item.name}</li>`;
}

function renderApp(state) {
  return `<ul> ${state.todoList
    .map((item) => renderTodo(item, item.id))
    .join('')}</ul> <p> input new value</p>
  <input value="${
    state.newList
  }" type="text" onInput="emitEvent('addValue',this.value)"></input>
  <button onClick="emitEvent('addTodo')">save</button>`;
  //take the value of input and add it to the function
  //add the value everytime the button is clicked
}

export default renderApp;
