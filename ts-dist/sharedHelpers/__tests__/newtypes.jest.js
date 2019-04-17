import { prismNaN } from '../newtypes';
describe('prismNaN', () => {
    describe('getOption', () => {
        it('should return a none if given a non-NaN value', () => {
            const actual = prismNaN.getOption(3).isNone();
            const expected = true;
            expect(actual).toEqual(expected);
        });
        it('should return a some if given a NaN value', () => {
            const oops = undefined;
            const actual = prismNaN.getOption(3 / oops).isSome();
            const expected = true;
            expect(actual).toEqual(expected);
        });
    });
});
//# sourceMappingURL=newtypes.jest.js.map