/* tslint:disable-next-line:no-implicit-dependencies */
import { expectTypeOf } from 'expect-type'
import { Option } from 'fp-ts/lib/Option'

import { OptionalToOption } from '../typeLevel'

describe('type level', () => {
  describe('OptionalToOption', () => {
    it('should map optional props to fp-ts Options', () => {
      expectTypeOf<
        OptionalToOption<{
          foo?: number
          bar: string
        }>
      >().toEqualTypeOf<{
        foo: Option<number>
        bar: string
      }>()
    })

    it('should work recursively', () => {
      expectTypeOf<
        OptionalToOption<{
          foo?: { foo?: number }
          bar: { bar?: string; baz: number }
        }>
      >().toEqualTypeOf<{
        foo: Option<{ foo: Option<number> }>
        bar: { bar: Option<string>; baz: number }
      }>()
    })
  })
})
