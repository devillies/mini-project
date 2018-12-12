//@flow
import React, {Component} from 'react';

type Todo = {
  id: string;
  list: string;
  isDone: boolean;
};
type State = {
  todoList: Array<Todo>;
  newInput: string;
};

let todoList = [
  {id: '1', list: 'make a program', isDone: false},
  {id: '2', list: 'meet Domi', isDone: false},
  {id: '3', list: 'learn promises', isDone: false},
];
class App extends Component<{}, State> {
  state: State = {
    todoList,
    newInput: '',
  };
  render() {
    let {todoList, newInput} = this.state;
    return (
      <div>
        <h1>Todo List</h1>
        <div>
          <ul>
            {todoList.map((content) =>
              content.isDone ? null : this._renderTodo(content),
            )}
          </ul>
          <input
            value={newInput}
            onChange={(_event) => this._newInput(_event)}
          />
          <button
            value={newInput}
            onClick={(event) => this._addValue(newInput)}
          >
            Save
          </button>
        </div>
        <div>
          <h1>Selected List</h1>
          {todoList ? (
            <ul>
              <s>
                {todoList.map((todo) =>
                  todo.isDone ? this._renderTodo(todo) : null,
                )}
              </s>
            </ul>
          ) : null}
        </div>
      </div>
    );
  }
  _addValue = (input: string) => {
    let newTodo = {
      id: Math.random().toString(),
      list: input,
      isDone: false,
    };
    let newTodoList = [...this.state.todoList, newTodo];
    this.setState({todoList: newTodoList, newInput: ' '});
  };
  _newInput = (_event: SyntheticInputEvent<HTMLInputElement>) => {
    let newValue = _event.target.value;
    this.setState({newInput: newValue});
  };
  _onClickTodo = (id: string) => {
    let {todoList} = this.state;
    let updateTodoList = todoList.map((item) =>
      id === item.id ? {...item, isDone: !item.isDone} : item,
    );
    this.setState({todoList: updateTodoList});
  };

  _renderTodo(content: Object) {
    return (
      <li key={content.id} onClick={(_event) => this._onClickTodo(content.id)}>
        {content.list}
      </li>
    );
  }
}

export default App;
