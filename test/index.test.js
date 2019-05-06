const { fnt, get } = require("../dist/fntstring")

it("handles normal strings", () => {
  expect(fnt``()).toBe("")
  expect(fnt`test`()).toBe("test")
})

it("matches untagged template literal behavior for basic interpolations", () => {
  expect(fnt`(${"foo"})`()).toBe(`(${"foo"})`)
  expect(fnt`(${1})`()).toBe(`(${1})`)
  expect(fnt`(${true})`()).toBe(`(${true})`)
  expect(fnt`(${false})`()).toBe(`(${false})`)
  expect(fnt`(${null})`()).toBe(`(${null})`)
  expect(fnt`(${undefined})`()).toBe(`(${undefined})`)
  expect(fnt`(${{}})`()).toBe(`(${{}})`)
  expect(fnt`(${[]})`()).toBe(`(${[]})`)
})

it("evaluates substituted functions with the context", () => {
  const paramFn = jest.fn()

  paramFn.mockReturnValueOnce("test")

  expect(fnt`${paramFn}`("context")).toBe("test")
  expect(paramFn).toBeCalledWith("context")
})

it("can be composed", () => {
  const name = fnt`${get("firstName")} ${get("lastName")}`
  const greet = fnt`Hello, ${name}`

  expect(greet({ firstName: "John", lastName: "Doe" })).toBe("Hello, John Doe")
})