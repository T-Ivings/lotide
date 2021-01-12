const eqArrays = require("./eqArrays")
// const assertEqual = function(actual, expected) {
//   if (actual === expected) {
//     return console.log(`✔✔✔ Assertion Passed: ${actual} === ${expected}`);
//   } else if (actual !== expected) {
//     return console.log(`✖✖✖ Assertion Failed: ${actual} !== ${expected}`);
//   }
// };

// const eqArrays = (original, comparison) => {
//   if (original.length !== comparison.length) {
//     return false;
//   }
//   for (let x = 0; x < original.length; x++) {
//     if (original[x] !== comparison[x]) {
//       return false;
//     }
//   }
//   return true;

// }

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

module.exports = eqObjects;

