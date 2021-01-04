const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return console.log(`✔✔✔ Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    return console.log(`✖✖✖ Assertion Failed: ${actual} !== ${expected}`);
  }
};

const tail = function(array) {
  let tail = array.slice(1, array.length);

  return tail;
};

const result = tail([1, 2, 3, 4, 5, 6]);
const result1 = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 5);
assertEqual(result[0], 2);
assertEqual(result1.length, 2);
assertEqual(result1[1], "Labs");