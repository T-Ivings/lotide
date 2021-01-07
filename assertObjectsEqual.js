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

const assertObjectsEqual = function(actual, expected) {
  const bool = (eqObjects(actual, expected))
  const inspect = require('util').inspect;
  if (bool) {
    return console.log(`✔✔✔ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`)
  } else {
    return console.log(`✖✖✖ Assertion Failed": ${inspect(actual)} !== ${inspect(expected)}`)
  }
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
const cd = { c: "1", d: ["2", 3] };
const cd2 = { c: "1", d: ["2", 3, 4] };

assertObjectsEqual(ab, ba); 
assertObjectsEqual(cd, cd2); 
