const middle = require('../middle');
const assert = require('chai').assert;

describe("#middle", () => {
  it("should return [person] for ['cat', 'dog', 'person', 'television', 'camera']", () => {
    assert.deepEqual(middle(["cat", "dog", "person", "television", "camera"]), ["person"])
  });

  it("should return [3, 4] for [1, 2, 3, 4, 5, 6]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4])
  });

  it("should return [7, 8] for [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]), [7, 8])
  });

});