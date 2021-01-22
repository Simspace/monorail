"use strict";

var _Task = require("../Task");

describe('newTask', () => {
  const numTask = (0, _Task.newTask)(() => Promise.resolve(5));
  const numTask_ = (0, _Task.newTask)(() => Promise.resolve(5));
  it('should create a Task<A>', () => {
    const actual = numTask();
    const expected = numTask_();
    expect(actual).toEqual(expected);
    expect(actual).toEqual(Promise.resolve(5));
  });
});
describe('runTask', () => {
  it('should run a Task', () => {
    const t = (0, _Task.newTask)(() => Promise.resolve(2));
    const actual = (0, _Task.runTask)(t);
    const expected = t();
    expect(actual).toEqual(expected);
    expect(actual).toEqual(Promise.resolve(2));
  });
});