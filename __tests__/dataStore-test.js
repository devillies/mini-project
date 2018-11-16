// @flow
import DataStore from '../dataStore';
it('should add data', () => {
  let dataStore = new DataStore();
  dataStore.set('orange', 1000);
  expect(dataStore.get('orange')).toEqual(1000);
});
it('should loop data', () => {
  let dataStore = new DataStore();
  dataStore.set('orange', 1000);
  dataStore.set('apple', 2000);
  let mockFunction = jest.fn();
  dataStore.forEach(mockFunction);
  expect(mockFunction.mock.calls.length).toEqual(2);
  expect(mockFunction.mock.calls[0]).toEqual(['orange', 1000]);
});
