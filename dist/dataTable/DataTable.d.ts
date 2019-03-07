/// <reference path="../../src/typings/cssprop.d.ts" />
/// <reference types="react" />
import { CommonComponentType } from '@monorail/types';
declare type TableSizeType = {
    singleCollection?: boolean;
    dense?: boolean;
    collapsible?: boolean;
};
declare type TableDataType = {
    textAlign?: string;
    flex?: number | string;
    width?: number;
};
export declare const TableContainer: import("styled-components").StyledComponentClass<CommonComponentType, any, CommonComponentType & import("react").ClassAttributes<HTMLDivElement> & import("react").HTMLAttributes<HTMLDivElement>>;
export declare const TableHeaderContainer: import("styled-components").StyledComponentClass<CommonComponentType & TableSizeType, any, CommonComponentType & TableSizeType & import("react").ClassAttributes<HTMLDivElement> & import("react").HTMLAttributes<HTMLDivElement>>;
export declare const TableHeaderData: import("styled-components").StyledComponentClass<CommonComponentType & TableDataType & {
    hasSorter?: boolean | undefined;
}, any, CommonComponentType & TableDataType & {
    hasSorter?: boolean | undefined;
} & import("react").ClassAttributes<HTMLDivElement> & import("react").HTMLAttributes<HTMLDivElement>>;
export declare const TableBody: import("styled-components").StyledComponentClass<CommonComponentType, any, CommonComponentType & import("react").ClassAttributes<HTMLDivElement> & import("react").HTMLAttributes<HTMLDivElement>>;
export declare const TableRowContainer: import("styled-components").StyledComponentClass<CommonComponentType & TableSizeType, any, CommonComponentType & TableSizeType & import("react").ClassAttributes<HTMLDivElement> & import("react").HTMLAttributes<HTMLDivElement>>;
export declare const TableRowData: import("styled-components").StyledComponentClass<CommonComponentType & TableDataType, any, CommonComponentType & TableDataType & import("react").ClassAttributes<HTMLDivElement> & import("react").HTMLAttributes<HTMLDivElement>>;
export declare const TableRowGroupHeader: import("styled-components").StyledComponentClass<CommonComponentType & TableSizeType, any, CommonComponentType & TableSizeType & import("react").ClassAttributes<HTMLDivElement> & import("react").HTMLAttributes<HTMLDivElement>>;
export declare const TableFooterContainer: import("styled-components").StyledComponentClass<CommonComponentType & TableSizeType, any, CommonComponentType & TableSizeType & import("react").ClassAttributes<HTMLDivElement> & import("react").HTMLAttributes<HTMLDivElement>>;
export declare const TableFooterMeta: import("styled-components").StyledComponentClass<CommonComponentType, any, CommonComponentType & import("react").ClassAttributes<HTMLDivElement> & import("react").HTMLAttributes<HTMLDivElement>>;
export {};
