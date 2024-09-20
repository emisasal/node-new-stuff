import sumFunc from "../sumFunc"

describe("sumFunc", () => {
  test("should return the sum of two numbers", () => {
    expect(sumFunc(2, 3)).toBe(5)
    expect(sumFunc(-1, 5)).toBe(4)
    expect(sumFunc(0, 0)).toBe(0)
  })
})
