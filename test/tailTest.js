const tail = require("../tail")
const assert = require('chai').assert;

describe("#tail", () => {
  it("should return [Lighthouse, Labs] for ['Hello', 'Lighthouse', Labs']", () => {
    assert.deepEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"])
  });

  it("should return [2, 3, 4, 5, 6] for [1, 2, 3, 4, 5, 6]", () => {
    assert.deepEqual(tail([1, 2, 3, 4, 5, 6]), [2, 3, 4, 5, 6])
  });


});