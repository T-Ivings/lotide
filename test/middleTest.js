const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle');



//-----------Test--------------
const testArray = [1, 2, 3, 4, 5, 6]
const testArray1 = [1, 2, 3, 4, 5, 6]
assertArraysEqual(middle(testArray), middle(testArray1));


 const testArray2 = [1, 2, 3, 4]
 const testArray3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
 assertArraysEqual(middle(testArray2), middle(testArray3))

 const testArray4 = ["cat", "dog", "person", "television", "camera"]
 const testArray5 = ["dog", "cat", "person", "camera", "television"]
 assertArraysEqual(middle(testArray4), middle(testArray5))
