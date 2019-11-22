import { Option } from 'fp-ts/lib/Option';
import React, { ReactElement } from 'react';
import { CommonComponentType } from '@monorail/types';
import { DisplayType } from '@monorail/visualComponents/inputs/inputTypes';
import { DropdownStateType, DropdownType } from './helpers';
import { InteractionController } from './interaction';
import { DropdownParser } from './parsers';
import { DropdownRender } from './render';
export declare type DropdownSkinCommonType = {
    placeholder?: string;
    disabled?: boolean;
    clearable?: boolean;
    document?: Document;
    error?: Option<string>;
    required?: boolean;
    label?: string;
    display?: DisplayType;
};
export declare type DropdownSkinHookProps<T> = {
    parser: DropdownParser<T>;
    interaction: InteractionController<T>;
} & DropdownSkinCommonType & CommonComponentType;
declare type DropdownSkinHookState<T> = (state: DropdownStateType<T>) => ReactElement;
export declare type DropdownSkinHook<T> = (props: DropdownSkinHookProps<T>) => DropdownSkinHookState<T>;
declare type DropdownSkinProps<T> = {
    skin: DropdownSkinHookProps<T>;
    state: DropdownStateType<T>;
    render: DropdownRender<T>;
};
export declare const DropdownSkin: <T extends DropdownType>({ skin, state, render, }: DropdownSkinProps<T>) => React.ReactElement<DropdownSkinProps<T>, string | ((props: any) => React.ReactElement<any, string | any | (new (props: any) => React.Component<any, any, any>)> | null) | (new (props: any) => React.Component<any, any, any>)>;
export declare const useDropdownSkin: <T extends DropdownType>(skin: DropdownSkinHookProps<T>) => DropdownSkinHookState<T>;
export declare const useDropdownCustomSkin: <T extends DropdownType>(render: Partial<DropdownRender<T>>) => DropdownSkinHook<T>;
export {};
