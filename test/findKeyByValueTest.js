const findKeyByValue = require('../findKeyByValue');
const assert = require('chai').assert;

const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

describe("#findKeyByValue", () => {
  it("should return undefined for 'Good Mythical Morning'", () => {
    assert.deepEqual(findKeyByValue(bestTVShowsByGenre, "Good Mythical Morning"), )
  });
   it("should return 'Brooklyn Nine-Nine' for bestTVShowsByGenre.comedy", () => {
    assert.deepEqual(findKeyByValue(bestTVShowsByGenre, "Brooklyn Nine-Nine"), "comedy")
  });
  ;
  it("should return 'The Expanse' for bestTVShowsByGenre.sci_fi", () => {
    assert.deepEqual(findKeyByValue(bestTVShowsByGenre, "The Expanse"), "sci_fi")
  });

 
});