import { ControllerStateAndHelpers, GetInputPropsOptions, PropGetters } from 'downshift';
import { KeyboardEvent } from 'react';
import { TextFieldProps } from '@monorail/visualComponents/inputs/TextField';
export declare type DropdownItemValue = string | number;
export declare type DropdownItemType = {
    disabled?: boolean;
    label: string;
    value?: DropdownItemValue;
};
export declare type DropdownType = object | DropdownItemValue;
export declare type DropdownStateType<T> = {
    downshiftProps: ControllerStateAndHelpers<T>;
    items: Array<T>;
};
/** Partial definitions to Solve Downshift typing */
export declare type DownshiftGetInputProps = GetInputPropsOptions & Partial<TextFieldProps>;
export declare type DownshiftRootPropsGetter<D> = PropGetters<D>['getRootProps'];
export declare type DownshiftItemPropsGetter<D> = PropGetters<D>['getItemProps'];
export declare type DownshiftMenuPropsGetter<D> = PropGetters<D>['getMenuProps'];
export declare type DownshiftKeyboardEvent = KeyboardEvent & {
    preventDownshiftDefault?: boolean;
};
export declare const isDropdownItem: (item: unknown) => item is DropdownItemType;
export declare const nextHighlightedIndex: (key: string, initial: number, max: number) => number;
//# sourceMappingURL=helpers.d.ts.map