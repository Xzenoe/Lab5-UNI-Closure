'use strict';
const array = () => {
  const array = [];
  const current = (x) => array[x];
  current.pop = () => array.pop();
  current.push = (x) => array.push(x);
  return current;
};
module.exports = { array };
