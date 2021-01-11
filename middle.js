const middle = function(array) {
  let middleOfArray = [];
 
    if (array.length % 2 === 0) {
      middleOfArray[0] = array.length / 2
      middleOfArray[1] = middleOfArray[0] + 1
    } else {
      middleOfArray[0] = array[Math.floor(array.length / 2)]  
    }
   return middleOfArray;
}


 module.exports = middle;