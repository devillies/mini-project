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
    let eventId = {eventName, eventListener};
    return eventId;
  }
  emit(eventName) {
    let eventList = this.events.get(eventName);
    if (eventList) {
      for (let eventHandler of eventList) {
        eventHandler();
      }
    }
  }
  removeListener(id) {
    let {eventName, eventListener} = id;
    let eventList = this.events.get(eventName);
    if (eventList) {
      eventList.delete(eventListener);
    }
  }
}

export default EventEmitter;
