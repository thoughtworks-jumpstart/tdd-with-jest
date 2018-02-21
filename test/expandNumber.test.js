const expandNumber = require("../src/expandNumber");

test.skip('12 should be returned as "10 + 2"', function() {
  expect(expandNumber(12)).toBe("10 + 2");
});

// write your own tests!
