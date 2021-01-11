const assertEqual = require('../assertEqual')
const eqArrays = require('../eqArrays')

let testArray1 = [1, 2, 3, 4, 5, 6];
let testArray2 = [1, 2, 3, 4, 5, 6];
assertEqual(eqArrays(testArray1, testArray2), true);

let testArray3 = [1, 2, 3, 4, 5, 6];
let testArray4 = [1, 2, 3, 4, 5, "6"];
assertEqual(eqArrays(testArray3, testArray4), false);

let testArray5 = ["cat", "dog", "tea", "child"];
let testArray6 = ["person", "man", "woman", "camera", "tv"];
assertEqual(eqArrays(testArray5, testArray6), true);