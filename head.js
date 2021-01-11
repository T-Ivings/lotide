const assertEqual = require('./assertEqual');


const head = function(array) {
  let head = array[0];
  return head;
};

assertEqual(head([]));
assertEqual(head(["Hello"]), "Hello");
