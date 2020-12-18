import { identity } from 'fp-ts/function'

import { name } from '../names'

describe('names', () => {
  it('assigns a unique name to a value', () => {
    name(3)(a => {
      name(3)(b => {
        expect(a).toEqual(b)
        // because they have different "names", TS should not consider `a` and
        // `b` to be comparable, though in this case they have the same value.
        // @ts-expect-error
        expect(a === b).toBe(true)
      })
    })
  })

  it('does not leak names', () => {
    const a = name(3)(identity)
    const b = name(3)(identity)
    expect(a).toEqual(b)
    // the names do not leave the bounds of the function, so both `a` and `b`
    // are `unknown` here, which means they _can_ be compared.
    expect(a === b).toBe(true)
  })
})
