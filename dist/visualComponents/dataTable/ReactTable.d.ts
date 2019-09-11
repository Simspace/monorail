import React, { CSSProperties, FC } from 'react';
import { Column, ControlledStateOverrideProps, SortedChangeFunction, SortingRule, TableProps } from 'react-table';
export declare const TableComponent: import("styled-components").StyledComponent<"div", import("../../helpers/theme").GlobalAppThemeInterface, {}, never>;
export declare const TheadComponentContainer: import("styled-components").StyledComponent<"div", import("../../helpers/theme").GlobalAppThemeInterface, {
    isFilterBar: boolean;
}, never>;
export declare type TheadComponentProps = {
    className: string;
    hasFilter?: boolean;
    style?: CSSProperties;
};
export declare const TheadComponent: FC<TheadComponentProps>;
export declare function useSort(): [Array<SortingRule>, SortedChangeFunction];
export declare type ThComponentProps = {
    toggleSort: () => void;
    className: string;
    column?: Column;
    isFiltered?: boolean;
    style?: CSSProperties;
};
export declare const ThComponent: FC<ThComponentProps>;
declare type FilterComponentProps = {
    column: Column;
    filter?: {
        id: string;
        value: string;
    };
    onChange: (event: unknown) => void;
};
export declare const FilterComponent: FC<FilterComponentProps>;
export declare const ResizerComponent: import("styled-components").StyledComponent<"div", import("../../helpers/theme").GlobalAppThemeInterface, {}, never>;
export declare const TrGroupComponent: import("styled-components").StyledComponent<"div", import("../../helpers/theme").GlobalAppThemeInterface, {}, never>;
export declare const TdComponent: import("styled-components").StyledComponent<"div", import("../../helpers/theme").GlobalAppThemeInterface, {}, never>;
export declare const TBodyComponent: import("styled-components").StyledComponent<({ style, ...domProps }: {
    style?: {
        [key: string]: React.ReactText;
    } | undefined;
}) => JSX.Element, import("../../helpers/theme").GlobalAppThemeInterface, {}, never>;
export declare const NoDataContainer: import("styled-components").StyledComponent<"div", import("../../helpers/theme").GlobalAppThemeInterface, {}, never>;
export declare const MonorailReactTableOverrides: Partial<TableProps>;
export interface Filter {
    id: string;
    value: string;
    pivotId?: string;
}
declare type RowInfo<I> = {
    /** Materialized row of data */
    row: unknown;
    /** The post-accessed values from the original row */
    rowValues: unknown;
    /** The index of the row */
    index: number;
    /** The index of the row relative to the current page */
    viewIndex: number;
    /** The size of the page */
    pageSize: number;
    /** The index of page */
    page: number;
    /** The nesting depth (zero-indexed) */
    level: number;
    /** The nesting path of the row */
    nestingPath: Array<number>;
    /** A boolean stating if the row is an aggregation row */
    aggregated: boolean;
    /** A boolean stating if the row is grouped by Pivot */
    groupedByPivot: boolean;
    /** An array of any expandable sub-rows contained in this row */
    subRows: Array<unknown>;
    /** Original object passed to row */
    original: I;
};
export interface CellInfo<I> extends RowInfo<I>, Pick<ControlledStateOverrideProps, 'resized'> {
    isExpanded: boolean;
    column: Column;
    value: string | number;
    pivoted: boolean;
    expander: boolean;
    show: boolean;
    width: number;
    maxWidth: number;
    tdProps: unknown;
    columnProps: unknown;
    classes: Array<string>;
    styles: object;
}
export declare type TableCellRenderer<I> = ((cellInfo: CellInfo<I>, column: unknown) => React.ReactNode) | React.ReactNode;
export declare type ComponentPropsGetterR<I> = (finalState: {
    filtered?: Array<{
        id: string;
        value: string;
    }>;
}, rowInfo?: RowInfo<I>, column?: Column<I>, instance?: unknown) => object | undefined;
export declare type TableColumns<T> = Array<Column<T>>;
export {};
