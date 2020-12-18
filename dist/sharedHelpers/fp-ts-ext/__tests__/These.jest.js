"use strict";

var _monocleTs = require("monocle-ts");

var _fpTsImports = require("../../fp-ts-imports");

var _These = require("../These");

const testTypeToTheseLens = _monocleTs.Lens.fromProp()('these');

const testTypeToLeftPrism = testTypeToTheseLens.composePrism((0, _These.getLeftPrism)());
const testTypeToRightPrism = testTypeToTheseLens.composePrism((0, _These.getRightPrism)());
const testTypeToBothPrism = testTypeToTheseLens.composePrism((0, _These.getBothPrism)());
const testTypeToETraversal = testTypeToTheseLens.composeTraversal((0, _These.getETraversal)());
const testTypeToATraversal = testTypeToTheseLens.composeTraversal((0, _These.getATraversal)());
describe('These', () => {
  describe('getLeftPrism', () => {
    test.each([{
      input: {
        these: _fpTsImports.Th.left(42)
      },
      expected: _fpTsImports.O.some(42)
    }, {
      input: {
        these: _fpTsImports.Th.right('hi')
      },
      expected: _fpTsImports.O.none
    }, {
      input: {
        these: _fpTsImports.Th.both(42, 'hi')
      },
      expected: _fpTsImports.O.none
    }])('get', ({
      input,
      expected
    }) => {
      expect(testTypeToLeftPrism.getOption(input)).toEqual(expected);
    });
    test.each([{
      input: {
        these: _fpTsImports.Th.left(42)
      },
      expected: {
        these: _fpTsImports.Th.left(100)
      }
    }, {
      input: {
        these: _fpTsImports.Th.right('hi')
      },
      expected: {
        these: _fpTsImports.Th.right('hi')
      }
    }, {
      input: {
        these: _fpTsImports.Th.both(42, 'hi')
      },
      expected: {
        these: _fpTsImports.Th.both(42, 'hi')
      }
    }])('set', ({
      input,
      expected
    }) => {
      expect(testTypeToLeftPrism.set(100)(input)).toEqual(expected);
    });
    test.each([{
      input: {
        these: _fpTsImports.Th.left(42)
      },
      expected: {
        these: _fpTsImports.Th.left(84)
      }
    }, {
      input: {
        these: _fpTsImports.Th.right('hi')
      },
      expected: {
        these: _fpTsImports.Th.right('hi')
      }
    }, {
      input: {
        these: _fpTsImports.Th.both(42, 'hi')
      },
      expected: {
        these: _fpTsImports.Th.both(42, 'hi')
      }
    }])('modify', ({
      input,
      expected
    }) => {
      expect(testTypeToLeftPrism.modify(x => x * 2)(input)).toEqual(expected);
    });
  });
  describe('getRightPrism', () => {
    test.each([{
      input: {
        these: _fpTsImports.Th.left(42)
      },
      expected: _fpTsImports.O.none
    }, {
      input: {
        these: _fpTsImports.Th.right('hi')
      },
      expected: _fpTsImports.O.some('hi')
    }, {
      input: {
        these: _fpTsImports.Th.both(42, 'hi')
      },
      expected: _fpTsImports.O.none
    }])('get', ({
      input,
      expected
    }) => {
      expect(testTypeToRightPrism.getOption(input)).toEqual(expected);
    });
    test.each([{
      input: {
        these: _fpTsImports.Th.left(42)
      },
      expected: {
        these: _fpTsImports.Th.left(42)
      }
    }, {
      input: {
        these: _fpTsImports.Th.right('hi')
      },
      expected: {
        these: _fpTsImports.Th.right('abc')
      }
    }, {
      input: {
        these: _fpTsImports.Th.both(42, 'hi')
      },
      expected: {
        these: _fpTsImports.Th.both(42, 'hi')
      }
    }])('set', ({
      input,
      expected
    }) => {
      expect(testTypeToRightPrism.set('abc')(input)).toEqual(expected);
    });
    test.each([{
      input: {
        these: _fpTsImports.Th.left(42)
      },
      expected: {
        these: _fpTsImports.Th.left(42)
      }
    }, {
      input: {
        these: _fpTsImports.Th.right('hi')
      },
      expected: {
        these: _fpTsImports.Th.right('hihi')
      }
    }, {
      input: {
        these: _fpTsImports.Th.both(42, 'hi')
      },
      expected: {
        these: _fpTsImports.Th.both(42, 'hi')
      }
    }])('modify', ({
      input,
      expected
    }) => {
      expect(testTypeToRightPrism.modify(x => x + x)(input)).toEqual(expected);
    });
  });
  describe('getBothPrism', () => {
    test.each([{
      input: {
        these: _fpTsImports.Th.left(42)
      },
      expected: _fpTsImports.O.none
    }, {
      input: {
        these: _fpTsImports.Th.right('hi')
      },
      expected: _fpTsImports.O.none
    }, {
      input: {
        these: _fpTsImports.Th.both(42, 'hi')
      },
      expected: _fpTsImports.O.some([42, 'hi'])
    }])('get', ({
      input,
      expected
    }) => {
      expect(testTypeToBothPrism.getOption(input)).toEqual(expected);
    });
    test.each([{
      input: {
        these: _fpTsImports.Th.left(42)
      },
      expected: {
        these: _fpTsImports.Th.left(42)
      }
    }, {
      input: {
        these: _fpTsImports.Th.right('hi')
      },
      expected: {
        these: _fpTsImports.Th.right('hi')
      }
    }, {
      input: {
        these: _fpTsImports.Th.both(42, 'hi')
      },
      expected: {
        these: _fpTsImports.Th.both(100, 'abc')
      }
    }])('set', ({
      input,
      expected
    }) => {
      expect(testTypeToBothPrism.set([100, 'abc'])(input)).toEqual(expected);
    });
    test.each([{
      input: {
        these: _fpTsImports.Th.left(42)
      },
      expected: {
        these: _fpTsImports.Th.left(42)
      }
    }, {
      input: {
        these: _fpTsImports.Th.right('hi')
      },
      expected: {
        these: _fpTsImports.Th.right('hi')
      }
    }, {
      input: {
        these: _fpTsImports.Th.both(42, 'hi')
      },
      expected: {
        these: _fpTsImports.Th.both(84, 'hihi')
      }
    }])('modify', ({
      input,
      expected
    }) => {
      expect(testTypeToBothPrism.modify(([a, b]) => [a * 2, b + b])(input)).toEqual(expected);
    });
  });
  describe('getETraversal', () => {
    test.each([{
      input: {
        these: _fpTsImports.Th.left(10)
      },
      expected: {
        these: _fpTsImports.Th.left(42)
      }
    }, {
      input: {
        these: _fpTsImports.Th.both(10, 'hi')
      },
      expected: {
        these: _fpTsImports.Th.both(42, 'hi')
      }
    }, {
      input: {
        these: _fpTsImports.Th.right('hi')
      },
      expected: {
        these: _fpTsImports.Th.right('hi')
      }
    }])('set', ({
      input,
      expected
    }) => {
      const actual = testTypeToETraversal.set(42)(input);
      expect(actual).toEqual(expected);
    });
    test.each([{
      input: {
        these: _fpTsImports.Th.left(10)
      },
      expected: {
        these: _fpTsImports.Th.left(50)
      }
    }, {
      input: {
        these: _fpTsImports.Th.both(10, 'hi')
      },
      expected: {
        these: _fpTsImports.Th.both(50, 'hi')
      }
    }, {
      input: {
        these: _fpTsImports.Th.right('hi')
      },
      expected: {
        these: _fpTsImports.Th.right('hi')
      }
    }])('modify', ({
      input,
      expected
    }) => {
      const actual = testTypeToETraversal.modify(x => x * 5)(input);
      expect(actual).toEqual(expected);
    });
  });
  describe('getATraversal', () => {
    test.each([{
      input: {
        these: _fpTsImports.Th.left(10)
      },
      expected: {
        these: _fpTsImports.Th.left(10)
      }
    }, {
      input: {
        these: _fpTsImports.Th.both(10, 'hi')
      },
      expected: {
        these: _fpTsImports.Th.both(10, 'abc')
      }
    }, {
      input: {
        these: _fpTsImports.Th.right('hi')
      },
      expected: {
        these: _fpTsImports.Th.right('abc')
      }
    }])('set', ({
      input,
      expected
    }) => {
      const actual = testTypeToATraversal.set('abc')(input);
      expect(actual).toEqual(expected);
    });
    test.each([{
      input: {
        these: _fpTsImports.Th.left(10)
      },
      expected: {
        these: _fpTsImports.Th.left(10)
      }
    }, {
      input: {
        these: _fpTsImports.Th.both(10, 'hi')
      },
      expected: {
        these: _fpTsImports.Th.both(10, 'hihi')
      }
    }, {
      input: {
        these: _fpTsImports.Th.right('hi')
      },
      expected: {
        these: _fpTsImports.Th.right('hihi')
      }
    }])('modify', ({
      input,
      expected
    }) => {
      const actual = testTypeToATraversal.modify(x => x + x)(input);
      expect(actual).toEqual(expected);
    });
  });
});