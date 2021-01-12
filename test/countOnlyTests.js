const countOnly = require('../countOnly');
const assert = require('chai').assert;

describe("#countOnly", () => {
  it("should return { Karl: 1, Salima: 2, Agouhanna: 1, Fang: 2, Kavith: 1, Jason: 1, Joe: 1 } for ['Karl', 'Salima','Agouhanna', 'Fang', 'Kavith', 'Jason', 'Salima', 'Fang', 'Joe']", () => {
    assert.deepEqual(countOnly(['Karl', 'Salima','Agouhanna', 'Fang', 'Kavith', 'Jason', 'Salima', 'Fang', 'Joe']), { Karl: 1, Salima: 2, Agouhanna: 1, Fang: 2, Kavith: 1, Jason: 1, Joe: 1 })
  });

  it("should return { Karl: 2, Salima: 1, Agouhanna: 1, Fang: 2, Jimmy: 1, Jason: 1, Joe: 1 } for ['Karl', 'Karl','Agouhanna', 'Fang', 'Jimmy', 'Jason', 'Salima', 'Fang', 'Joe']", () => {
    assert.deepEqual(countOnly(['Karl', 'Karl','Agouhanna', 'Fang', 'Jimmy', 'Jason', 'Salima', 'Fang', 'Joe', 'Joe', "Karl", "Joe"]), { Karl: 3, Salima: 1, Agouhanna: 1, Fang: 2, Jimmy: 1, Jason: 1, Joe: 3 })
  });

  it("should return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14] for [1, [2, 3, 4], 5, 6, 7, [8, 9, 10], 11, 12, 13, 14]", () => {
    assert.deepEqual(countOnly([1, 2, 3, 4, 5, 6, 7, 8, 9, 8, 7, 6, 5, 4, 3, 2, 1]), { 1: 2, 2: 2, 3: 2, 4: 2, 5: 2, 6: 2, 7: 2, 8: 2, 9: 1 })
  });

  it("should return { Karl: 1 } for ['Karl']", () => {
    assert.deepEqual(countOnly(['Karl']), { Karl: 1 })
  });

});