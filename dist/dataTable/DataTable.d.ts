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
export declare const TableContainer: import("styled-components").StyledComponent<"div", any, CommonComponentType, never>;
export declare const TableHeaderContainer: import("styled-components").StyledComponent<"div", any, CommonComponentType & TableSizeType, never>;
export declare const TableHeaderData: import("styled-components").StyledComponent<"div", any, CommonComponentType & TableDataType & {
    hasSorter?: boolean | undefined;
}, never>;
export declare const TableBody: import("styled-components").StyledComponent<"div", any, CommonComponentType, never>;
export declare const TableRowContainer: import("styled-components").StyledComponent<"div", any, CommonComponentType & TableSizeType, never>;
export declare const TableRowData: import("styled-components").StyledComponent<"div", any, CommonComponentType & TableDataType, never>;
export declare const TableRowGroupHeader: import("styled-components").StyledComponent<"div", any, CommonComponentType & TableSizeType, never>;
export declare const TableEmptyMessage: import("styled-components").StyledComponent<"div", any, {}, never>;
export declare const TableFooterContainer: import("styled-components").StyledComponent<"div", any, CommonComponentType & TableSizeType, never>;
export declare const TableFooterMeta: import("styled-components").StyledComponent<"div", any, CommonComponentType, never>;
export {};
