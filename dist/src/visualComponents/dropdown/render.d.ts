import { ControllerStateAndHelpers } from 'downshift';
import { ReactElement, ReactNode } from 'react';
import { DisplayType } from '@monorail/visualComponents/inputs/inputTypes';
import { DownshiftGetInputProps, DropdownType } from './helpers';
import { DropdownParser } from './parsers';
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
    items: Array<T>;
    parser: DropdownParser<T>;
}
export declare interface DropdownRender<T> {
    handler: (props: RenderHandlerProps<T>) => ReactElement;
    item: (props: RenderItemProps<T>) => ReactElement;
    list?: (props: RenderListProps<T>) => ReactElement;
}
export declare const DropdownPlaceholder: any;
export declare const useCustomHandler: <T extends DropdownType>(customRender?: CustomRenderHandlerHook<T>) => (props: RenderHandlerProps<T>) => ReactElement;
export declare const useDefaultDropdownRender: <T extends DropdownType>() => DropdownRender<T>;
//# sourceMappingURL=render.d.ts.map