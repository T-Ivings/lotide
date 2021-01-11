const assertArraysEqual = require('./assertArraysEqual');
const eqArrays = require('./eqArrays');


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


 module.exports = middle;