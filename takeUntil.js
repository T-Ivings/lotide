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

const takeUntil = function(array, callback) {
  let results = [];
  for (const element of array){
    if(!callback(element)){
     results.push(element)
    } else if (callback(element)){
      return results;
    }
  }
}


const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
assertArraysEqual(results1, [1, 2, 5, 7, 2])

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
assertArraysEqual(results2, [1, 2, 5, 7, 2]);
assertArraysEqual(results2, ["I've", "been", "to", "Hollywood", ","])
assertArraysEqual(results2, ["I've", "been", "to", "Hollywood"]);