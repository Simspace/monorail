import { split, replace, splitName, findIndex, toLower, trim, join, } from '../strings';
describe('split', () => {
    it('split strings by a character separator', () => {
        const actual = split(/,/g)('t,e,s,t');
        const expected = ['t', 'e', 's', 't'];
        expect(actual).toEqual(expected);
    });
    it('split strings by a substring', () => {
        const actual = split(/_,_/g)('t_,_e_,_s_,_t');
        const expected = ['t', 'e', 's', 't'];
        expect(actual).toEqual(expected);
    });
});
describe('replace', () => {
    it('should replace a character', () => {
        const actual = replace(/,/g, '_')('t,e,s,t');
        const expected = 't_e_s_t';
        expect(actual).toBe(expected);
    });
    it('should replace a subtring', () => {
        const actual = replace(/_,_/g, '_')('t_,_e_,_s_,_t');
        const expected = 't_e_s_t';
        expect(actual).toBe(expected);
    });
    it('should omit a character when passed an empty string', () => {
        const actual = replace(/,/g, '')('t,e,s,t');
        const expected = 'test';
        expect(actual).toBe(expected);
    });
    it('should omit a substring when passed an empty string', () => {
        const actual = replace(/_,_/g, '')('t_,_e_,_s_,_t');
        const expected = 'test';
        expect(actual).toBe(expected);
    });
});
describe('splitName', () => {
    it('split a name into a first & last key-val pairs', () => {
        const actual = splitName('John Smith');
        const expected = { first: 'John', last: 'Smith' };
        expect(actual).toEqual(expected);
    });
});
describe('findIndex', () => {
    it('should return a none if a substring is not in a string', () => {
        const actual = findIndex('x')('John Smith').isNone();
        const expected = true;
        expect(actual).toBe(expected);
    });
    it('should return a none if a substring is not in a string', () => {
        const actual = findIndex('xxx')('John Smith').isNone();
        const expected = true;
        expect(actual).toBe(expected);
    });
    it('should return a some of an index if a char is in a string', () => {
        const opt = findIndex('h')('John Smith');
        const actual = opt.isSome() && opt.value === 2;
        const expected = true;
        expect(actual).toBe(expected);
    });
    it('should return a some of an index if a substring is in a string', () => {
        const opt = findIndex('ohn')('John Smith');
        const actual = opt.isSome() && opt.value === 1;
        const expected = true;
        expect(actual).toBe(expected);
    });
});
describe('toLower', () => {
    it('should lowercase a string', () => {
        const actual = toLower('John Smith');
        const expected = 'john smith';
        expect(actual).toBe(expected);
    });
});
describe('trim', () => {
    it('should remove whitespace from around a string', () => {
        const actual = trim('  John Smith    ');
        const expected = 'John Smith';
        expect(actual).toBe(expected);
    });
});
describe('join', () => {
    it('should join strings with no separator when passed empty string', () => {
        const actual = join('', ['t', 'e', 's', 't']);
        const expected = 'test';
        expect(actual).toBe(expected);
    });
    it('should join strings via a separator', () => {
        const actual = join(',', ['t', 'e', 's', 't']);
        const expected = 't,e,s,t';
        expect(actual).toBe(expected);
    });
});
//# sourceMappingURL=strings.jest.js.map