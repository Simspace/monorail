import React, { MouseEvent, ReactNode, Ref } from 'react';
import { SimpleInterpolation } from 'styled-components';
import { ElevationRange } from '@monorail/helpers/exports';
import { CommonComponentType } from '@monorail/types';
export declare const AppContainer: import("styled-components").StyledComponent<"div", any, CommonComponentType, never>;
export declare const PageContent: import("styled-components").StyledComponent<"div", any, CommonComponentType, never>;
export declare const SectionContent: import("styled-components").StyledComponent<React.ForwardRefExoticComponent<{
    containerCssOverrides?: import("../../types").CssOverridesType;
    onScroll?: ((event: React.UIEvent<HTMLDivElement>) => void) | undefined;
    children?: React.ReactNode;
} & React.RefAttributes<HTMLDivElement>>, any, CommonComponentType, never>;
export declare type SectionProps = CommonComponentType & {
    hover?: boolean;
    elevation?: ElevationRange;
    onClick?: (event: MouseEvent) => void;
    ref?: Ref<any>;
    cssCardContent?: SimpleInterpolation;
    children?: ReactNode;
    flat?: boolean;
};
export declare const Section: import("styled-components").StyledComponent<React.ForwardRefExoticComponent<Pick<SectionProps, "className" | "id" | "tabIndex" | "children" | "onClick" | "cssOverrides" | "elevation" | "as" | "flat" | "hover" | "cssCardContent"> & React.RefAttributes<HTMLDivElement>>, any, SectionProps, never>;
