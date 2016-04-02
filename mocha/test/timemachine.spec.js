import {travelBack, travelForward, travelToBirth} from '../src/timemachine'
var assert = require('assert')

describe('A time machine', () => {
  it('should travel back in time', () => {
    assert.deepEqual(travelBack({now: 2016}, 16), {now: 2000})
  })

  it('should not allow travel to far back', () => {
    const beforeEarth = Math.pow(10, 9)
    assert.deepEqual(travelBack({now: 2016}, 5 * beforeEarth), {now: 2016})
  })

  it('should travel forward #future', () => {
    assert.deepEqual(travelForward({now: 2016}, 15), {now: 2031})
  })

  it('should make many hops to the future #future', () => {
    let hops = [5, 10 ,15]
    assert.deepEqual(hops.reduce(travelForward, {now: 2016}), {now: 2046})
  })

  it('should travel to Pratchett\'s birth year', () => {
    assert.deepEqual(travelToBirth({now: 2016}, 'pratchett'), {now: 1948})
  })
})
