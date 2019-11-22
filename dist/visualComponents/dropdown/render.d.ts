import { ControllerStateAndHelpers } from 'downshift';
import React, { ReactElement, ReactNode } from 'react';
import { DisplayType } from '@monorail/visualComponents/inputs/inputTypes';
import { DownshiftGetInputProps, DropdownType } from './helpers';
export declare interface RenderItemProps<T> {
    children?: ReactNode;
    disabled?: boolean;
    highlighted: boolean;
    item: T;
    selected: boolean;
}
export declare type CustomRenderHandlerHook<T> = (props: RenderHandlerProps<T>) => ReactElement;
export declare interface RenderHandlerProps<T> {
    customRender?: CustomRenderHandlerHook<T>;
    downshiftProps: ControllerStateAndHelpers<T>;
    handlerProps: DownshiftGetInputProps;
    display?: DisplayType;
    clearable?: boolean;
}
export declare interface RenderListProps<T> {
    children: ReactNode;
    downshiftProps: ControllerStateAndHelpers<T>;
}
export declare interface DropdownRender<T> {
    handler: (props: RenderHandlerProps<T>) => ReactElement;
    item: (props: RenderItemProps<T>) => ReactElement;
    list?: (props: RenderListProps<T>) => ReactElement;
}
export declare const DropdownPlaceholder: import("styled-components").StyledComponent<"span", import("../../helpers/theme").GlobalAppThemeInterface, {}, never>;
export declare const useCustomHandler: <T extends DropdownType>(customRender?: CustomRenderHandlerHook<T>) => (props: RenderHandlerProps<T>) => React.ReactElement<any, string | ((props: any) => React.ReactElement<any, string | any | (new (props: any) => React.Component<any, any, any>)> | null) | (new (props: any) => React.Component<any, any, any>)>;
export declare const useDefaultDropdownRender: <T extends DropdownType>() => DropdownRender<T>;
