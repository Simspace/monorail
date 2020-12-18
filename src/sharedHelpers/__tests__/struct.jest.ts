import { deepMerge } from '../struct'

describe(deepMerge.name, () => {
  const data = {
    one: {
      two: ['hello'],
      three: {
        four: 'goodbye',
      },
    },
  }

  it('deeply merges updater struct into original struct', () => {
    const actual = deepMerge(data, {
      one: { three: { four: 'adios' } },
    })

    expect(actual).toEqual({
      ...data,
      one: { ...data.one, three: { four: 'adios' } },
    })
  })

  it('only merges plain objects (has Object as prototype), not e.g. Arrays or Dates', () => {
    const actual1 = deepMerge(data, {
      one: { two: ['there'] },
    })

    expect(actual1).toEqual({ ...data, one: { ...data.one, two: ['there'] } })
  })
})
