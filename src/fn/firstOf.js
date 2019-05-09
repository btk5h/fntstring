export function firstOf(...expressions) {
  return context => {
    for (const expression of expressions) {
      try {
        if (typeof expression === "function") {
          return expression(context)
        }

        return expression
      } catch (ignored) {}
    }

    throw new TypeError("firstOf did not resolve to any of the given expressions")
  }
}