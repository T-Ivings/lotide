const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return console.log(`✔✔✔ Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    return console.log(`✖✖✖ Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKey = function(object, callback) {
  for (let keys of Object.keys(object)) {
  if (callback(object[keys])) {
    return keys;
  }
}
}

assertEqual(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2), "noma")// => "noma"

assertEqual(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 3), "Akaleri")

assertEqual(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 2 },
  "noma":      { stars: 3 },
  "elBulli":   { stars: 4 },
  "Ora":       { stars: 5 },
  "Akelarre":  { stars: 6 }
}, x => x.stars === 4), "Akelarre")