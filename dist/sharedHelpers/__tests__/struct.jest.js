"use strict";

var _struct = require("../struct");

describe(_struct.deepMerge.name, () => {
  const data = {
    one: {
      two: ['hello'],
      three: {
        four: 'goodbye'
      }
    }
  };
  it('deeply merges updater struct into original struct', () => {
    const actual = (0, _struct.deepMerge)(data, {
      one: {
        three: {
          four: 'adios'
        }
      }
    });
    expect(actual).toEqual({ ...data,
      one: { ...data.one,
        three: {
          four: 'adios'
        }
      }
    });
  });
  it('only merges plain objects (has Object as prototype), not e.g. Arrays or Dates', () => {
    const actual1 = (0, _struct.deepMerge)(data, {
      one: {
        two: ['there']
      }
    });
    expect(actual1).toEqual({ ...data,
      one: { ...data.one,
        two: ['there']
      }
    });
  });
});