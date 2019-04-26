import { Sizes } from '@monorail/helpers/exports';
import { IconProps } from '@monorail/icon/Icon';
import { CommonComponentType, LinkProps } from '@monorail/types';
import { MouseEvent, ReactNode, StatelessComponent } from 'react';
import { SimpleInterpolation } from 'styled-components';
declare type BBListContainerProps = {
    cssOverrides?: SimpleInterpolation;
};
declare type ListContainerProps = BBListContainerProps & {
    emptyText?: string;
};
export declare const ListContainer: StatelessComponent<ListContainerProps>;
declare type ListSizeProps = {
    dense?: boolean;
};
declare type ListItemProps = LinkProps & ListSizeProps & CommonComponentType & {
    onClick?: (event: MouseEvent<HTMLDivElement>) => void;
    size?: Sizes;
    disabled?: boolean;
};
export declare const ListItemText: import("styled-components").StyledComponent<"div", any, CommonComponentType, never>;
export declare const ListItemPrimaryText: import("styled-components").StyledComponent<"span", any, CommonComponentType, never>;
export declare const ListItemSecondaryText: import("styled-components").StyledComponent<"span", any, CommonComponentType, never>;
export declare const ListItemGraphic: import("styled-components").StyledComponent<({ dense, ...otherProps }: any) => JSX.Element, any, ListSizeProps & {
    icon: string;
} & IconProps, never>;
export declare const ListItem: import("styled-components").StyledComponent<({ cssOverrides, children, activeClassName, ...otherProps }: any) => JSX.Element, any, ListItemProps, never>;
export declare type SimpleListItemProps = CommonComponentType & LinkProps & {
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
