const eqObjects = require('../eqObjects');
const assert = require('chai').assert;

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };

const abc = { a: "1", b: "2", c: "3" };

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };

const cd2 = { c: "1", d: ["2", 3, 4] };

describe("#eqObjects", () => {
  it("should return true for ab === ba", () => {
    assert.deepEqual(eqObjects(ab, ba), true) 
  });
   it("should return true for cd === dc", () => {
    assert.deepEqual(eqObjects(cd, dc), true)
  });
  ;
  it("should return false for cd2 === abc", () => {
    assert.deepEqual(eqObjects(cd2, abc), false)
  });

 
});