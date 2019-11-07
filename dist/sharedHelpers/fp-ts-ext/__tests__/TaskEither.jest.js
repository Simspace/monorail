"use strict";

var _Either = require("fp-ts/lib/Either");

var _Task = require("fp-ts/lib/Task");

var _TaskEither = require("fp-ts/lib/TaskEither");

var _TaskEither2 = require("../TaskEither");

describe('constRunTaskEither', () => {
  it('should return the run function for a TaskEither<L, A>', () => {
    const te = new _TaskEither.TaskEither(new _Task.Task(() => Promise.resolve((0, _Either.right)(3))));
    const actual = (0, _TaskEither2.constRunTaskEither)(te)();
    const expected = te.run();
    expect(actual).toEqual(expected);
    expect(actual).toEqual(Promise.resolve((0, _Either.right)(3)));
  });
});
describe('newTaskEither', () => {
  it('should create a TaskEither<L, A>', () => {
    const te = new _TaskEither.TaskEither(new _Task.Task(() => Promise.resolve((0, _Either.left)('error'))));
    const te_ = (0, _TaskEither2.newTaskEither)(new _Task.Task(() => Promise.resolve((0, _Either.left)('error'))));
    const actual = te.run();
    const expected = te_.run();
    expect(actual).toEqual(expected);
    expect(actual).toEqual(Promise.resolve((0, _Either.left)('error')));
  });
});
describe('runTaskEither', () => {
  it('should run a TaskEither<L, A>', () => {
    const te = new _TaskEither.TaskEither(new _Task.Task(() => Promise.resolve((0, _Either.right)(2))));
    const actual = (0, _TaskEither2.runTaskEither)(te);
    const expected = te.run();
    expect(actual).toEqual(expected);
    expect(actual).toEqual(Promise.resolve((0, _Either.right)(2)));
  });
});