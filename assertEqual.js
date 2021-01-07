const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return console.log(`✔✔✔ Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    return console.log(`✖✖✖ Assertion Failed: ${actual} !== ${expected}`);
  }
};

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual("Bootcamp", "Bootcamp");
assertEqual(1.1, 5);
assertEqual(5, 5);
assertEqual(1.1, 5);
assertEqual(5, 5);



const testObject = {
name: "Taylor",
type: 12
}
const otherTestObject = {
  name: 13,
  type: "Taylor"
}

const somethingElse = {
  name: "Taylor",
  type: 12
}
assertEqual(testObject, testObject); //will not wo
assertEqual(testObject, otherTestObject);
assertEqual(testObject, somethingElse);
assertEqual(testObject.name, somethingElse.name);