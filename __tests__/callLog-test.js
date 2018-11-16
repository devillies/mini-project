import createCallLog from '../callLog';
it('should return a call', () => {
  let callLog = createCallLog();
  callLog.add('INCOMING', '085333516751');
  let recentCall = callLog.getRecentCall();
  expect(recentCall).toBeInstanceOf(Array);
  expect(recentCall.length).toEqual(1);

  let recentFilter = recentCall.map((call) => {
    let {type, phoneNumber} = call;
    return {type, phoneNumber};
  });
  expect(recentFilter).toEqual([
    {
      type: 'INCOMING',
      phoneNumber: '085333516751',
    },
  ]);
});
