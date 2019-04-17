import { isFalsy } from '../typeGuards';
describe('isFalsy', () => {
    it('should return false when given a truthy value', () => {
        const actual = isFalsy(1);
        const expected = false;
        expect(actual).toBe(expected);
    });
    it('should return true when given false', () => {
        const actual = isFalsy(false);
        const expected = true;
        expect(actual).toBe(expected);
    });
    it('should return true when given an empty string', () => {
        const actual = isFalsy('');
        const expected = true;
        expect(actual).toBe(expected);
    });
    it('should return true when given NaN', () => {
        const invalidNum = undefined;
        const _NaN = (3 / invalidNum);
        const actual = isFalsy(_NaN);
        const expected = true;
        expect(actual).toEqual(expected);
    });
    it('should return true when given null', () => {
        const actual = isFalsy(null);
        const expected = true;
        expect(actual).toBe(expected);
    });
    it('should return true when given undefined', () => {
        const actual = isFalsy(undefined);
        const expected = true;
        expect(actual).toBe(expected);
    });
});
//# sourceMappingURL=typeGuards.jest.js.map