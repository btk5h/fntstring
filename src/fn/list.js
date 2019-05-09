import { get } from "./get"

export function list(key, params = {}) {
  const {
    join = ", ",
    lastJoin = ", "
  } = params

  return context => {
    const arr = get(key)(context)

    if (!Array.isArray(arr)) {
      throw new TypeError(`${arr} is not an array`)
    }

    const firstElements = arr.slice(0, -1).join(join)
    const lastElement = arr[arr.length - 1]

    return [firstElements, lastElement].join(arr.length < 2 ? "" : lastJoin)
  }
}

export function listAnd(key) {
  return list(key, {
    join: ", ",
    lastJoin: ", and "
  })
}

export function listOr(key) {
  return list(key, {
    join: ", ",
    lastJoin: ", or "
  })
}
