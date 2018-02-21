const fizzbuzz = require("../src/fizzbuzz");

test("1 should return number 1", function() {
  expect(fizzbuzz(1)).toBe(1);
});

test.skip("3 should return fizz", function() {
  expect(fizzbuzz(3)).toBe("fizz");
});

test.skip("5 should return buzz", function() {
  expect(fizzbuzz(5)).toBe("buzz");
});

test.skip("15 should return fizzbuzz", function() {
  expect(fizzbuzz(15)).toBe("fizzbuzz");
});

test.skip("16 should return 16", function() {
  expect(fizzbuzz(16)).toBe(16);
});
