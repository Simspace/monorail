/// <reference types="react" />
import { CommonComponentType, LinkProps } from '@monorail/types';
export declare const PageLevelNavItem: import("styled-components").StyledComponent<({ children, ...otherProps }: any) => JSX.Element, any, {
    activeClassName: string;
} & CommonComponentType & LinkProps & {
    onClick?: ((event: unknown) => void) | undefined;
}, "activeClassName">;
export declare type Props = CommonComponentType & LinkProps & {
    onClick?: (event: unknown) => void;
};
