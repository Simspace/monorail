import React from 'react';
import { ItemsPerPageOption } from '@monorail/visualComponents/dataTable/ReactTableSelect/helpers';
export declare enum TestId {
    TotalSelectedLabel = "total-selected",
    ItemsPerPage = "items-per-page",
    PreviousPage = "prev-page",
    NextPage = "next-page",
    Pages = "pages"
}
declare type PaginationButtonProps = {
    onClick?: (e: React.SyntheticEvent<HTMLButtonElement, MouseEvent>) => void;
    disabled?: boolean;
};
export declare const PaginationBackButton: ({ onClick, disabled, }: PaginationButtonProps) => JSX.Element;
export declare const PaginationNextButton: ({ onClick, disabled, }: PaginationButtonProps) => JSX.Element;
export declare type SelectionPaginationBarProps<T> = {
    /**
     * Filtered data
     */
    sortedData: Array<T>;
    /**
     * Total unfiltered count
     */
    totalItems: number;
    /**
     * Total selected count
     */
    totalSelectedItems: number;
    /**
     * The selected option for the items-per-page Select
     */
    itemsPerPage: ItemsPerPageOption;
    onItemsPerPageChange: (n: ItemsPerPageOption) => void;
    /**
     * Zero-indexed current page
     */
    page: number;
    /**
     * Count of pages available
     */
    pages: number;
    pageSize: number;
    onPageChange: (n: number) => void;
};
export declare const SelectionPaginationBar: <T extends unknown>(props: SelectionPaginationBarProps<T>) => JSX.Element;
export {};
