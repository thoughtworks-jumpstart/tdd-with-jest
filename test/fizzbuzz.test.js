const fizzbuzz = require("../src/fizzbuzz");

test("1 should return number 1", function() {
  expect(fizzbuzz(1)).toEqual(1);
});

test.skip("3 should return fizz", function() {
  expect(fizzbuzz(3)).toEqual("fizz");
});
