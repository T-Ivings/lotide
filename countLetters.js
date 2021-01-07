const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return console.log(`✔✔✔ Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    return console.log(`✖✖✖ Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(string) {
  const lettersCounted = {}
  for (const letters of string.split(" ").join("")) {
      if(lettersCounted[letters]) {
        lettersCounted[letters] += 1;
      } else {
        lettersCounted[letters] = 1;
      }
    }
  return lettersCounted;
}

const result1 = countLetters("lighthouse in the house")


assertEqual(result1["n"], 1);
assertEqual(result1["h"], 4);
assertEqual(result1["t"], 2);
assertEqual(result1["w"], undefined);

console.log(result1)