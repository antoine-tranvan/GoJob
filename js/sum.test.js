const sum = require("./sum");

test("Properly add two numbers", () => {
  expect(sum(1, 3)).toBe(4);
});
