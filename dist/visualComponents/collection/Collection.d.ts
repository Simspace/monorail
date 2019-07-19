import React, { ReactElement } from 'react';
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
}) => boolean;
export declare type CollectionProps<I> = {
    cardRender: (item: I) => ReactElement;
    columns: TableColumns<I>;
    data: TableProps<I>['data'];
    searchFilter: SearchFilterType<I>;
    collectionView: CollectionView;
    setCollectionView: (collectionView: CollectionView) => void;
};
export declare const Collection: <T extends unknown>(props: CollectionProps<T>) => React.ReactElement<CollectionProps<T>, string | ((props: any) => React.ReactElement<any, string | any | (new (props: any) => React.Component<any, any, any>)> | null) | (new (props: any) => React.Component<any, any, any>)>;
