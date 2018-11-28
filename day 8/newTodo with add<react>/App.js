// @flow
import React from 'react';
import setState from './main';
function Todo(props: Object) {
  let {item, toggle} = props;
  let itemLabel = item.isDone ? <s>{item.name}</s> : item.name;
  return (
    <li key={item.id} onClick={toggle}>
      {itemLabel}
    </li>
  );
}

function App(props: Object) {
  let {state} = props;
  let {todoList, newList} = state;
  //to change the isDone
  let toggle = (id) => {
    setState({
      ...state,
      todoList: todoList.map((item) => ({
        ...item,
        isDone: id === item.id ? !item.isDone : item.isDone,
      })),
    });
  };
  //take value from input and inject it to {newList}
  let addValue = (evt) => {
    setState({...state, newList: evt.target.value});
  };
  //input new value for the {todoList}
  let addTodo = () => {
    let newValue = {
      id: Math.random().toString(),
      name: newList,
      isDone: false,
    };
    let newTodoList = [...todoList, newValue];
    setState({...state, todoList: newTodoList, newList: ''});
  };

  return (
    <div>
      <ul>
        {todoList.map((item) => (
          <Todo key={item.id} item={item} toggle={() => toggle(item.id)} />
        ))}
      </ul>
      <input value={newList} type="text" onChange={(evt) => addValue(evt)} />
      <button onClick={addTodo}>Save</button>
    </div>
  );
}

export default App;
