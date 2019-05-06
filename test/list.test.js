const { fnt, list, listAnd, listOr } = require("../dist/fntstring")

test("list handles non-array parameters", () => {
  expect(fnt`${list()}`("test")).toBe(`${"test"}`)
  expect(fnt`${list()}`(0)).toBe(`${0}`)
  expect(fnt`${list()}`(null)).toBe(`${null}`)
  expect(fnt`${list()}`(undefined)).toBe(`${undefined}`)
  expect(fnt`${list()}`({})).toBe(`${{}}`)
})

test("list properly formats arrays", () => {
  const arr = ["foo", "bar", "baz"]
  expect(fnt`${list()}`(arr)).toBe("foo, bar, baz")
  expect(fnt`${listAnd()}`(arr)).toBe("foo, bar, and baz")
  expect(fnt`${listOr()}`(arr)).toBe("foo, bar, or baz")
})

test("list properly formats arrays with 1 element", () => {
  const arr = ["foo"]
  expect(fnt`${list()}`(arr)).toBe("foo")
  expect(fnt`${listAnd()}`(arr)).toBe("foo")
  expect(fnt`${listOr()}`(arr)).toBe("foo")
})

test("list properly formats arrays with no elements", () => {
  const arr = []
  expect(fnt`${list()}`(arr)).toBe("")
  expect(fnt`${listAnd()}`(arr)).toBe("")
  expect(fnt`${listOr()}`(arr)).toBe("")
})

test("list uses get when a key is passed", () => {
  const context = {
    key: ["foo", "bar", "baz"]
  }

  expect(fnt`${list("key")}`(context)).toBe("foo, bar, baz")
  expect(fnt`${listAnd("key")}`(context)).toBe("foo, bar, and baz")
  expect(fnt`${listOr("key")}`(context)).toBe("foo, bar, or baz")
})