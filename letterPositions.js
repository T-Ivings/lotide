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

const letterPositions = function(sentence) {
  const results = {};
  let counter = 0
  
  for(const letters of sentence){
    let array = [counter]
    if(!results[letters]){
      results[letters] = array
      counter++
    } else {
      results[letters].push(counter)
      counter++
    }
  }
 
  return results;
};

const test = "hello"
assertArraysEqual(letterPositions("hello").e, [1]);
