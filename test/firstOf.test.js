const { fnt, firstOf, get } = require("../dist/fntstring")

test("firstOf selects the first viable expression", () => {
  const name = fnt`${get("firstName")} ${get("lastName")}`
  const nameOrDefault = firstOf(name, get())

  expect(nameOrDefault({ firstName: "John", lastName: "Doe" })).toBe("John Doe")
  expect(nameOrDefault("test")).toBe("test")
})

test("firstOf selects non-function expressions", () => {
  expect(firstOf("foo")()).toBe("foo")
  expect(firstOf("foo", get())("bar")).toBe("foo")
  expect(firstOf(get(), "foo")()).toBe("foo")
  expect(firstOf(get(), "foo")("bar")).toBe("bar")
})

test("firstOf errors if no expression was resolved", () => {
  expect(() => {
    firstOf()()
  }).toThrow()
  expect(() => {
    firstOf(get("test"))()
  }).toThrow()
})