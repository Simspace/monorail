import React, { MouseEvent, Ref, StatelessComponent, ReactNode } from 'react';
import { SimpleInterpolation } from 'styled-components';
import { CommonComponentType } from '@monorail/types';
import { AppName, ElevationRange } from '@monorail/helpers/exports';
export declare type BBCardBackgroundProps = CommonComponentType & {
    hover?: boolean;
    elevation?: ElevationRange;
    onClick?: (event: MouseEvent) => void;
    ref?: Ref<any>;
    cssCardContent?: SimpleInterpolation;
    children?: ReactNode;
};
export declare const BBCardBackground: import("styled-components").StyledComponent<React.ForwardRefExoticComponent<Pick<BBCardBackgroundProps, "id" | "children" | "className" | "tabIndex" | "onClick" | "cssOverrides" | "elevation" | "as" | "hover" | "cssCardContent"> & React.RefAttributes<HTMLDivElement>>, any, BBCardBackgroundProps, never>;
declare type BBCardBottomBorderProps = {
    accentColor?: string;
};
declare type BBCardHeaderProps = BBCardBottomBorderProps & {
    appIcon?: AppName;
    cssOverrides?: SimpleInterpolation;
    iconLeft?: string;
    iconRight?: string;
    noBorder?: boolean;
    title: string;
};
export declare const BBCardHeader: StatelessComponent<BBCardHeaderProps>;
declare type BBCardGridProps = {
    cardWidth?: number;
    cssOverrides?: SimpleInterpolation;
};
export declare const BBCardGrid: import("styled-components").StyledComponent<"div", any, BBCardGridProps, never>;
export {};
