const tail = require("../tail")
const assertEqual = require('../assertEqual');

const result = tail([1, 2, 3, 4, 5, 6]);
const result1 = tail(["Hello", "Lighthouse", "Labs"]);

assertEqual(result.length, 5);
assertEqual(result[0], 2);
assertEqual(result1.length, 2);
assertEqual(result1[1], "Labs");