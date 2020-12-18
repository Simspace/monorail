import React, { ReactNode } from 'react';
import { AppOrAuthSubAppName } from '@monorail/helpers/appName';
import { CSSProp } from '@monorail/helpers/styled-components';
import { IconType } from '@monorail/visualComponents/icon/IconType';
export declare const HeaderTitle: import("styled-components").StyledComponent<"h1", import("../../helpers/theme").GlobalAppThemeInterface, {}, never>;
export declare type HeaderProps = {
    actions?: ReactNode;
    appIcon?: AppOrAuthSubAppName;
    children?: ReactNode;
    cssHeaderRow?: CSSProp;
    cssTitle?: CSSProp;
    iconLeft?: IconType | React.ReactElement;
    noBorder?: boolean;
    title: ReactNode;
};
export declare const Header: import("styled-components").StyledComponent<({ actions, appIcon, children, cssHeaderRow, cssTitle, iconLeft, noBorder, title, ...domProps }: HeaderProps) => JSX.Element, import("../../helpers/theme").GlobalAppThemeInterface, HeaderProps, never>;
