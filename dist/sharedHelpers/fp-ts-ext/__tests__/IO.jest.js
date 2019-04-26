"use strict";

var _IO = require("fp-ts/lib/IO");

var _IO2 = require("../IO");

describe('constRunIO', () => {
  let num = 0;
  const mutateNumIO = new _IO.IO(() => {
    num = 3;
  });
  it('should return the run function for an IO<A>', () => {
    const actual = (0, _IO2.constRunIO)(mutateNumIO)();
    const expected = mutateNumIO.run();
    expect(actual).toBe(expected);
    expect(num).toBe(3);
  });
});
describe('newIO', () => {
  let num = 0;
  const mutateNumIO = new _IO.IO(() => {
    num = 5;
  });
  const mutateNumIO_ = (0, _IO2.newIO)(() => {
    num = 5;
  });
  it('should create an IO<A>', () => {
    const actual = mutateNumIO.run();
    const expected = mutateNumIO_.run();
    expect(actual).toBe(expected);
    expect(num).toBe(5);
  });
});
describe('noOpIO', () => {
  it('should be a noOp function', () => {
    const actual = _IO2.noOpIO.run.toString();

    const expected = 'function constVoid() {}';
    expect(actual).toBe(expected);
  });
  it('should return void', () => {
    const actual = _IO2.noOpIO.run();

    const expected = undefined;
    expect(actual).toBe(expected);
  });
});
describe('runIO', () => {
  it('should run a possibly effectful function in IO', () => {
    let num = 0;
    const mutateNumIO = new _IO.IO(() => {
      num = 2;
    });
    const actual = (0, _IO2.runIO)(mutateNumIO);
    const expected = mutateNumIO.run();
    expect(actual).toBe(expected);
    expect(num).toBe(2);
  });
});