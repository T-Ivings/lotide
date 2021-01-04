const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return console.log(`✔✔✔ Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    return console.log(`✖✖✖ Assertion Failed: ${actual} !== ${expected}`);
  }
};

const head = function(array){
let head = array[0]
  return head
}

assertEqual(head([]), );
assertEqual(head(["Hello"]), "Hello");
