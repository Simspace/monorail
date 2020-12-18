import React, { MouseEvent, ReactNode, Ref, StatelessComponent } from 'react';
import { SimpleInterpolation } from 'styled-components';
import { AppName, ElevationRange } from '@monorail/helpers/exports';
import { CommonComponentType } from '@monorail/types';
import { IconType } from '@monorail/visualComponents/icon/IconType';
export declare type BBCardBackgroundProps = CommonComponentType & {
    hover?: boolean;
    elevation?: ElevationRange;
    onClick?: (event: MouseEvent) => void;
    ref?: Ref<any>;
    cssCardContent?: SimpleInterpolation;
    children?: ReactNode;
};
export declare const BBCardBackground: import("styled-components").StyledComponent<React.ForwardRefExoticComponent<Pick<BBCardBackgroundProps, "className" | "id" | "tabIndex" | "elevation" | "children" | "onClick" | "as" | "cssOverrides" | "hover" | "cssCardContent"> & React.RefAttributes<HTMLDivElement>>, any, BBCardBackgroundProps, never>;
declare type BBCardBottomBorderProps = {
    accentColor?: string;
};
declare type BBCardHeaderProps = BBCardBottomBorderProps & {
    appIcon?: AppName;
    cssOverrides?: SimpleInterpolation;
    iconLeft?: IconType;
    iconRight?: IconType;
    noBorder?: boolean;
    title: string;
};
export declare const BBCardHeader: StatelessComponent<BBCardHeaderProps>;
declare type BBCardGridProps = {
    cardWidth?: number;
    cssOverrides?: SimpleInterpolation;
};
export declare const BBCardGrid: import("styled-components").StyledComponent<React.ForwardRefExoticComponent<{
    containerCssOverrides?: any;
    onScroll?: ((event: React.UIEvent<HTMLDivElement>) => void) | undefined;
    children?: React.ReactNode;
} & React.RefAttributes<HTMLDivElement>>, any, BBCardGridProps, never>;
export {};
