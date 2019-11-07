import { MouseEvent, ReactNode, ReactType, StatelessComponent } from 'react';
import { SimpleInterpolation } from 'styled-components';
import { Omit } from 'typelevel-ts';
import { Sizes } from '@monorail/helpers/exports';
import { FCwDP } from '@monorail/sharedHelpers/react';
import { CommonComponentType, LinkProps } from '@monorail/types';
declare type BBListContainerProps = {
    cssOverrides?: SimpleInterpolation;
};
declare type ListContainerProps = BBListContainerProps & {
    emptyText?: string;
    as?: ReactType;
};
export declare const ListContainer: StatelessComponent<ListContainerProps>;
declare type ListSizeProps = {
    dense?: boolean;
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
export declare const ListItemGraphic: import("styled-components").StyledComponent<({ dense, ...domProps }: any) => JSX.Element, import("../../helpers/theme").GlobalAppThemeInterface, ListSizeProps & {
    icon: string;
} & CommonComponentType & {
    className?: string | undefined;
    icon: string;
    onClick?: import("../icon/Icon").OnClick | undefined;
    size?: number | undefined;
    title?: string | undefined;
}, never>;
export declare const ListItem: import("styled-components").StyledComponent<"div", import("../../helpers/theme").GlobalAppThemeInterface, ListItemProps, never>;
declare type PassedProps = Omit<CommonComponentType, 'as'> & LinkProps & {
    passedAs?: ReactType;
};
declare type DefaultProps = {
    dense: boolean;
    disabled: boolean;
    leftIcon: string;
    onClick?: (event: MouseEvent<HTMLDivElement>) => void;
    primaryText: ReactNode;
    rightIcon: string;
    secondaryText: ReactNode;
    size: Sizes;
    meta: ReactNode;
    isLink: boolean;
};
export declare type SimpleListItemProps = PassedProps & DefaultProps;
export declare const SimpleListItem: FCwDP<PassedProps, DefaultProps>;
export {};
