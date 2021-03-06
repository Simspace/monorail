"use strict";

var _Either = require("fp-ts/lib/Either");

var _Task = require("../Task");

var _TaskEither = require("../TaskEither");

describe('newTaskEither', () => {
  it('should create a TaskEither<L, A>', () => {
    const te = (0, _TaskEither.newTaskEither)((0, _Task.newTask)(() => Promise.resolve((0, _Either.left)('error'))));
    const te_ = (0, _TaskEither.newTaskEither)((0, _Task.newTask)(() => Promise.resolve((0, _Either.left)('error'))));
    const actual = te();
    const expected = te_();
    expect(actual).toEqual(expected);
    expect(actual).toEqual(Promise.resolve((0, _Either.left)('error')));
  });
});
describe('runTaskEither', () => {
  it('should run a TaskEither<L, A>', () => {
    const te = (0, _TaskEither.newTaskEither)((0, _Task.newTask)(() => Promise.resolve((0, _Either.right)(2))));
    const actual = (0, _TaskEither.runTaskEither)(te);
    const expected = te();
    expect(actual).toEqual(expected);
    expect(actual).toEqual(Promise.resolve((0, _Either.right)(2)));
  });
});