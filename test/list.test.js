const { fnt, list, listAnd, listOr, FntMeta } = require("../dist/fntstring")

test("list errors with non-array parameters", () => {
  expect(() => {
    list()()
  }).toThrow()
  expect(() => {
    list("foo")({ foo: "test" })
  }).toThrow()
})

test("list properly formats arrays", () => {
  const arr = ["foo", "bar", "baz"]
  expect(list()(arr)).toBe("foo, bar, baz")
  expect(listAnd()(arr)).toBe("foo, bar, and baz")
  expect(listOr()(arr)).toBe("foo, bar, or baz")
})

test("list properly formats arrays with 1 element", () => {
  const arr = ["foo"]
  expect(list()(arr)).toBe("foo")
  expect(listAnd()(arr)).toBe("foo")
  expect(listOr()(arr)).toBe("foo")
})

test("list properly formats arrays with no elements", () => {
  const arr = []
  expect(list()(arr)).toBe("")
  expect(listAnd()(arr)).toBe("")
  expect(listOr()(arr)).toBe("")
})

test("list uses get when a key is passed", () => {
  const context = {
    key: ["foo", "bar", "baz"]
  }

  expect(list("key")(context)).toBe("foo, bar, baz")
  expect(listAnd("key")(context)).toBe("foo, bar, and baz")
  expect(listOr("key")(context)).toBe("foo, bar, or baz")
})