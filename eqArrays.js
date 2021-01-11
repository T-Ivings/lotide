const assertEqual = require('./assertEqual')

const eqArrays = (original, comparison) => {
  if (original.length !== comparison.length) {
    return false;
  }
  for (let x = 0; x < original.length; x++) {
    if (original[x] !== comparison[x]) {
      return false;
    }
  }
  return true;

}

module.exports = eqArrays;