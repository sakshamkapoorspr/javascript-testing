const clone = require("./cloneArray");

test("Properly clones an array", () => {
  const array = [1, 2, 3];
  expect(clone(array)).toEqual(array);
  expect(clone(array)).not.toBe(array);
});
