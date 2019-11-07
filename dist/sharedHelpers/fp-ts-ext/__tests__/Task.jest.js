"use strict";

var _Task = require("fp-ts/lib/Task");

var _Task2 = require("../Task");

describe('constRunTask', () => {
  const numTask = new _Task.Task(() => Promise.resolve(3));
  it('should return the run function for a Task<A>', () => {
    const actual = (0, _Task2.constRunTask)(numTask)();
    const expected = numTask.run();
    expect(actual).toEqual(expected);
    expect(actual).toEqual(Promise.resolve(3));
  });
});
describe('newTask', () => {
  const numTask = new _Task.Task(() => Promise.resolve(5));
  const numTask_ = (0, _Task2.newTask)(() => Promise.resolve(5));
  it('should create a Task<A>', () => {
    const actual = numTask.run();
    const expected = numTask_.run();
    expect(actual).toEqual(expected);
    expect(actual).toEqual(Promise.resolve(5));
  });
});
describe('runTask', () => {
  it('should run a Task', () => {
    const t = new _Task.Task(() => Promise.resolve(2));
    const actual = (0, _Task2.runTask)(t);
    const expected = t.run();
    expect(actual).toEqual(expected);
    expect(actual).toEqual(Promise.resolve(2));
  });
});