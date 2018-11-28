//@flow
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

let state = {
  todoList: [
    {id: '1', name: 'buy oreos', isDone: false},
    {id: '2', name: 'buy cheetos ', isDone: false},
    {id: '3', name: 'buy soap', isDone: false},
  ],
  newList: '',
};
//set new state
export default function setState(newState) {
  state = newState;
  render();
}

let app = document.getElementById('app'); //DIV id
//render the state
function render() {
  if (app) {
    ReactDOM.render(<App state={state} />, app); //pass state to APP and render it to a Div
  }
}
render();
