function createCallLog() {
  let callLog = [];
  return {
    add: (type, phoneNumber) => {
      callLog.push({type, phoneNumber});
    },

    getRecentCall: (recentCall) => {
      return callLog.slice(0, recentCall);
    },
  };
}
let output = createCallLog();
output.add('incoming call', '085333516751');
console.log(output.getRecentCall());
