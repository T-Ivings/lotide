const assertArraysEqual = function (original, comparison) {
  const bool = eqArrays(original, comparison);
  if (bool) {
    return console.log(`✔✔✔ Assertion Passed: ${original} === ${comparison}`);
  } else {
    return console.log(`✖✖✖ Assertion Failed": ${original} !== ${comparison}`);
  }
};

// assert equal function implementation
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

const map = function(arr1, callback) {
 const results = [];
for (let item of arr1){
  results.push(callback(item));
}
 return results;
}

const words = ["ground", "control", "to", "major", "tom"];


// const results1 = map(words, word => word[0]);
// console.log(results1);

const result1 = map(words, word => word.length);
assertArraysEqual(result1, [ 6, 7, 2, 5, 3 ]);

const result2 = map(words, word => word[0]);
assertArraysEqual(result2,[ 'g', 'c', 't', 'm', 't' ]);