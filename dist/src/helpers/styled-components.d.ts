/// <reference types="react" />
import * as styledComponents from 'styled-components';
import { GlobalAppThemeInterface } from '@monorail/helpers/theme';
declare const styled: styledComponents.ThemedStyledInterface<GlobalAppThemeInterface>, css: styledComponents.ThemedCssFunction<GlobalAppThemeInterface>, createGlobalStyle: <P extends object = {}>(first: styledComponents.CSSObject | TemplateStringsArray | styledComponents.InterpolationFunction<styledComponents.ThemedStyledProps<P, GlobalAppThemeInterface>>, ...interpolations: any[]) => styledComponents.GlobalStyleComponent<P, GlobalAppThemeInterface>, keyframes: (strings: TemplateStringsArray | styledComponents.CSSKeyframes, ...interpolations: any[]) => styledComponents.Keyframes;
/** @deprecated Use ThemeProvider from v2 instead */
export declare const ThemeProvider: styledComponents.BaseThemeProviderComponent<GlobalAppThemeInterface, GlobalAppThemeInterface>;
export declare type CSSProp = styledComponents.CSSProp<GlobalAppThemeInterface>;
export declare type StyledProps<T extends HTMLElement = HTMLElement> = React.HTMLAttributes<T> & {
    css?: CSSProp;
};
export { css, createGlobalStyle, keyframes, styled };
export default styled;
