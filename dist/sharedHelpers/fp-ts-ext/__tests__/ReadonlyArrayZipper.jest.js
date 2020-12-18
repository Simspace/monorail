"use strict";

var _fpTsImports = require("../../fp-ts-imports");

var RAZ = _interopRequireWildcard(require("../ReadonlyArrayZipper"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const js = JSON.stringify;
describe.each([{
  input: 42,
  expected: {
    lefts: [],
    focus: 42,
    rights: []
  }
}])('of', ({
  input,
  expected
}) => {
  it(`should construct from ${js(input)} to ${js(expected)}`, () => {
    expect(RAZ.of(input)).toEqual(expected);
  });
});
describe.each([{
  input: {
    lefts: [1, 2, 3],
    focus: 4,
    rights: [5, 6]
  },
  expected: {
    lefts: [1, 2, 3],
    focus: 4,
    rights: [5, 6]
  }
}])('make', ({
  input,
  expected
}) => {
  it(`should construct from ${js(input)} to ${js(expected)}`, () => {
    expect(RAZ.make(input.lefts, input.focus, input.rights)).toEqual(expected);
  });
});
describe.each([{
  input: [],
  expected: _fpTsImports.O.none
}, {
  input: [42],
  expected: _fpTsImports.O.some(RAZ.of(42))
}, {
  input: [42, 43],
  expected: _fpTsImports.O.some(RAZ.make([], 42, [43]))
}, {
  input: [42, 43, 44],
  expected: _fpTsImports.O.some(RAZ.make([], 42, [43, 44]))
}])('fromReadonlyArray', ({
  input,
  expected
}) => {
  it(`should construct from ${js(input)} to ${js(expected)}`, () => {
    expect(RAZ.fromReadonlyArray(input)).toEqual(expected);
  });
});
describe.each([{
  input: [42],
  expected: RAZ.of(42)
}, {
  input: [42, 43],
  expected: RAZ.make([], 42, [43])
}, {
  input: [42, 43, 44],
  expected: RAZ.make([], 42, [43, 44])
}])('fromReadonlyNonEmptyArray', ({
  input,
  expected
}) => {
  it(`should construct from ${js(input)} to ${js(expected)}`, () => {
    expect(RAZ.fromReadonlyNonEmptyArray(input)).toEqual(expected);
  });
});
describe.each([{
  input: RAZ.of(42),
  expected: [{
    value: 42,
    isFocus: true
  }]
}, {
  input: RAZ.make([], 42, [43, 44]),
  expected: [{
    value: 42,
    isFocus: true
  }, {
    value: 43,
    isFocus: false
  }, {
    value: 44,
    isFocus: false
  }]
}, {
  input: RAZ.make([40, 41], 42, []),
  expected: [{
    value: 40,
    isFocus: false
  }, {
    value: 41,
    isFocus: false
  }, {
    value: 42,
    isFocus: true
  }]
}, {
  input: RAZ.make([40, 41], 42, [43, 44]),
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
    expect(RAZ.toReadonlyArrayWithFocusFlag(input)).toEqual(expected);
  });
});
describe.each([{
  input: RAZ.of(42),
  expected: [42]
}, {
  input: RAZ.make([], 42, [43, 44]),
  expected: [42, 43, 44]
}, {
  input: RAZ.make([40, 41], 42, []),
  expected: [40, 41, 42]
}, {
  input: RAZ.make([40, 41], 42, [43, 44]),
  expected: [40, 41, 42, 43, 44]
}])('toReadonlyArray', ({
  input,
  expected
}) => {
  it(`should convert from ${js(input)} to ${js(expected)}`, () => {
    expect(RAZ.toReadonlyArray(input)).toEqual(expected);
  });
});
describe.each([{
  input: RAZ.of(42),
  expected: _fpTsImports.O.none
}, {
  input: RAZ.make([], 42, [43, 44]),
  expected: _fpTsImports.O.none
}, {
  input: RAZ.make([40, 41], 42, [43, 44]),
  expected: _fpTsImports.O.some(RAZ.make([40], 41, [42, 43, 44]))
}, {
  input: RAZ.make([40, 41], 42, []),
  expected: _fpTsImports.O.some(RAZ.make([40], 41, [42]))
}])('moveLeft', ({
  input,
  expected
}) => {
  it(`should move left from ${js(input)} to ${js(expected)}`, () => {
    expect(RAZ.moveLeft(input)).toEqual(expected);
  });
});
describe.each([{
  input: RAZ.of(42),
  expected: RAZ.of(42)
}, {
  input: RAZ.make([], 42, [43, 44]),
  expected: RAZ.make([], 42, [43, 44])
}, {
  input: RAZ.make([40, 41], 42, [43, 44]),
  expected: RAZ.make([40], 41, [42, 43, 44])
}, {
  input: RAZ.make([40, 41], 42, []),
  expected: RAZ.make([40], 41, [42])
}])('moveLeftWithClamp', ({
  input,
  expected
}) => {
  it(`should move left from ${js(input)} to ${js(expected)}`, () => {
    expect(RAZ.moveLeftWithClamp(input)).toEqual(expected);
  });
});
describe.each([{
  input: RAZ.of(42),
  expected: _fpTsImports.O.none
}, {
  input: RAZ.make([], 42, [43, 44]),
  expected: _fpTsImports.O.some(RAZ.make([42], 43, [44]))
}, {
  input: RAZ.make([40, 41], 42, [43, 44]),
  expected: _fpTsImports.O.some(RAZ.make([40, 41, 42], 43, [44]))
}, {
  input: RAZ.make([40, 41], 42, []),
  expected: _fpTsImports.O.none
}])('moveRight', ({
  input,
  expected
}) => {
  it(`should move right from ${js(input)} to ${js(expected)}`, () => {
    expect(RAZ.moveRight(input)).toEqual(expected);
  });
});
describe.each([{
  input: RAZ.of(42),
  expected: RAZ.of(42)
}, {
  input: RAZ.make([], 42, [43, 44]),
  expected: RAZ.make([42], 43, [44])
}, {
  input: RAZ.make([40, 41], 42, [43, 44]),
  expected: RAZ.make([40, 41, 42], 43, [44])
}, {
  input: RAZ.make([40, 41], 42, []),
  expected: RAZ.make([40, 41], 42, [])
}])('moveRightWithClamp', ({
  input,
  expected
}) => {
  it(`should move right from ${js(input)} to ${js(expected)}`, () => {
    expect(RAZ.moveRightWithClamp(input)).toEqual(expected);
  });
});
describe.each([{
  input: RAZ.of(42),
  item: 42,
  expected: _fpTsImports.O.some(RAZ.of(42))
}, {
  input: RAZ.of(42),
  item: 43,
  expected: _fpTsImports.O.none
}, {
  input: RAZ.make([40, 41], 42, [43, 44, 45]),
  item: 42,
  expected: _fpTsImports.O.some(RAZ.make([40, 41], 42, [43, 44, 45]))
}, {
  input: RAZ.make([40, 41], 42, [43, 44, 45]),
  item: 44,
  expected: _fpTsImports.O.some(RAZ.make([40, 41, 42, 43], 44, [45]))
}, {
  input: RAZ.make([40, 41], 42, [43, 44, 45]),
  item: 41,
  expected: _fpTsImports.O.some(RAZ.make([40], 41, [42, 43, 44, 45]))
}, {
  input: RAZ.make([40, 41], 42, [43, 44, 45]),
  item: 50,
  expected: _fpTsImports.O.none
}])('find', ({
  input,
  item,
  expected
}) => {
  it(`should find right from ${js(input)} to ${js(expected)}`, () => {
    expect(RAZ.find(_fpTsImports.Eq.eqNumber)(item)(input)).toEqual(expected);
  });
});
describe.each([{
  input: RAZ.make([40, 41], 42, [43, 44]),
  f: x => x * -1,
  expected: RAZ.make([-40, -41], -42, [-43, -44])
}])('map', ({
  input,
  f,
  expected
}) => {
  it(`should map a function from inputs ${js(input)} to ${js(expected)}`, () => {
    expect(RAZ.map(f)(input)).toEqual(expected);
  });
});
describe.each([{
  input: RAZ.make(['a'], 'b', ['c', 'd']),
  f: (index, value) => ({
    index,
    value: value + value
  }),
  expected: RAZ.make([{
    value: 'aa',
    index: 0
  }], {
    value: 'bb',
    index: 1
  }, [{
    value: 'cc',
    index: 2
  }, {
    value: 'dd',
    index: 3
  }])
}])('mapWithIndex', ({
  input,
  f,
  expected
}) => {
  it(`should map a function from inputs ${js(input)} to ${js(expected)}`, () => {
    expect(RAZ.mapWithIndex(f)(input)).toEqual(expected);
  });
});
describe.each([{
  input: RAZ.make(['a'], 'b', ['c', 'd']),
  f: a => _fpTsImports.O.some(a + a),
  expected: _fpTsImports.O.some(RAZ.make(['aa'], 'bb', ['cc', 'dd']))
}])('traverse', ({
  input,
  f,
  expected
}) => {
  it(`should traverse a function from inputs ${js(input)} to ${js(expected)}`, () => {
    expect(RAZ.readonlyArrayZipper.traverse(_fpTsImports.O.option)(input, f)).toEqual(expected);
  });
});
describe.each([{
  input: RAZ.make([42], 43, [44, 45]),
  expected: 'ReadonlyArrayZipper([42], 43, [44, 45])'
}])('show', ({
  input,
  expected
}) => {
  it(`should show ${js(input)} as ${expected}`, () => {
    expect(RAZ.getShow(_fpTsImports.Show.showNumber).show(input)).toEqual(expected);
  });
});