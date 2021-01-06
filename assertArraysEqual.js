const assertArraysEqual = function (original, comparison) {
  const bool = eqArrays(original, comparison);
  if (bool) {
    return console.log(`✔✔✔ Assertion Passed: ${original} === ${comparison}`);
  } else {
    return console.log(`✖✖✖ Assertion Failed": ${original} !== ${comparison}`);
  }
};

// assert equal function implementation
const eqArrays = function(original, comparison) {
  let isTrue = true;

  for (let x = 0; x < original.length; x++) {
    if (original[x] !== comparison[x]) {
      isTrue = false;
      return isTrue;
    }
  }
  return isTrue;
};