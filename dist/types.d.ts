import { ReactType } from 'react';
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
