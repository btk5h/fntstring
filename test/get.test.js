const { fnt, get } = require("../dist/fntstring")

test("get evaluates to context[key]", () => {
  expect(get("foo")({ foo: "test" })).toBe("test")
  expect(get(0)(["test"])).toBe("test")
})

test("get evaluates nested properties", () => {
  expect(get("foo.bar")({ foo: { bar: "test" } })).toBe("test")
  expect(get("foo.0")({ foo: ["test"] })).toBe("test")
})

test("get returns context when no key is passed", () => {
  expect(get()("test")).toBe("test")
  expect(get(undefined)("test")).toBe("test")
})

test("get errors when the key does not exist", () => {
  expect(() => {
    get(null)("test")
  }).toThrow()
  expect(() => {
    get("test")("test")
  }).toThrow()
})
