/// <reference types="react" />
import { CommonComponentType } from '@monorail/types';
import { AppOrAuthSubAppName } from '@monorail/CommonStyles';
declare type AppIconProps = CommonComponentType & {
    appName: AppOrAuthSubAppName;
};
export declare const AppIcon: import("styled-components").StyledComponent<({ appName, cssOverrides, ...otherProps }: any) => JSX.Element, any, AppIconProps, never>;
export {};
