// @flow
// import EventEmitter from 'events';

// let emitter = new EventEmitter();

// emitter.addListener('click_this', () => {
//   console.log('i am complete');
// });

// emitter.emit('click_this');
class EventEmitter {
  events = new Map();
  addListener(eventName, eventListener) {
    let eventList = this.events.get(eventName);
    if (eventList == null) {
      eventList = new Set();
      this.events.set(eventName, eventList);
    }
    eventList.add(eventListener);
    return {
      removeid: '123',
    };
  }
  emit(eventName) {
    let eventList = this.events.get(eventName);
    if (eventList) {
      for (let eventHandler of eventList) {
        eventHandler();
      }
    }
  }
  removeListener(eventName, id) {
    let eventList = this.events.get(eventName);
    if (eventList) {
      if (id === '123') {
        eventList.delete(eventListener);
      }
    }
  }
}

export default EventEmitter;
