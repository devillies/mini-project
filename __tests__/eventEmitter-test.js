import EventEmitter from '../EventEmitter';
it('should add and execute listener', () => {
  let emitter = new EventEmitter();
  let counter = 0;
  emitter.addListener('click_me', () => {
    counter += 1;
  });
  emitter.addListener('click_me', () => {
    counter += 1;
  });
  emitter.emit('click_me');
  expect(counter).toEqual(2);
});

it('should do nothing for non-existant event', () => {
  let emitter = new EventEmitter();
  let counter = 0;
  emitter.addListener('click_me', () => {
    counter += 1;
  });
  emitter.emit('asdf');
  expect(counter).toEqual(0);
});
it('should remove listener by id ', () => {
  let emitter = new EventEmitter();
  let counter = 0;
  let id = emitter.addListener('click_me', () => {
    counter += 1;
  });

  emitter.removeListener(id);
  emitter.emit('click_me');
  expect(counter).toEqual(0);
});
