let eventHandlers = {
  crossList: (oldState, id) => {
    // console.log('oldState : ', oldState);
    // let arrNewState = [];
    // for (let todo of oldState.todoList) {
    let newState = oldState.todoList.map((item) => {
      if (item.id === id) {
        // see if the id of the item is the same as the id which was clicked
        return {...item, isDone: !item.isDone};
      } else {
        return item;
      }
    });
    //handle update oldState
    return {...oldState, todoList: newState};
  },
  addValue: (oldState, text) => {
    // add input value in newList
    return {...oldState, newList: String(text)};
  },
  addTodo: (oldState) => {
    //add the value to todoList
    let newList = {
      id: Math.random().toString(),
      name: oldState.newList,
      isDone: false,
    };
    let newTodoList = [...oldState.todoList, newList];
    return {...oldState, todoList: newTodoList, newList: ''};
  },
};
export default eventHandlers;
