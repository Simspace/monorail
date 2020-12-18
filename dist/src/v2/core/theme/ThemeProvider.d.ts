import { ReactNode } from 'react';
import { GlobalAppThemeInterface } from '@monorail/helpers/theme';
/**
 * Composes styled-components and Material UI theme providers together. Allows for override of styled-component theme.
 */
export declare const ThemeProvider: (props: {
    children: ReactNode;
    theme: GlobalAppThemeInterface | ((theme: GlobalAppThemeInterface) => GlobalAppThemeInterface);
}) => JSX.Element;
