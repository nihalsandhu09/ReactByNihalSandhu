import { sum } from "../sum";

// how will you test
test("sum function should calculate the sum of two numbers", () => {
  const result = sum(9, 4);

  //  Assertion (this is important )
  expect(result).toBe(13);
});
