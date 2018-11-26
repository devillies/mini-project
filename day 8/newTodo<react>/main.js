import {createElement} from 'react';
import {render} from 'react-dom';
import App from './App';
let todoList = [
  {id: '1', name: 'buy oreos', isDone: false},
  {id: '2', name: 'buy cheetos ', isDone: true},
  {id: '3', name: 'buy soap', isDone: false},
];
render(createElement(App, {todoList}), document.body);
