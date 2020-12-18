import React from 'react';
import { CSSProp } from '@monorail/helpers/styled-components';
import { TextProps } from '@monorail/visualComponents/typography/Text';
export declare const StyledHeader: import("styled-components").StyledComponent<"div", import("../../../helpers/theme").GlobalAppThemeInterface, {
    hideBorder?: boolean | undefined;
}, never>;
export declare type HeaderAdornmentProps = {
    position: 'start' | 'end';
};
export declare const HeaderAdornment: import("styled-components").StyledComponent<"div", import("../../../helpers/theme").GlobalAppThemeInterface, HeaderAdornmentProps, never>;
export declare type HeaderProps = {
    hideBorder?: boolean;
    startAdornment?: React.ReactNode;
    endAdornment?: React.ReactNode;
    TitleTextProps?: Partial<TextProps & {
        css: CSSProp;
    }>;
    children: React.ReactNode;
};
/**
 * Styled header with support for start/end adornments
 *
 * TODO: It may make sense to default `<Text as="h2"/>` -DS 2020-11-05
 */
export declare function Header(props: HeaderProps): JSX.Element;
