import { CSSProperties, ReactType } from 'react';
import { IndexLinkProps } from 'react-router';
import { FlattenInterpolation, SimpleInterpolation, ThemeProps } from 'styled-components';
import { GlobalAppThemeInterface } from '@monorail/helpers/theme';
export declare type CssOverridesType = SimpleInterpolation | FlattenInterpolation<ThemeProps<GlobalAppThemeInterface>>;
export declare type CommonComponentType = {
    as?: ReactType;
    className?: string;
    cssOverrides?: CssOverridesType;
    id?: string;
    tabIndex?: number;
};
export declare type TypographyComponent = {
    margin?: string;
};
export declare type LinkProps = {
    activeClassName?: string;
    activeStyle?: CSSProperties;
    onlyActiveOnIndex?: boolean;
    to?: IndexLinkProps['to'];
};
