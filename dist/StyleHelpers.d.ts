import React from 'react';
import { FlattenInterpolation, SimpleInterpolation, ThemeProps } from 'styled-components';
import { GlobalAppThemeInterface } from '@monorail/globalAppTheme';
export declare type CssOverrides = SimpleInterpolation | FlattenInterpolation<ThemeProps<GlobalAppThemeInterface>>[];
export declare type StyledComponentCssOverrides = {
    cssOverrides?: CssOverrides;
};
/**
 * TODO: Get rid of this. This was something Dan added that isn't correctly typed. Any references should be replaced
 * with styled<Props, 'div'>('div')
 */
export declare const styled: <P, E = HTMLDivElement>(tagName: string | React.ComponentClass<P, any> | React.FunctionComponent<P>) => import("styled-components").ThemedStyledFunction<P & React.HTMLProps<E>, any, any>;
declare type Props = {
    cssOverrides?: CssOverrides;
};
/**
 * The Div helper is a component that accepts `css` prop so we can easily inline CSS Objects with TypeScript support.
 * The `cssLoose` property offers a relaxed typing for arbitrary string keys (escape hatch, e.g. `& > #blah`)
 *
 * Usage:
 ```
  <Div
    cssOverrides={{ display: 'flex'}}
    cssLoose={{ '& > div': { display: 'flex' }}}
  />
 ```
 */
export declare const Div: import("styled-components").StyledComponentClass<Props, any, Props & React.ClassAttributes<HTMLDivElement> & React.HTMLAttributes<HTMLDivElement>>;
export declare const Form: import("styled-components").StyledComponentClass<Props, any, Props & React.ClassAttributes<HTMLFormElement> & React.FormHTMLAttributes<HTMLFormElement>>;
export {};
