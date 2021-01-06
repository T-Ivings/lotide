const testArray1 = [1, 2, [3, 4], 5, [6]];

const arrayCheck = function(array) {
  let newArray = [];
  for (let x = 0; x < array.length; x++) {
    newArray[x] = array[x]
    if(Array.isArray(array[x])) {
      for (let i = 0; i < array[x].length; i++){
        newArray[x] = array[x][i]
      } 
    } else { 
      newArray[x] = array[x] 
    }
  } return newArray;
}

console.log(arrayCheck(testArray1));