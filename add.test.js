const sum = require("./add");

test("Properly adds two numbers", () => {
  expect(sum(3, 8)).toBe(12);
});
