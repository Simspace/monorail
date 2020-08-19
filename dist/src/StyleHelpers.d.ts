import { FlattenInterpolation, SimpleInterpolation, ThemeProps } from 'styled-components';
import { GlobalAppThemeInterface } from '@monorail/helpers/theme';
export declare type CssOverrides = SimpleInterpolation | FlattenInterpolation<ThemeProps<GlobalAppThemeInterface>>;
export declare type StyledComponentCssOverrides = {
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
export declare const Div: any;
export declare const Form: any;
//# sourceMappingURL=StyleHelpers.d.ts.map