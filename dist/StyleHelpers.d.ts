import { GlobalAppThemeInterface } from '@monorail/globalAppTheme';
import { FlattenInterpolation, SimpleInterpolation, ThemeProps } from 'styled-components';
export declare type CssOverrides = SimpleInterpolation | FlattenInterpolation<ThemeProps<GlobalAppThemeInterface>>;
export declare type StyledComponentCssOverrides = {
    cssOverrides?: CssOverrides;
};
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
export declare const Div: import("styled-components").StyledComponent<"div", any, Props, never>;
export declare const Form: import("styled-components").StyledComponent<"form", any, Props, never>;
export {};
