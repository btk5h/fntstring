const { pipe } = require("fntstring")

test("pipe executes functions sequentially", () => {
  const fn1 = jest.fn()
  const fn2 = jest.fn()

  fn1.mockReturnValue("fn1 output")
  fn2.mockReturnValue("fn2 output")

  expect(pipe(fn1, fn2)("initial context")).toBe("fn2 output")
  expect(fn1).toBeCalledTimes(1);
  expect(fn1).toBeCalledWith("initial context");
  expect(fn2).toBeCalledTimes(1);
  expect(fn2).toBeCalledWith("fn1 output");
})