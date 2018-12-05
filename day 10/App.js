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
  todoIndex: number,
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
    todoIndex: 0,

    newList: '',
  };

  toggle = (id) => {
    let newItem = this.state.todoList.map((item) =>
      item.id === id ? {...item, isDone: !item.isDone} : item,
    );
    this.setState({todoList: newItem});
  };
  addValue = (_event) => {
    let newValue = _event.target.value;
    this.setState({newList: newValue});
  };
  addTodo = (_event) => {
    if (this.state.newList.trim() === '') {
      return;
    }
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
  searchTodo = (_event) => {
    this.setState({searchValue: _event.target.value});
  };

  clearInput = () => {
    this.setState({newList: ''});
  };

  render() {
    let {searchValue, newList, todoList} = this.state;
    let filteredList = todoList.filter((item) =>
      item.name.includes(searchValue),
    );
    return (
      <div>
        <input
          value={searchValue}
          placeholder="Search..."
          onChange={this.searchTodo}
        />
        <h1> TODO LIST </h1>
        <ul>
          {filteredList.map((item, index) => this._renderTodo(item, index))}
        </ul>
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

  _renderTodo(item, index) {
    const divStyle = {
      backgroundColor: 'black',
      color: 'white',
    };
    let itemLabel = item.isDone ? <s>{item.name}</s> : item.name;
    let isSelected = index === this.state.todoIndex;
    let style = isSelected ? divStyle : null;
    return (
      <li
        key={item.id}
        style={style}
        isSelected={isSelected}
        onClick={(_event) => this.toggle(item.id)}
      >
        {itemLabel}
      </li>
    );
  }
  componentDidMount() {
    document.addEventListener('keydown', this._onKeyDown);
  }
  componentWillUnmount() {
    document.removeEventListener('keydown', this._onKeyDown);
  }
  _onKeyDown = (event) => {
    let {todoList, todoIndex} = this.state;
    let index = todoIndex;
    let listIndex = todoList.length - 1;
    let newIndex = index;
    if (event.key === 'ArrowUp') {
      newIndex = index === 0 ? index : index - 1;
    }
    if (event.key === 'ArrowDown') {
      newIndex = index === listIndex ? index : index + 1;
    }
    if (newIndex !== index) {
      this.setState({todoIndex: newIndex});
    }
    if (event.key === ' ' && document.activeElement === document.body) {
      let selectedList = todoList[index];
      this.toggle(selectedList.id);
    }
  };
}

export default App;
