"use strict";

var _fpTsImports = require("../../fp-ts-imports");

const js = JSON.stringify;
describe.each([{
  input: [42, 43, 44],
  expected: {
    tag: 'isReadonlyArray',
    value: [42, 43, 44]
  }
}])('makeWithNoFocus', ({
  input,
  expected
}) => {
  it(`should construct from ${js(input)} to ${js(expected)}`, () => {
    expect(_fpTsImports.RAOZ.makeWithNoFocus(input)).toEqual(expected);
  });
});
describe.each([{
  input: _fpTsImports.RAZ.make([40, 41], 42, [43, 44]),
  expected: {
    tag: 'isReadonlyArrayZipper',
    value: _fpTsImports.RAZ.make([40, 41], 42, [43, 44])
  }
}])('makeWithFocus', ({
  input,
  expected
}) => {
  it(`should construct from ${js(input)} to ${js(expected)}`, () => {
    expect(_fpTsImports.RAOZ.makeWithFocus(input)).toEqual(expected);
  });
});
describe.each([{
  input: 42,
  expected: _fpTsImports.RAOZ.makeWithFocus(_fpTsImports.RAZ.make([], 42, []))
}])('of', ({
  input,
  expected
}) => {
  it(`should construct from ${js(input)} to ${js(expected)}`, () => {
    expect(_fpTsImports.RAOZ.of(input)).toEqual(expected);
  });
});
describe.each([{
  input: _fpTsImports.RAOZ.makeWithFocus(_fpTsImports.RAZ.make([40, 41], 42, [43, 44])),
  expected: [{
    value: 40,
    isFocus: false
  }, {
    value: 41,
    isFocus: false
  }, {
    value: 42,
    isFocus: true
  }, {
    value: 43,
    isFocus: false
  }, {
    value: 44,
    isFocus: false
  }]
}])('toReadonlyArrayWithFocusFlag', ({
  input,
  expected
}) => {
  it(`should convert from ${js(input)} to ${js(expected)}`, () => {
    expect(_fpTsImports.RAOZ.toReadonlyArrayWithFocusFlag(input)).toEqual(expected);
  });
});
describe.each([{
  input: _fpTsImports.RAOZ.makeWithFocus(_fpTsImports.RAZ.make([40, 41], 42, [43, 44])),
  expected: [40, 41, 42, 43, 44]
}])('toReadonlyArray', ({
  input,
  expected
}) => {
  it(`should convert from ${js(input)} to ${js(expected)}`, () => {
    expect(_fpTsImports.RAOZ.toReadonlyArray(input)).toEqual(expected);
  });
});
describe.each([{
  input: _fpTsImports.RAOZ.makeWithFocus(_fpTsImports.RAZ.make([40, 41], 42, [43, 44])),
  expected: _fpTsImports.RAOZ.makeWithNoFocus([40, 41, 42, 43, 44])
}, {
  input: _fpTsImports.RAOZ.makeWithNoFocus([40, 41, 42, 43, 44]),
  expected: _fpTsImports.RAOZ.makeWithNoFocus([40, 41, 42, 43, 44])
}])('clearFocus', ({
  input,
  expected
}) => {
  it(`should clear focus from ${js(input)} to ${js(expected)}`, () => {
    expect(_fpTsImports.RAOZ.clearFocus(input)).toEqual(expected);
  });
});
describe.each([{
  input: _fpTsImports.RAOZ.makeWithFocus(_fpTsImports.RAZ.make([40, 41], 42, [43, 44])),
  item: 39,
  expected: _fpTsImports.O.none
}, {
  input: _fpTsImports.RAOZ.makeWithFocus(_fpTsImports.RAZ.make([40, 41], 42, [43, 44])),
  item: 41,
  expected: _fpTsImports.O.some(_fpTsImports.RAOZ.makeWithFocus(_fpTsImports.RAZ.make([40], 41, [42, 43, 44])))
}, {
  input: _fpTsImports.RAOZ.makeWithFocus(_fpTsImports.RAZ.make([40, 41], 42, [43, 44])),
  item: 42,
  expected: _fpTsImports.O.some(_fpTsImports.RAOZ.makeWithFocus(_fpTsImports.RAZ.make([40, 41], 42, [43, 44])))
}, {
  input: _fpTsImports.RAOZ.makeWithFocus(_fpTsImports.RAZ.make([40, 41], 42, [43, 44])),
  item: 44,
  expected: _fpTsImports.O.some(_fpTsImports.RAOZ.makeWithFocus(_fpTsImports.RAZ.make([40, 41, 42, 43], 44, [])))
}, {
  input: _fpTsImports.RAOZ.makeWithFocus(_fpTsImports.RAZ.make([2, 2], 3, [2, 2])),
  item: 3,
  expected: _fpTsImports.O.some(_fpTsImports.RAOZ.makeWithFocus(_fpTsImports.RAZ.make([2, 2], 3, [2, 2])))
}, {
  input: _fpTsImports.RAOZ.makeWithFocus(_fpTsImports.RAZ.make([2, 2], 3, [2, 2])),
  item: 2,
  expected: _fpTsImports.O.some(_fpTsImports.RAOZ.makeWithFocus(_fpTsImports.RAZ.make([2], 2, [3, 2, 2])))
}, {
  input: _fpTsImports.RAOZ.makeWithFocus(_fpTsImports.RAZ.make([1, 1], 3, [2, 2])),
  item: 2,
  expected: _fpTsImports.O.some(_fpTsImports.RAOZ.makeWithFocus(_fpTsImports.RAZ.make([1, 1, 3], 2, [2])))
}])('find', ({
  input,
  item,
  expected
}) => {
  it(`should find ${item} in ${js(input)} to ${js(expected)}`, () => {
    expect(_fpTsImports.RAOZ.find(_fpTsImports.Eq.eqNumber)(item)(input)).toEqual(expected);
  });
});
describe.each([{
  input: _fpTsImports.RAOZ.makeWithFocus(_fpTsImports.RAZ.make([40, 41], 42, [43, 44])),
  item: _fpTsImports.O.none,
  expected: _fpTsImports.RAOZ.makeWithNoFocus([40, 41, 42, 43, 44])
}, {
  input: _fpTsImports.RAOZ.makeWithFocus(_fpTsImports.RAZ.make([40, 41], 42, [43, 44])),
  item: _fpTsImports.O.some(39),
  expected: _fpTsImports.RAOZ.makeWithFocus(_fpTsImports.RAZ.make([40, 41], 42, [43, 44]))
}, {
  input: _fpTsImports.RAOZ.makeWithFocus(_fpTsImports.RAZ.make([40, 41], 42, [43, 44])),
  item: _fpTsImports.O.some(41),
  expected: _fpTsImports.RAOZ.makeWithFocus(_fpTsImports.RAZ.make([40], 41, [42, 43, 44]))
}, {
  input: _fpTsImports.RAOZ.makeWithFocus(_fpTsImports.RAZ.make([40, 41], 42, [43, 44])),
  item: _fpTsImports.O.some(42),
  expected: _fpTsImports.RAOZ.makeWithFocus(_fpTsImports.RAZ.make([40, 41], 42, [43, 44]))
}, {
  input: _fpTsImports.RAOZ.makeWithFocus(_fpTsImports.RAZ.make([40, 41], 42, [43, 44])),
  item: _fpTsImports.O.some(44),
  expected: _fpTsImports.RAOZ.makeWithFocus(_fpTsImports.RAZ.make([40, 41, 42, 43], 44, []))
}])('findOptionalOrKeep', ({
  input,
  item,
  expected
}) => {
  it(`should find ${item} in ${js(input)} to ${js(expected)}`, () => {
    expect(_fpTsImports.RAOZ.findOptionalOrKeep(_fpTsImports.Eq.eqNumber)(item)(input)).toEqual(expected);
  });
});
describe.each([{
  input: _fpTsImports.RAOZ.makeWithFocus(_fpTsImports.RAZ.make([40, 41], 42, [43, 44])),
  item: _fpTsImports.O.none,
  expected: _fpTsImports.RAOZ.makeWithNoFocus([40, 41, 42, 43, 44])
}, {
  input: _fpTsImports.RAOZ.makeWithFocus(_fpTsImports.RAZ.make([40, 41], 42, [43, 44])),
  item: _fpTsImports.O.some(39),
  expected: _fpTsImports.RAOZ.makeWithNoFocus([40, 41, 42, 43, 44])
}, {
  input: _fpTsImports.RAOZ.makeWithFocus(_fpTsImports.RAZ.make([40, 41], 42, [43, 44])),
  item: _fpTsImports.O.some(41),
  expected: _fpTsImports.RAOZ.makeWithFocus(_fpTsImports.RAZ.make([40], 41, [42, 43, 44]))
}, {
  input: _fpTsImports.RAOZ.makeWithFocus(_fpTsImports.RAZ.make([40, 41], 42, [43, 44])),
  item: _fpTsImports.O.some(42),
  expected: _fpTsImports.RAOZ.makeWithFocus(_fpTsImports.RAZ.make([40, 41], 42, [43, 44]))
}, {
  input: _fpTsImports.RAOZ.makeWithFocus(_fpTsImports.RAZ.make([40, 41], 42, [43, 44])),
  item: _fpTsImports.O.some(44),
  expected: _fpTsImports.RAOZ.makeWithFocus(_fpTsImports.RAZ.make([40, 41, 42, 43], 44, []))
}])('findOptionalOrClear', ({
  input,
  item,
  expected
}) => {
  it(`should find ${item} in ${js(input)} to ${js(expected)}`, () => {
    expect(_fpTsImports.RAOZ.findOptionalOrClear(_fpTsImports.Eq.eqNumber)(item)(input)).toEqual(expected);
  });
});
describe.each([{
  input: _fpTsImports.RAOZ.empty,
  expected: 'IsReadonlyArray([])'
}, {
  input: _fpTsImports.RAOZ.makeWithNoFocus([42, 43, 44, 45]),
  expected: 'IsReadonlyArray([42, 43, 44, 45])'
}, {
  input: _fpTsImports.RAOZ.makeWithFocus(_fpTsImports.RAZ.make([42], 43, [44, 45])),
  expected: 'IsReadonlyArrayZipper(ReadonlyArrayZipper([42], 43, [44, 45]))'
}])('show', ({
  input,
  expected
}) => {
  it(`should show ${js(input)} as ${expected}`, () => {
    expect(_fpTsImports.RAOZ.getShow(_fpTsImports.Show.showNumber).show(input)).toEqual(expected);
  });
});