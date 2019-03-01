import { AppOrAuthSubAppName } from '@monorail/CommonStyles';
import { CommonComponentType } from '@monorail/types';
import React, { ReactNode } from 'react';
import { SimpleInterpolation } from 'styled-components';
declare type Props = CommonComponentType & {
    actions?: ReactNode;
    appIcon?: AppOrAuthSubAppName;
    cssHeaderRow?: SimpleInterpolation;
    iconLeft?: {
        icon: string;
        onClick?: (e: React.MouseEvent<Element>) => void;
    };
    iconRight?: {
        icon: string;
        onClick?: (e: React.MouseEvent<Element>) => void;
    };
    noBorder?: boolean;
    title: string;
};
export declare const Header: import("styled-components").StyledComponentClass<Props, any, Pick<Props, "title" | "id" | "css" | "className" | "as" | "tabIndex" | "appIcon" | "iconLeft" | "iconRight" | "noBorder" | "actions" | "cssHeaderRow"> & {
    theme?: any;
}>;
export {};
