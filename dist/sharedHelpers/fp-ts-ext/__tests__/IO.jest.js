"use strict";

var _IO = require("../IO");

describe('constRunIO', () => {
  let num = 0;
  const mutateNumIO = (0, _IO.newIO)(() => {
    num = 3;
  });
  it('should return the run function for an IO<A>', () => {
    const actual = (0, _IO.constRunIO)(mutateNumIO)();
    const expected = mutateNumIO();
    expect(actual).toBe(expected);
    expect(num).toBe(3);
  });
});
describe('newIO', () => {
  let num = 0;
  const mutateNumIO = (0, _IO.newIO)(() => {
    num = 5;
  });
  const mutateNumIO_ = (0, _IO.newIO)(() => {
    num = 5;
  });
  it('should create an IO<A>', () => {
    const actual = mutateNumIO();
    const expected = mutateNumIO_();
    expect(actual).toBe(expected);
    expect(num).toBe(5);
  });
});
describe('noOpIO', () => {
  it('should return void', () => {
    const actual = (0, _IO.noOpIO)();
    const expected = undefined;
    expect(actual).toBe(expected);
  });
});
describe('runIO', () => {
  it('should run a possibly effectful function in IO', () => {
    let num = 0;
    const mutateNumIO = (0, _IO.newIO)(() => {
      num = 2;
    });
    const actual = (0, _IO.runIO)(mutateNumIO);
    const expected = mutateNumIO();
    expect(actual).toBe(expected);
    expect(num).toBe(2);
  });
});