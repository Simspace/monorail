import { none, some } from 'fp-ts/lib/Option'
import { O, Show } from '@monorail/sharedHelpers/fp-ts-imports'

import {
  capitalizeFirstLetter,
  capitalizeWords,
  drop,
  findIndex,
  join,
  matchStringP,
  padStart,
  removeSpaces,
  repeat,
  replace,
  safeParseInt,
  split,
  splitName,
  truncate,
  truncateArray,
  take,
  toLower,
  trim,
} from '../strings'

describe.each([
  { input: '', len: 0, expected: '' },
  { input: '', len: 1, expected: '' },
  { input: '', len: 2, expected: '' },
  { input: '', len: 3, expected: '' },
  { input: '', len: 4, expected: '' },
  { input: 'a', len: 0, expected: '...' },
  { input: 'a', len: 1, expected: 'a' },
  { input: 'a', len: 2, expected: 'a' },
  { input: 'a', len: 3, expected: 'a' },
  { input: 'a', len: 4, expected: 'a' },
  { input: 'ab', len: 0, expected: '...' },
  { input: 'ab', len: 1, expected: 'a...' },
  { input: 'ab', len: 2, expected: 'ab' },
  { input: 'ab', len: 3, expected: 'ab' },
  { input: 'ab', len: 4, expected: 'ab' },
  { input: 'abc', len: 0, expected: '...' },
  { input: 'abc', len: 1, expected: 'a...' },
  { input: 'abc', len: 2, expected: 'ab...' },
  { input: 'abc', len: 3, expected: 'abc' },
  { input: 'abc', len: 4, expected: 'abc' },
  { input: 'abcd', len: 0, expected: '...' },
  { input: 'abcd', len: 1, expected: 'a...' },
  { input: 'abcd', len: 2, expected: 'ab...' },
  { input: 'abcd', len: 3, expected: 'abc...' },
  { input: 'abcd', len: 4, expected: 'abcd' },
  { input: 'abcd', len: 5, expected: 'abcd' },
])('truncate', ({ input, len, expected }) => {
  it(`should truncate "${input}" by ${len} to "${expected}"`, () => {
    const actual = truncate(len)(input)
    expect(actual).toEqual(expected)
  })
})

describe.each<{ input: Array<string>; len: number; expected: string }>([
  { input: [], len: -1, expected: '' },
  { input: [], len: 0, expected: '' },
  { input: [], len: 1, expected: '' },
  { input: ['a'], len: -1, expected: '' },
  { input: ['a'], len: 0, expected: ' (+1 more)' },
  { input: ['a'], len: 1, expected: 'a' },
  { input: ['a'], len: 2, expected: 'a' },
  { input: ['a', 'b'], len: -1, expected: '' },
  { input: ['a', 'b'], len: 0, expected: ' (+2 more)' },
  { input: ['a', 'b'], len: 1, expected: 'a (+1 more)' },
  { input: ['a', 'b'], len: 2, expected: 'a, b' },
  { input: ['a', 'b'], len: 3, expected: 'a, b' },
  { input: ['a', 'b', 'c'], len: -1, expected: '' },
  { input: ['a', 'b', 'c'], len: 0, expected: ' (+3 more)' },
  { input: ['a', 'b', 'c'], len: 1, expected: 'a (+2 more)' },
  { input: ['a', 'b', 'c'], len: 2, expected: 'a, b (+1 more)' },
  { input: ['a', 'b', 'c'], len: 3, expected: 'a, b, c' },
])('truncateArray', ({ input, len, expected }) => {
  it(`should truncateArray ${JSON.stringify(
    input,
  )} by ${len} to "${expected}"`, () => {
    const actual = truncateArray({ show: (a: string) => a })(len)(input)
    expect(actual).toEqual(expected)
  })
})

describe('split', () => {
  it('split strings by a character separator', () => {
    const actual = split(/,/g)('t,e,s,t')
    const expected = ['t', 'e', 's', 't']
    expect(actual).toEqual(expected)
  })

  it('split strings by a substring', () => {
    const actual = split(/_,_/g)('t_,_e_,_s_,_t')
    const expected = ['t', 'e', 's', 't']
    expect(actual).toEqual(expected)
  })
})

describe('replace', () => {
  it('should replace a character', () => {
    const actual = replace(/,/g, '_')('t,e,s,t')
    const expected = 't_e_s_t'
    expect(actual).toBe(expected)
  })

  it('should replace a subtring', () => {
    const actual = replace(/_,_/g, '_')('t_,_e_,_s_,_t')
    const expected = 't_e_s_t'
    expect(actual).toBe(expected)
  })

  it('should omit a character when passed an empty string', () => {
    const actual = replace(/,/g, '')('t,e,s,t')
    const expected = 'test'
    expect(actual).toBe(expected)
  })

  it('should omit a substring when passed an empty string', () => {
    const actual = replace(/_,_/g, '')('t_,_e_,_s_,_t')
    const expected = 'test'
    expect(actual).toBe(expected)
  })
})

describe('splitName', () => {
  it('split a name into a first & last key-val pairs', () => {
    const actual = splitName('John Smith')
    const expected = { first: 'John', last: 'Smith' }
    expect(actual).toEqual(expected)
  })
})

describe('findIndex', () => {
  it('should return a none if a substring is not in a string', () => {
    expect(findIndex('x')('John Smith')).toBeNone()
  })

  it('should return a none if a substring is not in a string', () => {
    expect(findIndex('xxx')('John Smith')).toBeNone()
  })

  it('should return a some of an index if a char is in a string', () => {
    const opt = findIndex('h')('John Smith')
    expect(opt).toEqualSome(2)
  })

  it('should return a some of an index if a substring is in a string', () => {
    const opt = findIndex('ohn')('John Smith')
    expect(opt).toEqualSome(1)
  })
})

describe('toLower', () => {
  it('should lowercase a string', () => {
    const actual = toLower('John Smith')
    const expected = 'john smith'
    expect(actual).toBe(expected)
  })
})

describe('trim', () => {
  it('should remove whitespace from around a string', () => {
    const actual = trim('  John Smith    ')
    const expected = 'John Smith'
    expect(actual).toBe(expected)
  })
})

describe('removeSpaces', () => {
  it('should remove space characters within a string', () => {
    const actual = removeSpaces(' 2 / 10')
    const expected = '2/10'
    expect(actual).toBe(expected)
  })
})

describe('join', () => {
  it('should join strings with no separator when passed empty string', () => {
    const actual = join('', ['t', 'e', 's', 't'])
    const expected = 'test'
    expect(actual).toBe(expected)
  })

  it('should join strings via a separator', () => {
    const actual = join(',', ['t', 'e', 's', 't'])
    const expected = 't,e,s,t'
    expect(actual).toBe(expected)
  })
})

describe('capitalizeWords', () => {
  it('should capitalize words when given more than one word', () => {
    const str = 'this is a list of words'
    const expected = 'This Is A List Of Words'
    const actual = capitalizeWords(str)
    expect(actual).toEqual(expected)
  })

  it('should return a string if given no words', () => {
    const str = ''
    const expected = str
    const actual = capitalizeWords(str)
    expect(actual).toEqual(expected)
  })

  it('should return a capitalized word if given a word', () => {
    const str = 'supercalifragilisticexpialidocious'
    const expected = 'Supercalifragilisticexpialidocious'
    const actual = capitalizeWords(str)
    expect(actual).toEqual(expected)
  })

  it('should return single letter capitalized if given single letter', () => {
    const str = 'a'
    const expected = 'A'
    const actual = capitalizeWords(str)
    expect(actual).toEqual(expected)
  })
})

describe('capitalizeFirstLetter', () => {
  it('should return a single letter capitalized if given a single letter', () => {
    const str = 'a'
    const expected = 'A'
    const actual = capitalizeFirstLetter(str)
    expect(actual).toEqual(expected)
  })

  it('should return a capitalized word given a single word', () => {
    const str = 'supercalifragilisticexpialidocious'
    const expected = 'Supercalifragilisticexpialidocious'
    const actual = capitalizeFirstLetter(str)
    expect(actual).toEqual(expected)
  })

  it('should only capitalize the first letter given more than one word', () => {
    const str = 'super califragilistic expialidocious'
    const expected = 'Super califragilistic expialidocious'
    const actual = capitalizeFirstLetter(str)
    expect(actual).toEqual(expected)
  })

  it('should return empty string given an empty string', () => {
    const str = ''
    const expected = str
    const actual = capitalizeFirstLetter(str)
    expect(actual).toEqual(expected)
  })
})

describe('take', () => {
  it('should return empty string when empty string passed', () =>
    expect(take(2)('')).toBe(''))
  it('should return whole string if n > s.length', () =>
    expect(take(30)('a short string')).toBe('a short string'))
  it('should return only first n characters if n < string.length', () =>
    expect(take(5)('a short string')).toBe('a sho'))
})

describe.each([
  { times: -1, input: 'hi', expected: 'hi' },
  { times: 0, input: 'hi', expected: 'hi' },
  { times: 1, input: 'hi', expected: 'hi' },
  { times: 2, input: 'hi', expected: 'hihi' },
])('repeat', ({ times, input, expected }) => {
  it(`should repeat ${input} ${times} times to end with ${expected}`, () => {
    expect(repeat(times)(input)).toEqual(expected)
  })
})

describe.each([
  { targetLength: -1, padWith: '0', input: '1', expected: '1' },
  { targetLength: 0, padWith: '0', input: '1', expected: '1' },
  { targetLength: 1, padWith: '0', input: '1', expected: '1' },
  { targetLength: 2, padWith: '0', input: '1', expected: '01' },
  { targetLength: 3, padWith: '0', input: '1', expected: '001' },
  { targetLength: 5, padWith: '0', input: '1', expected: '00001' },
  { targetLength: 5, padWith: '0', input: '123456', expected: '123456' },
  { targetLength: 2, padWith: 'abc', input: '12', expected: '12' },
  { targetLength: 3, padWith: 'abc', input: '12', expected: 'a12' },
  { targetLength: 4, padWith: 'abc', input: '12', expected: 'ab12' },
  { targetLength: 5, padWith: 'abc', input: '12', expected: 'abc12' },
  { targetLength: 6, padWith: 'abc', input: '12', expected: 'abca12' },
  { targetLength: 3, padWith: '', input: 'hi', expected: 'hi' },
])('padStart', ({ targetLength, padWith, input, expected }) => {
  it(`should pad ${input} to length ${targetLength} with padding ${padWith} to end with ${expected}`, () => {
    expect(padStart(targetLength, padWith)(input)).toEqual(expected)
  })
})

describe('safeParseInt', () => {
  it('should return none string when passed an unparseable string', () =>
    expect(safeParseInt('a')).toBe(none))
  it('should return `Some<number>` if parse succeeds', () =>
    expect(safeParseInt('42')).toEqual(some(42)))
  it('should behave the same as parseInt when passed a base argument', () =>
    expect(safeParseInt('42', 7)).toEqual(some(30)))
})

describe('drop', () => {
  it('should drop leading characters from a string', () => {
    expect(drop(1)('foo')).toEqual('oo')
    expect(drop(6)('Typescript')).toEqual('ript')
  })

  it('should return an empty string if n is greater than the length of the string', () => {
    expect(drop(15)('foo')).toEqual('')
    expect(drop(1)('')).toEqual('')
  })

  it('should not drop any characters if n is less than or equal to zero', () => {
    expect(drop(0)('foo')).toEqual('foo')
    expect(drop(-1)('foo')).toEqual('foo')
  })
})

describe('matchStringP', () => {
  const matcher = matchStringP({
    foo: () => 1,
    bar: () => 2,
  })
  it('should match the supplied string', () => {
    expect(matcher('foo')).toEqual(O.some(1))
    expect(matcher('bar')).toEqual(O.some(2))
  })

  it('should return a None if no amtch is supplied', () => {
    expect(matcher('baz')).toEqual(O.none)
  })
})
