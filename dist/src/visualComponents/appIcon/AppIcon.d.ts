/// <reference types="react" />
import { AppOrAuthSubAppName } from '@monorail/helpers/exports';
export declare type AppIconProps = {
    appName: AppOrAuthSubAppName;
};
export declare const AppIcon: import("styled-components").StyledComponent<({ appName, ...otherProps }: AppIconProps) => JSX.Element, import("../../helpers/theme").GlobalAppThemeInterface, AppIconProps, never>;
