export function pipe(...steps) {
  return context => {
    return steps.reduce((lastOutput, step) => step(lastOutput), context)
  }
}