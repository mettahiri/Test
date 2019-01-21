//Do not change this file
module.exports = {
  doubleMe: (x, callback) => {
    setTimeout(() => {
      callback(x * 2);
    }, Math.random() * 1000);
  },
  divideMe: (x, callback) => {
    setTimeout(() => {
      callback(x / 2);
    }, Math.random() * 1000);
  }
};