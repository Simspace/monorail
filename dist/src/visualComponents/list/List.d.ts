import { MouseEvent, ReactNode, ReactType, StatelessComponent, Ref, ForwardRefExoticComponent, RefAttributes, PropsWithoutRef } from 'react';
import { SimpleInterpolation } from 'styled-components';
import { Sizes, Colors } from '@monorail/helpers/exports';
import { CommonComponentType, LinkProps } from '@monorail/types';
import { IconType } from '@monorail/visualComponents/icon/IconType';
declare type BBListContainerProps = {
    cssOverrides?: SimpleInterpolation;
};
declare type ListContainerProps = BBListContainerProps & {
    emptyText?: string;
    as?: ReactType;
};
export declare const ListContainer: StatelessComponent<ListContainerProps>;
export declare const ListItemText: any;
export declare const ListItemPrimaryText: any;
export declare const ListItemSecondaryText: any;
export declare const ListItemGraphic: any;
export declare const ListItem: any;
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
    children?: string | number | ReactNode;
    ref?: Ref<any>;
};
export declare const SimpleListItem: ForwardRefExoticComponent<PropsWithoutRef<SimpleListItemProps> & RefAttributes<HTMLDivElement>>;
export {};
//# sourceMappingURL=List.d.ts.map