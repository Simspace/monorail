/// <reference path="../../src/typings/cssprop.d.ts" />
/// <reference types="react" />
import { SimpleInterpolation } from 'styled-components';
declare type LogoBoxProps = {
    alignRight?: boolean;
    alignLeft?: boolean;
    cssOverrides?: SimpleInterpolation;
};
export declare const LogoBox: import("styled-components").StyledComponentClass<LogoBoxProps, any, LogoBoxProps & import("react").ClassAttributes<HTMLDivElement> & import("react").HTMLAttributes<HTMLDivElement>>;
export {};
