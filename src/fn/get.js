import dotProp from "dot-prop"

export function get(key) {
  function fn(context) {
    if (key !== undefined && !dotProp.has(context, String(key))) {
      throw new TypeError(`${context} has no property '${key}'`)
    }

    if (context === undefined) {
      throw new TypeError(`Context is undefined`)
    }

    if (key === undefined) {
      return context
    }

    return dotProp.get(context, String(key))
  }

  return fn
}