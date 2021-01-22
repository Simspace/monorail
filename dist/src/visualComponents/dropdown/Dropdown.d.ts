import React, { ReactElement } from 'react';
import { ControllerStateAndHelpers } from 'downshift';
import { Option } from 'fp-ts/lib/Option';
import { CssOverrides } from '@monorail/StyleHelpers';
import { CommonComponentType } from '@monorail/types';
import { DropdownItemValue, DropdownType } from '@monorail/visualComponents/dropdown/helpers';
import { BehaviorControllerHook } from './behavior';
import { KeyboardInteractionHook } from './interaction';
import { DropdownParserHook } from './parsers';
import { DropdownSkinCommonType, DropdownSkinComponent } from './skin';
export declare type DropdownChangeHandler<D> = (item?: D, downshiftProps?: ControllerStateAndHelpers<D>) => void;
export declare type DropdownHooks<D extends DropdownType> = {
    behavior?: BehaviorControllerHook<D>;
    interaction?: KeyboardInteractionHook<D>;
    parser?: DropdownParserHook<D>;
    skin?: DropdownSkinComponent<D>;
};
export declare type DropdownProps<D extends DropdownType> = CommonComponentType & DropdownHooks<D> & DropdownSkinCommonType & {
    items: Array<D>;
    value?: D | DropdownItemValue;
    onChange?: DropdownChangeHandler<D>;
    triggerOnAllSelections?: boolean;
    onBlur?: VoidFunction;
    error?: Option<string>;
    required?: boolean;
    cssOverrides?: CssOverrides;
};
export declare const DropdownContainer: import("styled-components").StyledComponent<"div", any, CommonComponentType, never>;
export declare const Dropdown: <D extends DropdownType>({ label, placeholder, disabled, clearable, extraWidth, items: collection, value, onChange, triggerOnAllSelections, behavior, skin, parser, interaction, error, required, display, cssOverrides, ...domProps }: DropdownProps<D>) => React.ReactElement<DropdownProps<D>, string | ((props: any) => React.ReactElement<any, string | any | (new (props: any) => React.Component<any, any, any>)> | null) | (new (props: any) => React.Component<any, any, any>)>;
