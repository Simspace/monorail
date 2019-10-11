import React, { ReactElement, ReactNode } from 'react';
import { TableProps } from 'react-table';
import { TableColumns } from '@monorail/visualComponents/dataTable/ReactTable';
import { CompareSearchType } from '@monorail/visualComponents/inputs/SearchController';
export declare enum CollectionView {
    Table = "table",
    Card = "card"
}
export declare type SearchFilterType<T> = (params: {
    item: T;
    compareSearch: CompareSearchType;
    value: string;
}) => boolean;
declare type SearchFilter<T> = {
    searchFilter: SearchFilterType<T>;
};
declare type SearchInput = {
    searchInput: ReactNode;
};
export declare type CollectionProps<T> = {
    cardRender: (item: T) => ReactElement;
    collectionView: CollectionView;
    columns: TableColumns<T>;
    data: TableProps<T>['data'];
    isLoading?: boolean;
    setCollectionView: (collectionView: CollectionView) => void;
    pivotBy?: Array<string>;
    NoDataComponent?: () => ReactElement;
} & (SearchFilter<T> | SearchInput);
export declare const Collection: <T extends unknown>(props: CollectionProps<T>) => React.ReactElement<CollectionProps<T>, string | ((props: any) => React.ReactElement<any, string | any | (new (props: any) => React.Component<any, any, any>)> | null) | (new (props: any) => React.Component<any, any, any>)>;
export {};
