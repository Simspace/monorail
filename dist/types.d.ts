import { CSSProperties, ReactType } from 'react';
import { SimpleInterpolation } from 'styled-components';
export declare type CommonComponentType = {
    as?: ReactType;
    className?: string;
    cssOverrides?: SimpleInterpolation;
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
    to?: string;
};
