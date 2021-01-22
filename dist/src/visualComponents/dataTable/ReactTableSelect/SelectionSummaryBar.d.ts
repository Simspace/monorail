/// <reference types="react" />
export declare type SelectionSummaryBarProps<T> = {
    sortedData: Array<T>;
    totalItems: number;
    totalSelectedItems: number;
};
/**
 * Default "Pagination" component for `ReactTableSelect`.
 * Shows selection and items-in-table summaries.
 */
export declare const SelectionSummaryBar: <T extends unknown>(props: SelectionSummaryBarProps<T>) => JSX.Element;
