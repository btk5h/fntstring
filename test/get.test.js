const { fnt, get } = require("../dist/fntstring")

test("get utility evaluates to context[key]", () => {
  expect(fnt`${get("foo")}`({ foo: "test" })).toBe("test")
  expect(fnt`${get(0)}`(["test"])).toBe("test")
})

test("get utility evaluates nested properties", () => {
  expect(fnt`${get("foo.bar")}`({ foo: { bar: "test" } })).toBe("test")
})
