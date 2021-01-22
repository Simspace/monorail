import React, { ReactElement } from 'react';
import * as O from 'fp-ts/lib/Option';
import { CommonComponentType } from '@monorail/types';
import { DisplayType } from '@monorail/visualComponents/inputs/inputTypes';
import { DropdownStateType, DropdownType } from './helpers';
import { InteractionController } from './interaction';
import { DropdownParser } from './parsers';
import { DropdownRender } from './render';
export declare const ItemContainer: import("styled-components").StyledComponent<"div", any, CommonComponentType, never>;
export declare type DropdownSkinCommonType = {
    placeholder?: string;
    disabled?: boolean;
    clearable?: boolean;
    error?: O.Option<string>;
    required?: boolean;
    label?: string;
    display?: DisplayType;
    extraWidth?: number;
};
export declare type DropdownSkinHookProps<T> = {
    parser: DropdownParser<T>;
    interaction: InteractionController<T>;
} & DropdownSkinCommonType & CommonComponentType;
export declare type DropdownSkinComponent<T> = (props: DropdownSkinHookProps<T>) => (state: DropdownStateType<T>) => ReactElement;
declare type DropdownSkinProps<T> = {
    skin: DropdownSkinHookProps<T>;
    state: DropdownStateType<T>;
    render: DropdownRender<T>;
};
export declare const DropdownSkin: <T extends DropdownType>({ skin, state, render, }: DropdownSkinProps<T>) => React.ReactElement<DropdownSkinProps<T>, string | ((props: any) => React.ReactElement<any, string | any | (new (props: any) => React.Component<any, any, any>)> | null) | (new (props: any) => React.Component<any, any, any>)>;
export declare const useDropdownSkin: <T extends DropdownType>(skin: DropdownSkinHookProps<T>) => (state: DropdownStateType<T>) => ReactElement;
export declare const createDropdownCustomSkin: <T extends DropdownType>(render: Partial<DropdownRender<T>>) => DropdownSkinComponent<T>;
export {};
