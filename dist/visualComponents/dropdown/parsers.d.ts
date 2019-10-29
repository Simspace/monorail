import { Undefinedable } from '@monorail/sharedHelpers/typeLevel';
import { DropdownItemValue, DropdownType } from './helpers';
declare type DropdownParserProps<T> = {
    value: (item: T) => Undefinedable<DropdownItemValue>;
    label: (item: T) => string;
};
export declare type DropdownParser<T> = DropdownParserProps<T> & {
    isActive: (item: T) => boolean;
    includes: (target: string) => (source: T) => boolean;
    compare: (target: T | DropdownItemValue) => (source: T | DropdownItemValue) => boolean;
};
export declare type DropdownParserHook<T> = (props?: Partial<DropdownParserProps<T>>) => DropdownParser<T>;
export declare function useDropdownTypeParser<T extends DropdownType>(props?: Partial<DropdownParserProps<T>>): DropdownParser<T>;
export declare const useCustomParser: <T extends DropdownType>(options: Partial<DropdownParserProps<T>> & Partial<DropdownParser<T>>) => () => {
    isActive: (item: T) => boolean;
    includes: (target: string) => (source: T) => boolean;
    compare: (target: string | number | T) => (source: string | number | T) => boolean;
    value: (item: T) => string | number | undefined;
    label: (item: T) => string;
};
export {};
