const { fnt, get } = require("../dist/fntstring")

test("get evaluates to context[key]", () => {
  expect(fnt`${get("foo")}`({ foo: "test" })).toBe("test")
  expect(fnt`${get(0)}`(["test"])).toBe("test")
})

test("get evaluates nested properties", () => {
  expect(fnt`${get("foo.bar")}`({ foo: { bar: "test" } })).toBe("test")
})

test("get returns context when no key is passed", () => {
  expect(fnt`${get()}`("test")).toBe("test")
  expect(fnt`${get(null)}`("test")).toBe("test")
  expect(fnt`${get(undefined)}`("test")).toBe("test")
  expect(fnt`${get(true)}`("test")).toBe("test")
  expect(fnt`${get(false)}`("test")).toBe("test")
})
