import { ReactNode } from 'react';
import { SimpleInterpolation } from 'styled-components';
import { AppOrAuthSubAppName } from '@monorail/helpers/exports';
import { CommonComponentType } from '@monorail/types';
export declare const HeaderTitle: import("styled-components").StyledComponent<"h1", import("../helpers/theme").GlobalAppThemeInterface, {}, never>;
declare type Props = CommonComponentType & {
    actions?: ReactNode;
    appIcon?: AppOrAuthSubAppName;
    cssHeaderRow?: SimpleInterpolation;
    iconLeft?: string;
    noBorder?: boolean;
    title: ReactNode;
};
export declare const Header: import("styled-components").StyledComponent<({ actions, appIcon, children, cssOverrides, cssHeaderRow, iconLeft, noBorder, title, ...domProps }: any) => JSX.Element, import("../helpers/theme").GlobalAppThemeInterface, Props, never>;
export {};
