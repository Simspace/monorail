import { ReactNode } from 'react';
import { SimpleInterpolation } from 'styled-components';
import { CommonComponentType } from '@monorail/types';
import { AppOrAuthSubAppName } from '@monorail/CommonStyles';
declare type Props = CommonComponentType & {
    actions?: ReactNode;
    appIcon?: AppOrAuthSubAppName;
    cssHeaderRow?: SimpleInterpolation;
    iconLeft?: string;
    noBorder?: boolean;
    title: string;
};
export declare const Header: import("styled-components").StyledComponentClass<Props, any, Pick<Props, "title" | "id" | "cssOverrides" | "className" | "as" | "tabIndex" | "appIcon" | "iconLeft" | "noBorder" | "actions" | "cssHeaderRow"> & {
    theme?: any;
}>;
export {};
