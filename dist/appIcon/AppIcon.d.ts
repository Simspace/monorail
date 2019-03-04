/// <reference types="styled-components" />
import { AppOrAuthSubAppName } from '@monorail/CommonStyles';
import { CommonComponentType } from '@monorail/types';
declare type AppIconProps = CommonComponentType & {
    appName: AppOrAuthSubAppName;
};
export declare const AppIcon: import("styled-components").StyledComponentClass<AppIconProps, any, Pick<AppIconProps, "id" | "css" | "className" | "as" | "tabIndex" | "appName"> & {
    theme?: any;
}>;
export {};
