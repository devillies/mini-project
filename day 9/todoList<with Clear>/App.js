// @flow
import React, {Component} from 'react';
class App extends Component {
  state = {
    todoList: [
      {id: '1', name: 'buy oreos', isDone: false},
      {id: '2', name: 'buy cheetos ', isDone: false},
      {id: '3', name: 'buy soap', isDone: false},
    ],
    newList: '',
  };

  toggle = (id) => {
    let newItem = this.state.todoList.map((item) =>
      item.id === id ? {...item, isDone: !item.isDone} : item,
    );
    this.setState({todoList: newItem});
  };
  addValue = (evt) => {
    let newValue = evt.target.value;
    this.setState({newList: newValue});
  };
  addTodo = (_event) => {
    let newTodo = {
      id: Math.random().toString(),
      name: this.state.newList,
      isDone: false,
    };
    let newTodoList = [...this.state.todoList, newTodo];
    this.setState({todoList: newTodoList, newList: ''});
  };
  rmTodo = (_event) => {
    this.setState({
      todoList: this.state.todoList.filter((item) =>
        item.isDone === true ? item === _event.target.value : item,
      ),
    });
  };
  render() {
    let {todoList} = this.state;
    return (
      <div>
        <h1> TODO LIST </h1>
        <ul>{todoList.map((item) => this._renderTodo(item))}</ul>
        <input
          value={this.state.newList}
          type="text"
          onChange={this.addValue}
        />
        <button onClick={this.addTodo}> Save</button>
        <button onClick={this.rmTodo}>Clear</button>
      </div>
    );
  }

  _renderTodo(item) {
    let itemLabel = item.isDone ? <s>{item.name}</s> : item.name;
    return (
      <li key={item.id} onClick={(_event) => this.toggle(item.id)}>
        {itemLabel}
      </li>
    );
  }
}

export default App;
