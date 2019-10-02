import { ControllerStateAndHelpers } from 'downshift';
import React, { ReactElement } from 'react';
import { CommonComponentType } from '@monorail/types';
import { DropdownItemType, DropdownItemValue } from '@monorail/visualComponents/dropdown/helpers';
import { ErrorProps } from '@monorail/visualComponents/inputs/StdErr';
export declare type RenderItemProps<D> = {
    item: D;
    selected: boolean;
    highlighted: boolean;
};
export declare type RenderHandlerProps<D> = {
    item: D | null;
    placeholder: string;
    isOpen: boolean;
    disabled: boolean;
};
export declare type DropdownChangeHandler<D> = (item?: D, downshiftProps?: ControllerStateAndHelpers<D>) => void;
export declare type DropdownProps<D = DropdownItemType> = CommonComponentType & ErrorProps & {
    itemToDropdownType?: (item: D) => DropdownItemType;
    renderItem?: (props: RenderItemProps<D>) => ReactElement;
    renderHandler?: (props: RenderHandlerProps<D>) => ReactElement;
    items: Array<D>;
    matchItem?: (item: D, text: string) => boolean;
    value?: DropdownItemValue;
    onChange?: DropdownChangeHandler<D>;
    document?: Document;
    placeholder?: string;
    disabled?: boolean;
    searchable?: boolean;
};
export declare const Dropdown: <D extends unknown = DropdownItemType>({ searchable, placeholder, disabled, items: collection, value, onChange, itemToDropdownType, matchItem, renderHandler, renderItem, err, ...domProps }: DropdownProps<D>) => React.ReactElement<DropdownProps<D>, string | ((props: any) => React.ReactElement<any, string | any | (new (props: any) => React.Component<any, any, any>)> | null) | (new (props: any) => React.Component<any, any, any>)>;
