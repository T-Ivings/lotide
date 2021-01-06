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


const middle = function(array) {
  let middleOfArray = [];
  for(let x = 0; x < array.length; x++){
    if (x === array.length / 2) {
      middleOfArray[0] = array[x]
      middleOfArray[1] = array[(x + 1)]
    } else { if (array.length % 2 !== 0){
      middleOfArray[0] = array[Math.floor(array.length / 2)] 
    }
    }
  } return middleOfArray;
}


//-----------Test--------------
const testArray = [1, 2, 3, 4, 5, 6]
const testArray1 = [1, 2, 3, 4, 5, 6]
assertArraysEqual(middle(testArray), middle(testArray1));


// const testArray2 = [1, 2, 3, 4]
// console.log(middle(testArray2))
// const testArray3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
// console.log(middle(testArray3))
// const testArray4 = ["dog", "cat", "person", "camera", "television"]
// console.log(middle(testArray4))