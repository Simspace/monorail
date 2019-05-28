/// <reference types="react" />
import { AppOrAuthSubAppName } from '@monorail/helpers/exports';
import { CommonComponentType } from '@monorail/types';
declare type AppIconProps = CommonComponentType & {
    appName: AppOrAuthSubAppName;
};
export declare const AppIcon: import("styled-components").StyledComponent<({ appName, cssOverrides, ...otherProps }: any) => JSX.Element, any, AppIconProps, never>;
export {};
