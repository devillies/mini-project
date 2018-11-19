import renderApp from './App';
import eventHandlers from './eventHandlers';
import initialState from './initialState';
let state = initialState;

global.emitEvent = (eventName, params) => {
  let eventHandler = eventHandlers[eventName];
  if (eventHandler) {
    state = eventHandler(state, params);
    render();
  }
};

function render() {
  let html = renderApp(state);
  if (document.body) {
    document.body.innerHTML = html;
  }
}
render();
