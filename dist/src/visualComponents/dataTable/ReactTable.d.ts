import React, { CSSProperties, FC, MouseEvent } from 'react';
import { Column, ControlledStateOverrideProps, ExpandedChangeFunction, FinalState, SortedChangeFunction, SortingRule, TableProps } from 'react-table';
import { ButtonDisplay, ButtonSize } from '@monorail/visualComponents/buttons/buttonTypes';
export * from 'react-table';
export { default as ReactTable } from 'react-table';
export declare const TableComponent: import("styled-components").StyledComponent<"div", import("../../helpers/theme").GlobalAppThemeInterface, {}, never>;
export declare const TheadComponentContainer: import("styled-components").StyledComponent<"div", import("../../helpers/theme").GlobalAppThemeInterface, {
    isFilterBar: boolean;
    isGroupBar: boolean;
}, never>;
export declare type TheadComponentProps = {
    className: string;
    style?: CSSProperties;
};
export declare const TheadComponent: FC<TheadComponentProps>;
export declare enum Sort {
    Ascending = "ascending",
    Descending = "descending",
    Unsorted = "unsorted"
}
export declare const getSortIcon: (sortStatus: Sort) => "" | "sort_ascending" | "sort_descending" | "sort";
export declare function useSort(defaultSorted?: Array<SortingRule>): [Array<SortingRule>, SortedChangeFunction];
export declare type ThComponentProps = {
    className: string;
    column?: Column;
    isExpanderColumn: boolean;
    isFiltered?: boolean;
    show: boolean;
    style?: CSSProperties;
    isGroup?: boolean;
    toggleSort: () => void;
};
export declare const ThSortButton: import("styled-components").StyledComponent<React.FC<import("../buttons/Button").ButtonProps>, import("../../helpers/theme").GlobalAppThemeInterface, {
    display: ButtonDisplay.Chromeless;
    size: ButtonSize.Compact;
}, "display" | "size">;
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
export declare type TrGroupComponentProps = {
    isGroup?: boolean;
};
export declare const TrGroupComponent: import("styled-components").StyledComponent<"div", import("../../helpers/theme").GlobalAppThemeInterface, {
    isGroup?: boolean | undefined;
}, never>;
declare enum TdComponentType {
    Default = "default",
    Actions = "actions",
    Expandable = "expandable",
    Hidden = "hidden"
}
declare type TdComponentContainerProps = {
    className: string;
    style?: CSSProperties;
    onClick: (event: MouseEvent<HTMLDivElement>) => void;
    tdComponentType: TdComponentType;
};
export declare const TdComponentContainer: import("styled-components").StyledComponent<"div", import("../../helpers/theme").GlobalAppThemeInterface, TdComponentContainerProps, never>;
export declare type TdComponentProps = Omit<TdComponentContainerProps, 'tdComponentType'> & {
    isExpanderColumn: boolean;
};
export declare const TdComponent: FC<TdComponentProps>;
export declare const TBodyComponent: import("styled-components").StyledComponent<({ style, ...domProps }: {
    style?: {
        [key: string]: string | number;
    } | undefined;
}) => JSX.Element, import("../../helpers/theme").GlobalAppThemeInterface, {}, never>;
export declare const NoDataContainer: import("styled-components").StyledComponent<"div", import("../../helpers/theme").GlobalAppThemeInterface, {}, never>;
export declare const NoDataComponentVertical: FC;
export declare const NoDataComponentHorizontal: FC;
export declare const ExpanderComponent: TableCellRenderFunction<unknown>;
export declare const EllipsisValueComponent: TableCellRenderFunction<unknown>;
export declare const LoadingWrapper: () => JSX.Element;
export declare const MonorailReactTableOverrides: TableProps;
export declare function useTableExpandState<T extends object>({ data, pivotKey, defaultExpanded, }: {
    data: Array<T>;
    pivotKey: keyof T;
    defaultExpanded?: boolean;
}): {
    expanded: Array<boolean>;
    onExpandedChange: ExpandedChangeFunction;
};
export declare function useTableExpandStateFixedGroups<T extends object>({ totalGroups, }: {
    totalGroups: number;
}): {
    expanded: Array<boolean>;
    onExpandedChange: ExpandedChangeFunction;
};
export interface Filter {
    id: string;
    value: string;
    pivotId?: string;
}
export declare type RowInfo<I> = {
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
export interface CellInfo<T, V = string | number> extends RowInfo<T>, Pick<ControlledStateOverrideProps, 'resized'> {
    isExpanded: boolean;
    column: Column;
    value: V;
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
export declare type TableCellRenderFunction<I, V = string | number> = (cellInfo: CellInfo<I, V>, column: unknown) => React.ReactNode;
export declare type TableCellRenderer<I, V = string | number> = TableCellRenderFunction<I, V> | React.ReactNode;
export declare type ComponentPropsGetterR<I> = (finalState: FinalState<I> & {
    filtered?: Array<{
        id: string;
        value: string;
    }>;
}, rowInfo?: RowInfo<I>, column?: Column<I>, instance?: unknown) => object | undefined;
export declare type TableColumns<T> = Array<Column<T>>;
