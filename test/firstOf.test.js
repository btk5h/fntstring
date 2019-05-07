const { fnt, firstOf, get, FntMeta } = require("../dist/fntstring")

test("firstOf selects the correct expression", () => {
  const name = fnt`${get("firstName")} ${get("lastName")}`
  const greet = fnt`Hello, ${firstOf(name, get())}`

  expect(greet({ firstName: "John", lastName: "Doe" })).toBe("Hello, John Doe")
  expect(greet("world")).toBe("Hello, world")
})

test("firstOf errors if no expression was resolved", () => {
  expect(() => {
    fnt`${firstOf()}`()
  }).toThrow()
  expect(() => {
    fnt`${firstOf(get("test"))}`()
  }).toThrow()
})