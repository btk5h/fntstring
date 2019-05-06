import dotProp from "dot-prop"

export function get(key) {
  function fn(context) {
    return dotProp.get(context, key)
  }

  return fn
}