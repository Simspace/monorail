import { ControllerStateAndHelpers, DownshiftState, StateChangeOptions } from 'downshift';
import React, { Component, KeyboardEvent, ReactNode } from 'react';
import { CommonComponentType } from '@monorail/types';
import { TextField } from '@monorail/visualComponents/inputs/TextField';
export declare type DropdownItemValue = string | number | object | undefined;
export declare type DropdownItemType = {
    value: DropdownItemValue;
    label: string;
    disabled?: boolean;
};
export declare const isDropdownItem: (item: unknown) => boolean;
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
export declare type DropdownProps<D = DropdownItemType> = CommonComponentType & {
    itemToDropdownType?: (item: D) => DropdownItemType;
    renderItem?: (props: RenderItemProps<D>) => ReactNode;
    renderHandler?: (props: RenderHandlerProps<D>) => ReactNode;
    items: Array<D>;
    matchItem?: (item: D, text: string) => boolean;
    value?: DropdownItemValue;
    onChange?: (item?: D) => void;
    document?: Document;
    placeholder: string;
    disabled: boolean;
    searchable: boolean;
};
declare type StyledItemProps = {
    selected: boolean;
    highlighted: boolean;
    disabled?: boolean;
};
export declare const Item: import("styled-components").StyledComponent<"div", import("../../helpers/theme").GlobalAppThemeInterface, StyledItemProps, never>;
declare type DownshiftKeyboardEvent = KeyboardEvent & {
    preventDownshiftDefault?: boolean;
};
declare type DropdownState = {
    keyboardEventTime: number;
};
export declare class Dropdown<D = DropdownItemType> extends Component<DropdownProps<D>, DropdownState> {
    static defaultProps: {
        placeholder: string;
        disabled: boolean;
        searchable: boolean;
    };
    state: DropdownState;
    inputRef: React.RefObject<TextField>;
    menuRef: React.RefObject<HTMLDivElement>;
    getItemByValue: () => D | undefined;
    getDropdownItem: (item: unknown) => DropdownItemType;
    isActiveItem: (item: D) => boolean;
    matchItemByLabel: (item: D, text: string) => boolean;
    matchItem: (text: string) => (item: D) => boolean;
    getItems: (text?: string) => D[];
    /** Handle keyboard input for non search dropdown */
    getIndexToHighlight: (textValue: string, items: D[]) => number;
    handleNonSearchInputChange: (state: DownshiftState<D>, changes: StateChangeOptions<D>) => {
        isOpen: boolean;
        inputValue: string;
        type: import("downshift").StateChangeTypes;
        highlightedIndex?: number | null | undefined;
        selectedItem?: D | null | undefined;
    };
    setDefaultHighlightedIndex: (inputValue: string, downshiftProps: ControllerStateAndHelpers<D>) => void;
    onSearchInputChange: (inputValue: string, downshiftProps: ControllerStateAndHelpers<D>) => void;
    stateReducer: (state: DownshiftState<D>, changes: StateChangeOptions<D>) => StateChangeOptions<D>;
    getActiveIndex: (activeItems: D[], items: D[], downshiftProps: ControllerStateAndHelpers<D>) => number;
    cursorInteraction: (key: string, items: D[], downshiftProps: ControllerStateAndHelpers<D>) => void;
    onKeyDownHandler: (items: D[], downshiftProps: ControllerStateAndHelpers<D>) => (event: DownshiftKeyboardEvent) => void;
    renderDefaultHandler: (downshiftProps: ControllerStateAndHelpers<D>) => string;
    renderHandlerNode: (items: D[], downshiftProps: ControllerStateAndHelpers<D>) => React.ReactNode;
    renderDefaultItem: (props: RenderItemProps<DropdownItemType>) => JSX.Element;
    renderItemsList: (items: D[], downshiftProps: ControllerStateAndHelpers<D>) => React.ReactNode;
    renderMenu: (items: D[], downshiftProps: ControllerStateAndHelpers<D>) => React.ReactNode;
    render(): JSX.Element;
}
export {};
