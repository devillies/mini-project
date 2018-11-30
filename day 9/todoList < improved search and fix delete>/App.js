// @flow
import React, {Component} from 'react';

type Todo = {
  id: string,
  name: string,
  isDone: boolean,
};

type State = {
  todoList: Array<Todo>,
  searchValue: string,
  newList: string,
};

class App extends Component<State> {
  state = {
    todoList: [
      {id: '1', name: 'buy oreos', isDone: false},
      {id: '2', name: 'buy cheetos ', isDone: false},
      {id: '3', name: 'buy soap', isDone: false},
    ],
    searchValue: '',

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
    this.setState({
      todoList: newTodoList,
      newList: '',
    });
  };
  rmTodo = (_event) => {
    this.setState({
      todoList: this.state.todoList.filter((item) =>
        item.isDone === true ? item === _event.target.value : item,
      ),
    });
  };

  clearInput = () => {
    this.setState({newList: ''});
  };
  render() {
    let {searchValue, newList, todoList} = this.state;
    let searchTodo = (event) => {
      this.setState({searchValue: event.target.value});
    };
    let filteredList = todoList.filter((item) =>
      item.name.includes(searchValue),
    );
    return (
      <div>
        <input
          value={searchValue}
          placeholder="Search..."
          onChange={searchTodo}
        />
        <h1> TODO LIST </h1>
        <ul>{filteredList.map((item) => this._renderTodo(item))}</ul>
        <input value={newList} type="text" onChange={this.addValue} />
        <button onClick={this.clearInput}>Clear</button>
        <div>
          <button onClick={this.addTodo}> Save</button>
          <button onClick={this.rmTodo}>Delete</button>
          <p>Hint: use the "Delete"button to delete crossed list! </p>
        </div>
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
