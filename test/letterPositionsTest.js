const letterPositions = require('../letterPositions');
const assert = require('chai').assert;

describe("#letterPositions", () => {
  it("should return  for 'This is a test '", () => {
    assert.deepEqual(letterPositions("This is a test "), { T: [ 0 ], h: [ 1 ], i: [ 2, 5 ], s: [ 3, 6, 12 ], ' ': [ 4, 7, 9, 14 ], a: [ 8 ], t: [ 10, 13 ], e: [ 11 ] })
  });

  it("should return  for 'I only feel like doing 3 console.logs'", () => {
    assert.deepEqual(letterPositions("I only feel like doing 3 console.logs"), { '3': [ 23 ], I: [ 0 ], ' ': [ 1, 6, 11, 16, 22, 24 ], o: [ 2, 18, 26, 29, 34 ], n: [ 3, 20, 27 ],
    l: [ 4, 10, 12, 30, 33 ], y: [ 5 ], f: [ 7 ], e: [ 8, 9, 15, 31 ], i: [ 13, 19 ], k: [ 14 ], d: [ 17 ], g: [ 21, 35 ], c: [ 25 ], s: [ 28, 36 ], '.': [ 32 ] })
  });

});