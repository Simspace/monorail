import * as TE from 'fp-ts/TaskEither'
import * as T from 'fp-ts/Tree'
import { O, pipe } from '@monorail/sharedHelpers/fp-ts-imports'

import { coerce, name } from '@monorail/sharedHelpers/names'

import {
  addChildWhere,
  addChildWhereAsync,
  duplicateWhere,
  duplicateWhereAsync,
  getPath,
  hasParent,
  isLeftmost,
  isRightmost,
  moveInto,
  moveLeft,
  moveNode,
  moveRight,
  moveUpAfter,
  moveUpBefore,
  spliceWhere,
  spliceWhereAsync,
} from '../Tree'

describe('Tree', () => {
  const baseForest = [
    // prettier-ignore
    T.make('a', [
      T.make('b', [
        T.make('d'),
      ]),
      T.make('c'),
    ]),
  ]

  describe('spliceWhere', () => {
    it('splices a forest at the node level', () => {
      const expected = [T.make('a', [T.make('c')])]
      const actual = spliceWhere(n => n.value === 'b')(_m => [])(baseForest)

      expect(actual).toEqual(expected)
    })

    it('splices from the bottom up', () => {
      const expected: T.Forest<unknown> = []
      const actual = spliceWhere(n => n.forest.length === 0)(_ => [])(
        baseForest,
      )

      expect(actual).toEqual(expected)
    })
  })

  describe('spliceWhereAsync', () => {
    it('splices a forest at the node level async', async () => {
      const expected = [T.make('a', [T.make('c')])]
      const actual = await spliceWhereAsync(n => n.value === 'b')(_m =>
        TE.of([]),
      )(baseForest)()

      expect(actual).toEqualRight(expected)
    })

    it('splices from the bottom up async', async () => {
      const expected: T.Forest<unknown> = []
      const actual = await spliceWhereAsync(n => n.forest.length === 0)(_ =>
        TE.of([]),
      )(baseForest)()

      expect(actual).toEqualRight(expected)
    })
  })

  describe('duplicateWhere', () => {
    it('duplicates a matching node at the same level, excluding children', () => {
      const expected = [
        // prettier-ignore
        T.make('a', [
          T.make('b', [
            T.make('d'),
          ]),
          T.make('b'),
          T.make('c'),
        ]),
      ]
      const actual = duplicateWhere(n => n.value === 'b')()(baseForest)

      expect(actual).toEqual(expected)
    })

    it('allows modification of duplicated node', () => {
      const expected = [
        // prettier-ignore
        T.make('a', [
          T.make('b', [
            T.make('d'),
          ]),
          T.make('e'),
          T.make('c'),
        ]),
      ]
      const actual = pipe(
        baseForest,
        duplicateWhere<string>(n => n.value === 'b')(_ => 'e'),
      )

      expect(actual).toEqual(expected)
    })
  })

  describe('duplicateWhereAsync', () => {
    it('duplicates a matching node at the same level, excluding children, async', async () => {
      const expected = [
        // prettier-ignore
        T.make('a', [
          T.make('b', [
            T.make('d'),
          ]),
          T.make('b'),
          T.make('c'),
        ]),
      ]
      const actual = await duplicateWhereAsync(n => n.value === 'b')(TE.of)(
        baseForest,
      )()

      expect(actual).toEqualRight(expected)
    })

    it('allows modification of duplicated node, async', async () => {
      const expected = [
        // prettier-ignore
        T.make('a', [
          T.make('b', [
            T.make('d'),
          ]),
          T.make('e'),
          T.make('c'),
        ]),
      ]
      const actual = await pipe(
        baseForest,
        duplicateWhereAsync<string>(n => n.value === 'b')(_ => TE.of('e')),
      )()

      expect(actual).toEqualRight(expected)
    })
  })

  describe('addChildWhere', () => {
    it('adds a child to nodes matching a predicate', () => {
      const expected = [
        // prettier-ignore
        T.make('a', [
          T.make('b', [
            T.make('d'),
          ]),
          T.make('c', [
            T.make('e'),
          ]),
        ]),
      ]
      const actual = addChildWhere(n => n.value === 'c')(() => T.make('e'))(
        baseForest,
      )

      expect(actual).toEqual(expected)
    })
  })

  describe('addChildWhereAsync', () => {
    it('adds a child to nodes matching a predicate, async', async () => {
      const expected = [
        // prettier-ignore
        T.make('a', [
          T.make('b', [
            T.make('d'),
          ]),
          T.make('c', [
            T.make('e'),
          ]),
        ]),
      ]
      const actual = await addChildWhereAsync(n => n.value === 'c')(() =>
        TE.of(T.make('e')),
      )(baseForest)()

      expect(actual).toEqualRight(expected)
    })
  })

  describe('path operations', () => {
    describe('getPath', () => {
      it('should return an index-based path to a matching node, if it exists', () => {
        const cases = [
          ['a', [0]],
          ['b', [0, 0]],
          ['c', [0, 1]],
          ['d', [0, 0, 0]],
        ]
        cases.forEach(([target, expected]) => {
          name(baseForest)(nbf => {
            const actual = getPath(n => n.value === target)(nbf)
            expect(actual).toEqualSome(coerce(expected))
          })
        })
      })

      it('should return a None if there is no matching node', () => {
        name(baseForest)(nbf => {
          const actual = getPath(n => n.value === 'e')(nbf)
          expect(actual).toBeNone()
        })
      })
    })

    describe('moveNode', () => {
      it('should move a node from one place to another', () => {
        name(baseForest)(nbf => {
          const nodePaths = pipe(
            getPath(n => n.value === 'a')(nbf),
            O.bindTo('a'),
            O.apS('b', getPath(n => n.value === 'b')(nbf)),
            O.apS('c', getPath(n => n.value === 'c')(nbf)),
            O.apS('d', getPath(n => n.value === 'd')(nbf)),
          )
          type Node = 'a' | 'b' | 'c' | 'd'
          const move = (from: Node, to: Node) =>
            pipe(
              nodePaths,
              O.chain(({ [from]: from_, [to]: to_ }) =>
                moveNode(from_, to_)(nbf),
              ),
            )
          expect(move('a', 'a')).toBeNone()
          expect(move('a', 'b')).toBeNone()
          expect(move('a', 'c')).toBeNone()
          expect(move('a', 'd')).toBeNone()
          expect(move('b', 'a')).toEqual(
            O.some(
              // prettier-ignore
              [
                T.make('b', [
                  T.make('d'),
                ]),
                T.make('a', [
                  T.make('c'),
                ]),
              ],
            ),
          )
          expect(move('b', 'b')).toBeNone()
          expect(move('b', 'b')).toBeNone()
          expect(move('b', 'c')).toEqual(
            O.some(
              // prettier-ignore
              [
                T.make('a', [
                  T.make('c'),
                  T.make('b', [
                    T.make('d'),
                  ]),
                ]),
              ],
            ),
          )
          expect(move('b', 'd')).toBeNone()
          expect(move('c', 'a')).toEqual(
            O.some(
              // prettier-ignore
              [
                T.make('c'),
                T.make('a', [
                  T.make('b', [
                    T.make('d'),
                  ]),
                ]),
              ],
            ),
          )
          expect(move('c', 'b')).toEqual(
            O.some(
              // prettier-ignore
              [
                T.make('a', [
                  T.make('c'),
                  T.make('b', [
                    T.make('d'),
                  ]),
                ]),
              ],
            ),
          )
          expect(move('c', 'c')).toBeNone()
          expect(move('c', 'd')).toEqual(
            O.some(
              // prettier-ignore
              [
                T.make('a', [
                  T.make('b', [
                    T.make('c'),
                    T.make('d'),
                  ]),
                ]),
              ],
            ),
          )
          expect(move('d', 'a')).toEqual(
            O.some(
              // prettier-ignore
              [
                T.make('d'),
                T.make('a', [
                  T.make('b'),
                  T.make('c'),
                ]),
              ],
            ),
          )
          expect(move('d', 'b')).toEqual(
            O.some(
              // prettier-ignore
              [
                T.make('a', [
                  T.make('d'),
                  T.make('b'),
                  T.make('c'),
                ]),
              ],
            ),
          )
          expect(move('d', 'c')).toEqual(
            O.some(
              // prettier-ignore
              [
                T.make('a', [
                  T.make('b'),
                  T.make('d'),
                  T.make('c'),
                ]),
              ],
            ),
          )
          expect(move('d', 'd')).toBeNone()
        })
      })
    })
  })

  describe('moveLeft', () => {
    it('should move left if not already the leftmost child', () => {
      const expected = [
        // prettier-ignore
        T.make('a', [
          T.make('c'),
          T.make('b', [
            T.make('d'),
          ]),
        ]),
      ]
      const actual = moveLeft(n => n.value === 'c')(baseForest)
      expect(actual).toEqual(O.some(expected))
    })

    it('should return None if move is impossible', () => {
      const actual = moveLeft(n => n.value === 'a')(baseForest)
      expect(actual).toBeNone()
    })
  })

  describe('moveUpBefore', () => {
    it('should move to parent level, before parent', () => {
      const expected = [
        // prettier-ignore
        T.make('a', [
          T.make('d'),
          T.make('b'),
          T.make('c'),
        ]),
      ]
      const actual = moveUpBefore(n => n.value === 'd')(baseForest)
      expect(actual).toEqual(O.some(expected))
    })

    it('should return None if move is impossible', () => {
      const actual = moveUpBefore(n => n.value === 'a')(baseForest)
      expect(actual).toBeNone()
    })
  })

  describe('moveRight', () => {
    it('should move right if not already the rightmost child', () => {
      const expected = [
        // prettier-ignore
        T.make('a', [
          T.make('c'),
          T.make('b', [
            T.make('d'),
          ]),
        ]),
      ]
      const actual = moveRight(n => n.value === 'b')(baseForest)
      expect(actual).toEqual(O.some(expected))
    })

    it('should return None if move is impossible', () => {
      const actual = moveRight(n => n.value === 'a')(baseForest)
      expect(actual).toBeNone()
    })
  })

  describe('moveUpAfter', () => {
    it('should move to parent level, after parent, if the rightmost child', () => {
      const expected = [
        // prettier-ignore
        T.make('a', [
          T.make('b'),
          T.make('d'),
          T.make('c'),
        ]),
      ]
      const actual = moveUpAfter(n => n.value === 'd')(baseForest)
      expect(actual).toEqual(O.some(expected))
    })

    it('should return None if move is impossible', () => {
      const actual = moveUpAfter(n => n.value === 'a')(baseForest)
      expect(actual).toBeNone()
    })
  })

  describe('moveInto', () => {
    it('should move into right nodes children, if one exists', () => {
      const expected = [
        // prettier-ignore
        T.make('a', [
          T.make('c', [
            T.make('b', [
              T.make('d'),
            ]),
          ]),
        ]),
      ]
      const actual = moveInto(n => n.value === 'b')(baseForest)
      expect(actual).toEqual(O.some(expected))
    })

    it('should return None if move is impossible', () => {
      const actual = moveInto(n => n.value === 'a')(baseForest)
      expect(actual).toBeNone()
    })
  })

  describe('positional checks', () => {
    const baseForest2 = [
      // prettier-ignore
      T.make('a', [
        T.make('b', [
          T.make('d'),
        ]),
        T.make('c'),
      ]),
      T.make('e'),
    ]

    describe('isLeftmost', () => {
      it('should tell if a node is leftmost', () => {
        expect(isLeftmost(n => n.value === 'a')(baseForest2)).toBe(true)
        expect(isLeftmost(n => n.value === 'b')(baseForest2)).toBe(true)
        expect(isLeftmost(n => n.value === 'c')(baseForest2)).toBe(false)
        expect(isLeftmost(n => n.value === 'd')(baseForest2)).toBe(true)
        expect(isLeftmost(n => n.value === 'e')(baseForest2)).toBe(false)
      })
    })

    describe('isRightmost', () => {
      it('should tell if a node is rightmost', () => {
        expect(isRightmost(n => n.value === 'a')(baseForest2)).toBe(false)
        expect(isRightmost(n => n.value === 'b')(baseForest2)).toBe(false)
        expect(isRightmost(n => n.value === 'c')(baseForest2)).toBe(true)
        expect(isRightmost(n => n.value === 'd')(baseForest2)).toBe(true)
        expect(isRightmost(n => n.value === 'e')(baseForest2)).toBe(true)
      })
    })

    describe('hasParent', () => {
      it('should tell if a node has a parent', () => {
        expect(hasParent(n => n.value === 'a')(baseForest2)).toBe(false)
        expect(hasParent(n => n.value === 'b')(baseForest2)).toBe(true)
        expect(hasParent(n => n.value === 'c')(baseForest2)).toBe(true)
        expect(hasParent(n => n.value === 'd')(baseForest2)).toBe(true)
        expect(hasParent(n => n.value === 'e')(baseForest2)).toBe(false)
      })
    })
  })
})
