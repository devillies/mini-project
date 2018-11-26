// @flow
import React, {createElement} from 'react';
import {render} from 'react-dom';
function Todo(props: Object) {
  let {item, todoList} = props;
  console.log('item.isDone : ', item);
  let itemLabel = item.isDone === true ? <del>{item.name}</del> : item.name;
  return (
    <li
      onClick={() => {
        //TODO:// ngubah todoList isDone
        let newTodolist = todoList.map((todoItem) => {
          if (todoItem.id === item.id) {
            return {...item, isDone: !item.isDone};
          }
          return todoItem;
        });
        render(createElement(App, {todoList: newTodolist}), document.body);
      }}
    >
      {itemLabel}
    </li>
  );
}

function App(props: Object) {
  let {todoList} = props;
  return <ul> {todoList.map((item) => Todo({item, todoList}))}</ul>;
}

export default App;
