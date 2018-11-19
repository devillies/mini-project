let eventHandlers = {
  crossList: (oldState) => {
    console.log('clicked');
   let eventHandlers = {
  crossList: (oldState, id) => {
    console.log('oldState : ', oldState);
    let arrNewState = [];
    for (let todo of oldState.todoList) {
      if (todo.id === id) {
        arrNewState.push({...todo, isDone: !todo.isDone});
      } else {
        arrNewState.push({...todo});
      }
    }
    //handle update oldState
    return {todoList: arrNewState};
  },
};
export default eventHandlers;
