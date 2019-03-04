import React, { MouseEvent, StatelessComponent, Ref } from 'react';
import { AppName, ElevationRange } from '@monorail/CommonStyles';
import { SimpleInterpolation } from 'styled-components';
import { CommonComponentType } from '@monorail/types';
export declare type BBCardBackgroundProps = CommonComponentType & {
    hover?: boolean;
    elevation?: ElevationRange;
    onClick?: (event: MouseEvent) => void;
    ref?: Ref<any>;
    cssCardContent?: SimpleInterpolation;
};
export declare const BBCardBackground: import("styled-components").StyledComponentClass<BBCardBackgroundProps, any, Pick<BBCardBackgroundProps, "id" | "ref" | "css" | "className" | "onClick" | "as" | "tabIndex" | "elevation" | "hover" | "cssCardContent"> & {
    theme?: any;
}>;
declare type BBCardBottomBorderProps = {
    accentColor?: string;
};
declare type BBCardHeaderProps = BBCardBottomBorderProps & {
    appIcon?: AppName;
    css?: SimpleInterpolation;
    iconLeft?: string;
    iconRight?: string;
    noBorder?: boolean;
    title: string;
};
export declare const BBCardHeader: StatelessComponent<BBCardHeaderProps>;
declare type BBCardGridProps = {
    cardWidth?: number;
    css?: SimpleInterpolation;
};
export declare const BBCardGrid: import("styled-components").StyledComponentClass<BBCardGridProps, any, BBCardGridProps & React.ClassAttributes<HTMLDivElement> & React.HTMLAttributes<HTMLDivElement>>;
export {};
