const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return console.log(`✔✔✔ Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    return console.log(`✖✖✖ Assertion Failed: ${actual} !== ${expected}`);
  }
};



module.exports = assertEqual;