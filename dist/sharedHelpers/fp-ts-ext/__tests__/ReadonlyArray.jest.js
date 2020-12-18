"use strict";

var _fpTsImports = require("../../fp-ts-imports");

var _ReadonlyArray = require("../ReadonlyArray");

describe.each([{
  input: [],
  expected: _fpTsImports.O.none
}, {
  input: [42],
  expected: _fpTsImports.O.some({
    head: 42,
    tail: []
  })
}, {
  input: [42, 43],
  expected: _fpTsImports.O.some({
    head: 42,
    tail: [43]
  })
}, {
  input: [42, 43, 44],
  expected: _fpTsImports.O.some({
    head: 42,
    tail: [43, 44]
  })
}])('headAndTailS', ({
  input,
  expected
}) => {
  it(`should split the array ${JSON.stringify(input)} into ${JSON.stringify(expected)}`, () => {
    expect((0, _ReadonlyArray.headAndTailS)(input)).toEqual(expected);
  });
});
describe.each([{
  input: [],
  expected: _fpTsImports.O.none
}, {
  input: [42],
  expected: _fpTsImports.O.some([42, []])
}, {
  input: [42, 43],
  expected: _fpTsImports.O.some([42, [43]])
}, {
  input: [42, 43, 44],
  expected: _fpTsImports.O.some([42, [43, 44]])
}])('headAndTailT', ({
  input,
  expected
}) => {
  it(`should split the array ${JSON.stringify(input)} into ${JSON.stringify(expected)}`, () => {
    expect((0, _ReadonlyArray.headAndTailT)(input)).toEqual(expected);
  });
});
describe.each([{
  input: [],
  expected: _fpTsImports.O.none
}, {
  input: [42],
  expected: _fpTsImports.O.some({
    init: [],
    last: 42
  })
}, {
  input: [42, 43],
  expected: _fpTsImports.O.some({
    init: [42],
    last: 43
  })
}, {
  input: [42, 43, 44],
  expected: _fpTsImports.O.some({
    init: [42, 43],
    last: 44
  })
}])('initAndLastS', ({
  input,
  expected
}) => {
  it(`should split the array ${JSON.stringify(input)} into ${JSON.stringify(expected)}`, () => {
    expect((0, _ReadonlyArray.initAndLastS)(input)).toEqual(expected);
  });
});
describe.each([{
  input: [],
  expected: _fpTsImports.O.none
}, {
  input: [42],
  expected: _fpTsImports.O.some([[], 42])
}, {
  input: [42, 43],
  expected: _fpTsImports.O.some([[42], 43])
}, {
  input: [42, 43, 44],
  expected: _fpTsImports.O.some([[42, 43], 44])
}])('initAndLastT', ({
  input,
  expected
}) => {
  it(`should split the array ${JSON.stringify(input)} into ${JSON.stringify(expected)}`, () => {
    expect((0, _ReadonlyArray.initAndLastT)(input)).toEqual(expected);
  });
});