const flatten = require('../flatten');
const assert = require('chai').assert;

describe("#flatten", () => {
  it("should return ['cat', 'dog', 'person', 'television', 'camera'] for ['cat', 'dog', ['person', 'television'], 'camera']", () => {
    assert.deepEqual(flatten(["cat", "dog", ["person", "television"], "camera"]), ['cat', 'dog', 'person', 'television', 'camera'])
  });

  it("should return [1, 2, 3, 4, 5, 6] for [1, 2, [3, 4, 5, 6]]", () => {
    assert.deepEqual(flatten([1, 2, [3, 4, 5, 6]]), [1, 2, 3, 4, 5, 6])
  });

  it("should return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14] for [1, [2, 3, 4], 5, 6, 7, [8, 9, 10], 11, 12, 13, 14]", () => {
    assert.deepEqual(flatten([1, [2, 3, 4], 5, 6, 7, [8, 9, 10], 11, 12, 13, 14]), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14])
  });

  it("should return [1, 2, 3, 4] for [1, [2, 3], 4]", () => {
    assert.deepEqual(flatten([1, [2, 3], 4]), [1, 2, 3, 4])
  });

});