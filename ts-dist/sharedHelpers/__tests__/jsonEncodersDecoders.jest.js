import * as t from 'io-ts';
import { right } from 'fp-ts/lib/Either';
import { some, none } from 'fp-ts/lib/Option';
import { createOptionFromJSON } from '@monorail/sharedHelpers/jsonEncodersDecoders';
const roundTrip = (codec) => {
    const OptionFromJSON = createOptionFromJSON(codec);
    return (ma) => {
        const stringified = JSON.stringify(ma);
        const parsed = JSON.parse(stringified);
        const result = OptionFromJSON.decode(parsed);
        const expected = right(ma);
        return { result, expected };
    };
};
const roundTripTest = roundTrip(t.number);
describe('createOptionFromJSON', () => {
    it('properly encodes and decodes Some', () => {
        const numOpt = some(1);
        const { result, expected } = roundTripTest(numOpt);
        expect(result).toEqual(expected);
    });
    it('properly encodes and decodes None', () => {
        const { result, expected } = roundTripTest(none);
        expect(result).toEqual(expected);
    });
});
//# sourceMappingURL=jsonEncodersDecoders.jest.js.map