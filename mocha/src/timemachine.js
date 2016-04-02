export function travelBack(state, howMany) {
  const beforeEarth = - Math.pow(10, 9)

  let target = state.now - howMany

  if (target < beforeEarth) {
    return state
  }

  return Object.assign({}, state, {
    now: target
  })
}

export function travelForward(state, howMany) {
  return Object.assign({}, state, {
    now: state.now + howMany
  })
}

export function travelToBirth(state, who) {
  const birthYears = {
    pratchett: 1948,
    king: 1947,
    gaiman: 1960
  }
  return Object.assign({}, state, {now: birthYears[who]})
}
