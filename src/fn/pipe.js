export function pipe(...steps) {
  function fn(context) {
    return steps.reduce((lastOutput, step) => step(lastOutput), context)
  }

  return fn
}