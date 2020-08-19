import React, { ReactNode } from 'react';
import { AppOrAuthSubAppName } from '@monorail/helpers/appName';
import { CSSProp } from '@monorail/helpers/styled-components';
import { IconType } from '@monorail/visualComponents/icon/IconType';
export declare const HeaderTitle: any;
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
export declare const Header: any;
//# sourceMappingURL=Header.d.ts.map