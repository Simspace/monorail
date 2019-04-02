"use strict";

var _taggedUnions = require("../taggedUnions");

describe('mkTaggedUnion', () => {
  const union = (0, _taggedUnions.mkTaggedUnion)()({
    Just: _taggedUnions.__,
    Nothing: _taggedUnions.__
  });
  describe('constructors', () => {
    it('should properly construct (Just)', () => {
      const actual = union.Just({
        value: 0
      });
      const expected = {
        tag: 'Just',
        value: 0
      };
      expect(actual).toEqual(expected);
    });
    it('should properly construct (Nothing)', () => {
      const actual = union.Nothing();
      const expected = {
        tag: 'Nothing'
      };
      expect(actual).toEqual(expected);
    });
  });
  describe('fold', () => {
    const f = union.fold({
      Just: x => x.value + 1,
      Nothing: () => 0
    });
    it('should properly fold the union, covering all cases (Just)', () => {
      const actual = f(union.Just({
        value: 3
      }));
      const expected = 4;
      expect(actual).toEqual(expected);
    });
    it('should properly fold the union, covering all cases (Nothing)', () => {
      const actual = f(union.Nothing());
      const expected = 0;
      expect(actual).toEqual(expected);
    });
  });
  describe('tags', () => {
    it('should return an array containing the data constructor tags', () => {
      const actual = union.tags;
      const expected = ['Just', 'Nothing'];
      expect(actual).toEqual(expected);
    });
  });
});
describe('mkActionsUnion', () => {
  const union = (0, _taggedUnions.mkActionsUnion)()({
    Yup: _taggedUnions.__,
    Nope: _taggedUnions.__
  });
  describe('constructors', () => {
    it('should properly construct (Yup)', () => {
      const actual = union.Yup({
        value: 0
      });
      const expected = {
        type: 'Yup',
        value: 0
      };
      expect(actual).toEqual(expected);
    });
    it('should properly construct (Nope)', () => {
      const actual = union.Nope();
      const expected = {
        type: 'Nope'
      };
      expect(actual).toEqual(expected);
    });
  });
  describe('fold', () => {
    const f = union.fold({
      Yup: x => x.value + 2,
      Nope: () => 1
    });
    it('should properly fold the union, covering all cases (Yup)', () => {
      const actual = f(union.Yup({
        value: 4
      }));
      const expected = 7;
      expect(actual).toEqual(expected);
    });
    it('should properly fold the union, covering all cases (Nope)', () => {
      const actual = f(union.Nope());
      const expected = 1;
      expect(actual).toEqual(expected);
    });
  });
  describe('tags', () => {
    it('should return an array containing the data constructor tags', () => {
      const actual = union.tags;
      const expected = ['Yup', 'Nope'];
      expect(actual).toEqual(expected);
    });
  });
});
describe('mkTaggedUnionCustom', () => {
  const union = (0, _taggedUnions.mkTaggedUnionCustom)()('kind', {
    Yeah: _taggedUnions.__,
    Nah: _taggedUnions.__
  });
  describe('constructors', () => {
    it('should properly construct (Yeah)', () => {
      const actual = union.Yeah({
        value: 0
      });
      const expected = {
        type: 'Yeah',
        value: 0
      };
      expect(actual).toEqual(expected);
    });
    it('should properly construct (Nah)', () => {
      const actual = union.Nah();
      const expected = {
        type: 'Nah'
      };
      expect(actual).toEqual(expected);
    });
  });
  describe('fold', () => {
    const f = union.fold({
      Yeah: x => x.value + 3,
      Nah: () => 2
    });
    it('should properly fold the union, covering all cases (Yup)', () => {
      const actual = f(union.Yeah({
        value: 5
      }));
      const expected = 8;
      expect(actual).toEqual(expected);
    });
    it('should properly fold the union, covering all cases (Nah)', () => {
      const actual = f(union.Nah());
      const expected = 2;
      expect(actual).toEqual(expected);
    });
  });
  describe('tags', () => {
    it('should return an array containing the data constructor tags', () => {
      const actual = union.tags;
      const expected = ['Yup', 'Nah'];
      expect(actual).toEqual(expected);
    });
  });
});