import sum from "../sum";

test("test for sum.js file", () => {
  const x = sum(2, 9);

  expect(x).toBe(11);
});
