"use strict";

var _function = require("../function");

describe('flip', () => {
  it('should flip the order of the arguments of a curried function', () => {
    const f = x => y => `${x}${y}`;

    const g = (0, _function.flip)(f);
    const num = 4;
    const str = '2';
    const actual = g(str)(num);
    const expected = f(num)(str);
    expect(actual).toBe(expected);
  });
});
describe('o', () => {
  it('should compose 2 functions together properly', () => {
    const init = 3;

    const add1 = x => x + 1;

    const showNum = x => `${x}`;

    const actual = (0, _function.o)(showNum, add1)(init);
    const expected = showNum(add1(init));
    expect(actual).toBe(expected);
  });
});
describe('swap', () => {
  it('should swap the order of arguments in a 2-tuple', () => {
    const actual = (0, _function.swap)([0, 1]);
    const expected = [1, 0];
    expect(actual).toEqual(expected);
  });
});