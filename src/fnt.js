export function fnt(strings, ...expressions) {
  return function(context) {
    return strings.map((string, i) => {
      if (i >= expressions.length) {
        return string
      }

      const expression = expressions[i]

      if (typeof expression === "function") {
        return string + expression(context)
      }

      return string + expression
    }).join("")
  }
}