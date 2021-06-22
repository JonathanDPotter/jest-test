const myFunctions = require("./app");

test("adds 1 + 2 to equal 3", () => {
  expect(myFunctions.sum(1, 2)).toBe(3);
});

test("capitalize 'test'", () => {
  expect(myFunctions.capitalize("test")).toBe("Test");
});

test("reverse 'string'", () => {
  expect(myFunctions.reverse("string")).toBe("gnirts");
});

test("calculator", () => {
  expect(myFunctions.calculator.add(1, 2)).toBe(3);
  expect(myFunctions.calculator.subtract(2, 1)).toBe(1);
  expect(myFunctions.calculator.multiply(2, 2)).toBe(4);
  expect(myFunctions.calculator.divide(4, 2)).toBe(2);
})

test("caesar cipher", () => {
  expect(
    myFunctions.cipher("The quick, red fox jumped over the lazy, brown dog.")
  ).toBe("Wkh txlfn, uhg ira mxpshg ryhu wkh odcb, eurzq grj.");
})