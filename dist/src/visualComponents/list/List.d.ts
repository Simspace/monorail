import React, { ForwardRefExoticComponent, MouseEvent, PropsWithoutRef, ReactNode, ReactType, Ref, RefAttributes, StatelessComponent } from 'react';
import { SimpleInterpolation } from 'styled-components';
import { Colors, Sizes } from '@monorail/helpers/exports';
import { CommonComponentType, LinkProps } from '@monorail/types';
import { IconProps } from '@monorail/visualComponents/icon/Icon';
import { IconType } from '@monorail/visualComponents/icon/IconType';
declare type BBListContainerProps = {
    cssOverrides?: SimpleInterpolation;
};
declare type ListContainerProps = BBListContainerProps & {
    emptyText?: string;
    as?: ReactType;
};
export declare const ListContainer: StatelessComponent<ListContainerProps>;
declare type ListSizeProps = {
    $dense?: boolean;
};
declare type ListItemProps = LinkProps & ListSizeProps & CommonComponentType & {
    onClick?: (event: MouseEvent<HTMLDivElement>) => void;
    size?: Sizes;
    disabled?: boolean;
    isLink?: boolean;
};
export declare const ListItemText: import("styled-components").StyledComponent<"div", import("../../helpers/theme").GlobalAppThemeInterface, CommonComponentType, never>;
export declare const ListItemPrimaryText: import("styled-components").StyledComponent<"span", import("../../helpers/theme").GlobalAppThemeInterface, CommonComponentType, never>;
export declare const ListItemSecondaryText: import("styled-components").StyledComponent<"span", import("../../helpers/theme").GlobalAppThemeInterface, CommonComponentType, never>;
declare type ListItemGraphicProps = IconProps & ListSizeProps;
export declare const StyledListItemIcon: import("styled-components").StyledComponent<React.ForwardRefExoticComponent<CommonComponentType & {
    className?: string | undefined;
    icon: IconType;
    onClick?: import("../icon/Icon").OnClick | undefined;
    size?: number | undefined;
    title?: string | undefined;
    color?: Colors | undefined;
} & React.RefAttributes<HTMLElement>>, import("../../helpers/theme").GlobalAppThemeInterface, ListItemGraphicProps, never>;
export declare const ListItemGraphic: (props: ListItemGraphicProps) => JSX.Element;
export declare const ListItem: import("styled-components").StyledComponent<"div", import("../../helpers/theme").GlobalAppThemeInterface, ListItemProps, never>;
export declare type PassedProps = Omit<CommonComponentType, 'as'> & LinkProps & {
    passedAs?: ReactType;
};
export declare type SimpleListItemProps = PassedProps & {
    dense?: boolean;
    disabled?: boolean;
    leftIcon?: IconType;
    onClick?: (event: MouseEvent<HTMLDivElement>) => void;
    onMouseEnter?: (event: MouseEvent<HTMLDivElement>) => void;
    onMouseLeave?: (event: MouseEvent<HTMLDivElement>) => void;
    primaryText?: ReactNode;
    rightIcon?: IconType;
    secondaryText?: ReactNode;
    size?: Sizes;
    meta?: ReactNode;
    isLink?: boolean;
    leftIconColor?: Colors;
    rightIconColor?: Colors;
    autoFocus?: boolean;
    children?: string | number | ReactNode;
    ref?: Ref<any>;
};
export declare const SimpleListItem: ForwardRefExoticComponent<PropsWithoutRef<SimpleListItemProps> & RefAttributes<HTMLDivElement>>;
export {};
