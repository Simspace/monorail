import { fold } from '../Either';
import { left, right } from 'fp-ts/lib/Either';
describe('fold (Either)', () => {
    const f = (l) => `Error: ${l}`;
    const g = (r) => `Value: ${r}`;
    it('should properly fold Eithers -- left', () => {
        const actual = fold(left('invalid'), f, g);
        const expected = 'Error: invalid';
        expect(actual).toBe(expected);
    });
    it('should properly fold Eithers -- left', () => {
        const actual = fold(right(9), f, g);
        const expected = 'Value: 9';
        expect(actual).toBe(expected);
    });
});
//# sourceMappingURL=Either.jest.js.map