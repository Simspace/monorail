import { ControllerStateAndHelpers } from 'downshift';
import { Option } from 'fp-ts/lib/Option';
export declare type DropdownItemValue = string | number | object | undefined;
export declare type DropdownItemType = {
    value: DropdownItemValue;
    label: string;
    disabled?: boolean;
};
export declare const isDropdownItem: (item: unknown) => boolean;
export declare const getHighlightedItem: <D extends unknown = DropdownItemType>(items: D[], { highlightedIndex }: ControllerStateAndHelpers<D>) => Option<D>;
export declare const nextHighlightedIndex: (key: string, initial: number, max: number) => number;
export declare const parseAsDropdownItem: (item: unknown) => DropdownItemType;
