const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return console.log(`✔✔✔ Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    return console.log(`✖✖✖ Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function(original, comparison) {
  for (let x = 0; x < original.length; x++) {
    if (original[x] !== comparison[x]) {
      return false;
    } else {
      if ((x + 1) >= original.length) {
        return true;
      }
    }
  }
};

//[----------------Testing examples----------------]

let testArray1 = [1, 2, 3, 4, 5, 6];
let testArray2 = [1, 2, 3, 4, 5, 6];
assertEqual(eqArrays(testArray1, testArray2), true);

let testArray3 = [1, 2, 3, 4, 5, 6];
let testArray4 = [1, 2, 3, 4, 5, "6"];
assertEqual(eqArrays(testArray3, testArray4), false);

let testArray5 = ["cat", "dog", "tea", "child"];
let testArray6 = ["person", "man", "woman", "camera", "tv"];
assertEqual(eqArrays(testArray5, testArray6), true);