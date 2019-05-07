import dotProp from "dot-prop"

export function get(key) {
  function fn(context) {
    if (key !== undefined && !dotProp.has(context, String(key))) {
      throw new TypeError(`${context} has no property '${key}'`)
    }

    if (context === undefined) {
      throw new TypeError(`Context is undefined`)
    }

    return dotProp.get(context, key)
  }

  return fn
}