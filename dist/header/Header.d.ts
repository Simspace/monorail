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
    title: ReactNode;
};
export declare const Header: import("styled-components").StyledComponent<({ actions, appIcon, children, cssOverrides, cssHeaderRow, iconLeft, noBorder, title, ...otherProps }: any) => JSX.Element, any, Props, never>;
export {};
