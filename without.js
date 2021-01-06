
const without = function(source, toBeRemoved) {
  let newArray = [];
  loop1: for (let x = 0; x < source.length; x++) {
    for (let y = 0; y < toBeRemoved.length; y++) {
      if (source[x] === toBeRemoved[y]) {
        continue loop1;
      }
    }
    
    newArray.push(source[x]);
  }

  return newArray;
};


//[----------------Testing examples----------------]
let testArray1 = [1, 2, 3, 4, 5, 6];
let testArray2 = [1, 2, 3];
console.log(without(testArray1, testArray2));

let testArray3 = [1, 2, 3, 4, 5, 6];
let testArray4 = [1, 2, 3, 4, 5, "6"];
console.log(without(testArray3, testArray4));

let testArray5 = ["cat", "dog", "person", "tv", "canon"];
let testArray6 = ["person", "man", "woman", "camera", "tv"];
console.log(without(testArray5, testArray6));

console.log(without([1, 2, 3], [1]));// => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"])); // => ["1", "2"]
const words = ["hello", "world", "lighthouse"];
console.log(without(words, ["lighthouse"]));