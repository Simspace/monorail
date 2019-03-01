import React, { CSSProperties, MouseEvent, ReactNode, StatelessComponent } from 'react';
import { SimpleInterpolation } from 'styled-components';
import { Sizes } from '@monorail/CommonStyles';
import { IconProps } from '@monorail/icon/Icon';
import { CommonComponentType } from '@monorail/types';
declare type BBListContainerProps = {
    css?: SimpleInterpolation;
};
declare type ListContainerProps = BBListContainerProps & {
    emptyText?: string;
};
export declare const ListContainer: StatelessComponent<ListContainerProps>;
export declare type LinkProps = {
    activeClassName?: string;
    activeStyle?: CSSProperties;
    onlyActiveOnIndex?: boolean;
    to?: string;
};
declare type ListSizeProps = {
    dense?: boolean;
};
declare type ListItemProps = LinkProps & ListSizeProps & CommonComponentType & {
    onClick?: (event: MouseEvent<HTMLDivElement>) => void;
    size?: Sizes;
    disabled?: boolean;
};
export declare const ListItemText: import("styled-components").StyledComponentClass<CommonComponentType, any, CommonComponentType & React.ClassAttributes<HTMLDivElement> & React.HTMLAttributes<HTMLDivElement>>;
export declare const ListItemPrimaryText: import("styled-components").StyledComponentClass<CommonComponentType, any, CommonComponentType & React.ClassAttributes<HTMLSpanElement> & React.HTMLAttributes<HTMLSpanElement>>;
export declare const ListItemSecondaryText: import("styled-components").StyledComponentClass<CommonComponentType, any, CommonComponentType & React.ClassAttributes<HTMLSpanElement> & React.HTMLAttributes<HTMLSpanElement>>;
export declare const ListItemGraphic: import("styled-components").StyledComponentClass<ListSizeProps & {
    icon: string;
} & IconProps, any, Pick<ListSizeProps & {
    icon: string;
} & IconProps, "css" | "icon" | "className" | "onClick" | "size" | "dense"> & {
    theme?: any;
}>;
export declare const ListItem: import("styled-components").StyledComponentClass<ListItemProps, any, Pick<ListItemProps, "id" | "css" | "className" | "onClick" | "size" | "as" | "tabIndex" | "to" | "disabled" | "dense" | "activeClassName" | "activeStyle" | "onlyActiveOnIndex"> & {
    theme?: any;
}>;
declare type SimpleListItemProps = CommonComponentType & LinkProps & {
    dense?: boolean;
    disabled?: boolean;
    leftIcon?: string;
    onClick?: (event: MouseEvent<HTMLDivElement>) => void;
    primaryText?: ReactNode;
    rightIcon?: string;
    secondaryText?: ReactNode;
    size?: Sizes;
    meta?: ReactNode;
};
export declare const SimpleListItem: StatelessComponent<SimpleListItemProps>;
export {};
