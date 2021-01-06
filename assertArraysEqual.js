const eqArrays = function(original, comparison) {
  for (let x = 0; x < original.length; x++) {
    if (original[x] !== comparison[x]) {
      return console.log("✖✖✖ Assertion Failed");
    } else {
      if ((x + 1) >= original.length) {
        return console.log("✔✔✔ Assertion Passed");
      }
    }
  }
};
