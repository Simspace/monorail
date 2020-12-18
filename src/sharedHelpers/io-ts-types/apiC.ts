import * as t from 'io-ts'

export type JsonPayload<A> = { tag: 'json'; value: A }

export const jsonPayloadC = <A>(codecA: t.Type<A>): t.Type<JsonPayload<A>> =>
  t.type({ tag: t.literal('json'), value: codecA })
