"use strict";

var _strings = require("../strings");

describe('split', () => {
  it('split strings by a character separator', () => {
    const actual = (0, _strings.split)(/,/g)('t,e,s,t');
    const expected = ['t', 'e', 's', 't'];
    expect(actual).toEqual(expected);
  });
  it('split strings by a substring', () => {
    const actual = (0, _strings.split)(/_,_/g)('t_,_e_,_s_,_t');
    const expected = ['t', 'e', 's', 't'];
    expect(actual).toEqual(expected);
  });
});
describe('replace', () => {
  it('should replace a character', () => {
    const actual = (0, _strings.replace)(/,/g, '_')('t,e,s,t');
    const expected = 't_e_s_t';
    expect(actual).toBe(expected);
  });
  it('should replace a subtring', () => {
    const actual = (0, _strings.replace)(/_,_/g, '_')('t_,_e_,_s_,_t');
    const expected = 't_e_s_t';
    expect(actual).toBe(expected);
  });
  it('should omit a character when passed an empty string', () => {
    const actual = (0, _strings.replace)(/,/g, '')('t,e,s,t');
    const expected = 'test';
    expect(actual).toBe(expected);
  });
  it('should omit a substring when passed an empty string', () => {
    const actual = (0, _strings.replace)(/_,_/g, '')('t_,_e_,_s_,_t');
    const expected = 'test';
    expect(actual).toBe(expected);
  });
});
describe('splitName', () => {
  it('split a name into a first & last key-val pairs', () => {
    const actual = (0, _strings.splitName)('John Smith');
    const expected = {
      first: 'John',
      last: 'Smith'
    };
    expect(actual).toEqual(expected);
  });
});
describe('findIndex', () => {
  it('should return a none if a substring is not in a string', () => {
    const actual = (0, _strings.findIndex)('x')('John Smith').isNone();
    const expected = true;
    expect(actual).toBe(expected);
  });
  it('should return a none if a substring is not in a string', () => {
    const actual = (0, _strings.findIndex)('xxx')('John Smith').isNone();
    const expected = true;
    expect(actual).toBe(expected);
  });
  it('should return a some of an index if a char is in a string', () => {
    const opt = (0, _strings.findIndex)('h')('John Smith');
    const actual = opt.isSome() && opt.value === 2;
    const expected = true;
    expect(actual).toBe(expected);
  });
  it('should return a some of an index if a substring is in a string', () => {
    const opt = (0, _strings.findIndex)('ohn')('John Smith');
    const actual = opt.isSome() && opt.value === 1;
    const expected = true;
    expect(actual).toBe(expected);
  });
});
describe('toLower', () => {
  it('should lowercase a string', () => {
    const actual = (0, _strings.toLower)('John Smith');
    const expected = 'john smith';
    expect(actual).toBe(expected);
  });
});
describe('trim', () => {
  it('should remove whitespace from around a string', () => {
    const actual = (0, _strings.trim)('  John Smith    ');
    const expected = 'John Smith';
    expect(actual).toBe(expected);
  });
});
describe('join', () => {
  it('should join strings with no separator when passed empty string', () => {
    const actual = (0, _strings.join)('', ['t', 'e', 's', 't']);
    const expected = 'test';
    expect(actual).toBe(expected);
  });
  it('should join strings via a separator', () => {
    const actual = (0, _strings.join)(',', ['t', 'e', 's', 't']);
    const expected = 't,e,s,t';
    expect(actual).toBe(expected);
  });
});