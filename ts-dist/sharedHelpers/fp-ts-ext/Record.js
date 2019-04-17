import { sort } from 'fp-ts/lib/Array';
import { forEach } from './Array';
import { isObject } from '../typeGuards';
/**
 * Retrieves the keys of an object while retaining keyof type information
 */
export const keys = (x) => Object.keys(x);
/**
 * Retrieves the value of a given property key from an object (curried)
 */
export const prop = (k) => (obj) => obj[k];
/**
 * Omits the key-value pairs from an object associated with the provided keys
 */
export const omit = (rec, ks) => {
    const { ...result } = rec;
    forEach(ks, k => delete result[k]);
    return result;
};
/**
 * Picks the key-value pairs from an object associated with the provided keys
 */
export const pick = (rec, ks) => {
    const result = {};
    forEach(ks, k => {
        result[k] = rec[k];
    });
    return result;
};
export const sortRecords = (ord) => (data) => sort(ord)(data);
/**
 * Type guard for `Record<PropertyKey, T>` from `object`
 */
export const isRecord = (x) => isObject(x);
//# sourceMappingURL=Record.js.map