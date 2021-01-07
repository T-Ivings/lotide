const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return console.log(`✔✔✔ Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    return console.log(`✖✖✖ Assertion Failed: ${actual} !== ${expected}`);
  }
};

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

const eqObjects = function(object1, object2) {
  let keys = Object.keys(object1)

  if(Object.keys(object1).length !== Object.keys(object2).length){
    return false;
  } else {
    for(const cycle in keys) {
      if (Array.isArray(object1[keys[cycle]]) && Array.isArray(object2[keys[cycle]])) {
        if(eqArrays(object1[keys[cycle]], object2[keys[cycle]])) {
          return true;
        } else {
          return false;
        }
      } else {
        if(object1[keys[cycle]] !== object2[keys[cycle]]){
          return false;
        }
      }
    }
  } return true;
}

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual(eqObjects(ab, ba), true); // => true

const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc), false); // => false

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false); // => false

