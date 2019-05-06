import dotProp from "dot-prop"

export function get(key) {
  function fn(context) {
    if (!key) {
      return context
    }

    return dotProp.get(context, key)
  }

  return fn
}