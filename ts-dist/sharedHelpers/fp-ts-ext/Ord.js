import { setoidRecordWithNameLower, setoidStrict } from './Setoid';
import { toLower } from '../strings';
/**
 * Determines ordering of two numbers (numeric comparison)
 */
export const numericCompare = (x, y) => x < y ? -1 : x > y ? 1 : 0;
/**
 * Ord instance for number
 */
export const ordNumeric = {
    ...setoidStrict,
    compare: numericCompare,
};
/**
 * Determines ordering of two strings (alphabetic comparison)
 */
export const alphaCompare = (x, y) => x < y ? -1 : x > y ? 1 : 0;
/**
 * Ord instance for string
 */
export const ordAlpha = {
    ...setoidStrict,
    compare: alphaCompare,
};
/**
 * Comparator for RecordWithName, comparing lowercase names alphabetically
 */
export const recordWithNameLowerComparator = (a, b) => {
    const nameA = toLower(a.name);
    const nameB = toLower(b.name);
    return nameA < nameB ? -1 : nameA > nameB ? 1 : 0;
};
/**
 * Ord instance for types extending the RecordWithName interface
 * that does comparisons & equality checking against the name prop
 * converted to lowercase
 */
export const ordRecordWithNameLower = {
    ...setoidRecordWithNameLower,
    compare: recordWithNameLowerComparator,
};
//# sourceMappingURL=Ord.js.map