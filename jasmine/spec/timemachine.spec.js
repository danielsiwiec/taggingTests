import {travelBack, travelForward, travelToBirth} from '../src/timemachine'

describe('A time machine', () => {
  it('should travel back in time', () => {
    expect(travelBack({now: 2016}, 16)).toEqual({now: 2000})
  })

  it('should not allow travel to far back', () => {
    const beforeEarth = Math.pow(10, 9)
    expect(travelBack({now: 2016}, 5 * beforeEarth)).toEqual({now: 2016})
  })

  it('should travel forward #future', () => {
    expect(travelForward({now: 2016}, 15)).toEqual({now: 2031})
  })

  it('should make many hops to the future #future', () => {
    let hops = [5, 10 ,15]
    expect(hops.reduce(travelForward, {now: 2016})).toEqual({now: 2046})
  })

  it('should travel to Pratchett\'s birth year', () => {
    expect(travelToBirth({now: 2016}, 'pratchett')).toEqual({now: 1948})
  })
})
