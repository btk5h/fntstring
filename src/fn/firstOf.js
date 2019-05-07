export function firstOf(...expressions) {
  function fn(context) {
    for (const expression of expressions) {
      try {
        if (typeof expression === "function") {
          return expression(context)
        }

        return expression
      } catch (ignored) {}
    }
  }

  return fn
}