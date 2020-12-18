"use strict";

var TE = _interopRequireWildcard(require("fp-ts/TaskEither"));

var T = _interopRequireWildcard(require("fp-ts/Tree"));

var _fpTsImports = require("../../fp-ts-imports");

var _names = require("../../names");

var _Tree2 = require("../Tree");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

describe('Tree', () => {
  const baseForest = [// prettier-ignore
  T.make('a', [T.make('b', [T.make('d')]), T.make('c')])];
  describe('spliceWhere', () => {
    it('splices a forest at the node level', () => {
      const expected = [T.make('a', [T.make('c')])];
      const actual = (0, _Tree2.spliceWhere)(n => n.value === 'b')(_m => [])(baseForest);
      expect(actual).toEqual(expected);
    });
    it('splices from the bottom up', () => {
      const expected = [];
      const actual = (0, _Tree2.spliceWhere)(n => n.forest.length === 0)(_ => [])(baseForest);
      expect(actual).toEqual(expected);
    });
  });
  describe('spliceWhereAsync', () => {
    it('splices a forest at the node level async', async () => {
      const expected = [T.make('a', [T.make('c')])];
      const actual = await (0, _Tree2.spliceWhereAsync)(n => n.value === 'b')(_m => TE.of([]))(baseForest)();
      expect(actual).toEqualRight(expected);
    });
    it('splices from the bottom up async', async () => {
      const expected = [];
      const actual = await (0, _Tree2.spliceWhereAsync)(n => n.forest.length === 0)(_ => TE.of([]))(baseForest)();
      expect(actual).toEqualRight(expected);
    });
  });
  describe('duplicateWhere', () => {
    it('duplicates a matching node at the same level, excluding children', () => {
      const expected = [// prettier-ignore
      T.make('a', [T.make('b', [T.make('d')]), T.make('b'), T.make('c')])];
      const actual = (0, _Tree2.duplicateWhere)(n => n.value === 'b')()(baseForest);
      expect(actual).toEqual(expected);
    });
    it('allows modification of duplicated node', () => {
      const expected = [// prettier-ignore
      T.make('a', [T.make('b', [T.make('d')]), T.make('e'), T.make('c')])];
      const actual = (0, _fpTsImports.pipe)(baseForest, (0, _Tree2.duplicateWhere)(n => n.value === 'b')(_ => 'e'));
      expect(actual).toEqual(expected);
    });
  });
  describe('duplicateWhereAsync', () => {
    it('duplicates a matching node at the same level, excluding children, async', async () => {
      const expected = [// prettier-ignore
      T.make('a', [T.make('b', [T.make('d')]), T.make('b'), T.make('c')])];
      const actual = await (0, _Tree2.duplicateWhereAsync)(n => n.value === 'b')(TE.of)(baseForest)();
      expect(actual).toEqualRight(expected);
    });
    it('allows modification of duplicated node, async', async () => {
      const expected = [// prettier-ignore
      T.make('a', [T.make('b', [T.make('d')]), T.make('e'), T.make('c')])];
      const actual = await (0, _fpTsImports.pipe)(baseForest, (0, _Tree2.duplicateWhereAsync)(n => n.value === 'b')(_ => TE.of('e')))();
      expect(actual).toEqualRight(expected);
    });
  });
  describe('addChildWhere', () => {
    it('adds a child to nodes matching a predicate', () => {
      const expected = [// prettier-ignore
      T.make('a', [T.make('b', [T.make('d')]), T.make('c', [T.make('e')])])];
      const actual = (0, _Tree2.addChildWhere)(n => n.value === 'c')(() => T.make('e'))(baseForest);
      expect(actual).toEqual(expected);
    });
  });
  describe('addChildWhereAsync', () => {
    it('adds a child to nodes matching a predicate, async', async () => {
      const expected = [// prettier-ignore
      T.make('a', [T.make('b', [T.make('d')]), T.make('c', [T.make('e')])])];
      const actual = await (0, _Tree2.addChildWhereAsync)(n => n.value === 'c')(() => TE.of(T.make('e')))(baseForest)();
      expect(actual).toEqualRight(expected);
    });
  });
  describe('path operations', () => {
    describe('getPath', () => {
      it('should return an index-based path to a matching node, if it exists', () => {
        const cases = [['a', [0]], ['b', [0, 0]], ['c', [0, 1]], ['d', [0, 0, 0]]];
        cases.forEach(([target, expected]) => {
          (0, _names.name)(baseForest)(nbf => {
            const actual = (0, _Tree2.getPath)(n => n.value === target)(nbf);
            expect(actual).toEqualSome((0, _names.coerce)(expected));
          });
        });
      });
      it('should return a None if there is no matching node', () => {
        (0, _names.name)(baseForest)(nbf => {
          const actual = (0, _Tree2.getPath)(n => n.value === 'e')(nbf);
          expect(actual).toBeNone();
        });
      });
    });
    describe('moveNode', () => {
      it('should move a node from one place to another', () => {
        (0, _names.name)(baseForest)(nbf => {
          const nodePaths = (0, _fpTsImports.pipe)((0, _Tree2.getPath)(n => n.value === 'a')(nbf), _fpTsImports.O.bindTo('a'), _fpTsImports.O.apS('b', (0, _Tree2.getPath)(n => n.value === 'b')(nbf)), _fpTsImports.O.apS('c', (0, _Tree2.getPath)(n => n.value === 'c')(nbf)), _fpTsImports.O.apS('d', (0, _Tree2.getPath)(n => n.value === 'd')(nbf)));

          const move = (from, to) => (0, _fpTsImports.pipe)(nodePaths, _fpTsImports.O.chain(({
            [from]: from_,
            [to]: to_
          }) => (0, _Tree2.moveNode)(from_, to_)(nbf)));

          expect(move('a', 'a')).toBeNone();
          expect(move('a', 'b')).toBeNone();
          expect(move('a', 'c')).toBeNone();
          expect(move('a', 'd')).toBeNone();
          expect(move('b', 'a')).toEqual(_fpTsImports.O.some( // prettier-ignore
          [T.make('b', [T.make('d')]), T.make('a', [T.make('c')])]));
          expect(move('b', 'b')).toBeNone();
          expect(move('b', 'b')).toBeNone();
          expect(move('b', 'c')).toEqual(_fpTsImports.O.some( // prettier-ignore
          [T.make('a', [T.make('c'), T.make('b', [T.make('d')])])]));
          expect(move('b', 'd')).toBeNone();
          expect(move('c', 'a')).toEqual(_fpTsImports.O.some( // prettier-ignore
          [T.make('c'), T.make('a', [T.make('b', [T.make('d')])])]));
          expect(move('c', 'b')).toEqual(_fpTsImports.O.some( // prettier-ignore
          [T.make('a', [T.make('c'), T.make('b', [T.make('d')])])]));
          expect(move('c', 'c')).toBeNone();
          expect(move('c', 'd')).toEqual(_fpTsImports.O.some( // prettier-ignore
          [T.make('a', [T.make('b', [T.make('c'), T.make('d')])])]));
          expect(move('d', 'a')).toEqual(_fpTsImports.O.some( // prettier-ignore
          [T.make('d'), T.make('a', [T.make('b'), T.make('c')])]));
          expect(move('d', 'b')).toEqual(_fpTsImports.O.some( // prettier-ignore
          [T.make('a', [T.make('d'), T.make('b'), T.make('c')])]));
          expect(move('d', 'c')).toEqual(_fpTsImports.O.some( // prettier-ignore
          [T.make('a', [T.make('b'), T.make('d'), T.make('c')])]));
          expect(move('d', 'd')).toBeNone();
        });
      });
    });
  });
  describe('moveLeft', () => {
    it('should move left if not already the leftmost child', () => {
      const expected = [// prettier-ignore
      T.make('a', [T.make('c'), T.make('b', [T.make('d')])])];
      const actual = (0, _Tree2.moveLeft)(n => n.value === 'c')(baseForest);
      expect(actual).toEqual(_fpTsImports.O.some(expected));
    });
    it('should return None if move is impossible', () => {
      const actual = (0, _Tree2.moveLeft)(n => n.value === 'a')(baseForest);
      expect(actual).toBeNone();
    });
  });
  describe('moveUpBefore', () => {
    it('should move to parent level, before parent', () => {
      const expected = [// prettier-ignore
      T.make('a', [T.make('d'), T.make('b'), T.make('c')])];
      const actual = (0, _Tree2.moveUpBefore)(n => n.value === 'd')(baseForest);
      expect(actual).toEqual(_fpTsImports.O.some(expected));
    });
    it('should return None if move is impossible', () => {
      const actual = (0, _Tree2.moveUpBefore)(n => n.value === 'a')(baseForest);
      expect(actual).toBeNone();
    });
  });
  describe('moveRight', () => {
    it('should move right if not already the rightmost child', () => {
      const expected = [// prettier-ignore
      T.make('a', [T.make('c'), T.make('b', [T.make('d')])])];
      const actual = (0, _Tree2.moveRight)(n => n.value === 'b')(baseForest);
      expect(actual).toEqual(_fpTsImports.O.some(expected));
    });
    it('should return None if move is impossible', () => {
      const actual = (0, _Tree2.moveRight)(n => n.value === 'a')(baseForest);
      expect(actual).toBeNone();
    });
  });
  describe('moveUpAfter', () => {
    it('should move to parent level, after parent, if the rightmost child', () => {
      const expected = [// prettier-ignore
      T.make('a', [T.make('b'), T.make('d'), T.make('c')])];
      const actual = (0, _Tree2.moveUpAfter)(n => n.value === 'd')(baseForest);
      expect(actual).toEqual(_fpTsImports.O.some(expected));
    });
    it('should return None if move is impossible', () => {
      const actual = (0, _Tree2.moveUpAfter)(n => n.value === 'a')(baseForest);
      expect(actual).toBeNone();
    });
  });
  describe('moveInto', () => {
    it('should move into right nodes children, if one exists', () => {
      const expected = [// prettier-ignore
      T.make('a', [T.make('c', [T.make('b', [T.make('d')])])])];
      const actual = (0, _Tree2.moveInto)(n => n.value === 'b')(baseForest);
      expect(actual).toEqual(_fpTsImports.O.some(expected));
    });
    it('should return None if move is impossible', () => {
      const actual = (0, _Tree2.moveInto)(n => n.value === 'a')(baseForest);
      expect(actual).toBeNone();
    });
  });
  describe('positional checks', () => {
    const baseForest2 = [// prettier-ignore
    T.make('a', [T.make('b', [T.make('d')]), T.make('c')]), T.make('e')];
    describe('isLeftmost', () => {
      it('should tell if a node is leftmost', () => {
        expect((0, _Tree2.isLeftmost)(n => n.value === 'a')(baseForest2)).toBe(true);
        expect((0, _Tree2.isLeftmost)(n => n.value === 'b')(baseForest2)).toBe(true);
        expect((0, _Tree2.isLeftmost)(n => n.value === 'c')(baseForest2)).toBe(false);
        expect((0, _Tree2.isLeftmost)(n => n.value === 'd')(baseForest2)).toBe(true);
        expect((0, _Tree2.isLeftmost)(n => n.value === 'e')(baseForest2)).toBe(false);
      });
    });
    describe('isRightmost', () => {
      it('should tell if a node is rightmost', () => {
        expect((0, _Tree2.isRightmost)(n => n.value === 'a')(baseForest2)).toBe(false);
        expect((0, _Tree2.isRightmost)(n => n.value === 'b')(baseForest2)).toBe(false);
        expect((0, _Tree2.isRightmost)(n => n.value === 'c')(baseForest2)).toBe(true);
        expect((0, _Tree2.isRightmost)(n => n.value === 'd')(baseForest2)).toBe(true);
        expect((0, _Tree2.isRightmost)(n => n.value === 'e')(baseForest2)).toBe(true);
      });
    });
    describe('hasParent', () => {
      it('should tell if a node has a parent', () => {
        expect((0, _Tree2.hasParent)(n => n.value === 'a')(baseForest2)).toBe(false);
        expect((0, _Tree2.hasParent)(n => n.value === 'b')(baseForest2)).toBe(true);
        expect((0, _Tree2.hasParent)(n => n.value === 'c')(baseForest2)).toBe(true);
        expect((0, _Tree2.hasParent)(n => n.value === 'd')(baseForest2)).toBe(true);
        expect((0, _Tree2.hasParent)(n => n.value === 'e')(baseForest2)).toBe(false);
      });
    });
  });
});