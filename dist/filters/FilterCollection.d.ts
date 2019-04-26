import { Lens, Optional } from 'monocle-ts';
import React, { Component, ReactNode } from 'react';
import { FilterGroup, FilterGroupWithData, FilterState, Sorter, SorterGroup } from './types';
/**
 * Helper function to reduce the boilerplate of creating typed a `FilterGroup`
 */
export declare const createFilterGroup: <CollectionItem extends object, FilterKey extends keyof CollectionItem & string>(collectionItem: FilterGroup<CollectionItem, FilterKey>) => FilterGroup<CollectionItem, FilterKey>;
declare type Props<CollectionItem extends object, SearchByKey extends keyof CollectionItem & string, FilterKey extends keyof CollectionItem & string> = {
    catalog: Array<CollectionItem>;
    itemRender: (item: CollectionItem) => ReactNode;
    searchByKey: SearchByKey;
    filterGroups: Array<FilterGroup<CollectionItem, FilterKey>>;
    sorterGroup?: SorterGroup<CollectionItem>;
    children: (props: {
        filters: {
            resetFilters: () => void;
            filterGroups: Array<FilterGroupWithData<CollectionItem, FilterKey>>;
            onFilterChange: (groupKey: string, filterKey: string, value: boolean) => void;
            isFiltered: boolean;
        };
        sorters: {
            sorterGroup?: SorterGroup<CollectionItem>;
            onSorterChange: (key: string) => void;
        };
        search: {
            onSearchChange: (searchText: string) => void;
            searchText: string;
        };
        collection: Array<ReactNode>;
    }) => ReactNode;
};
/**
 * Type-level helper utility to extract the possible "lookup" values
 * for the `filterKey` key of the `FilterGroup` items in an Array
 */
export declare type GetFilterKeyType<A> = A extends Array<{
    filterKey: infer Value;
}> ? Value : never;
declare type State<CollectionItem> = {
    searchText: string;
    filterState: FilterState;
    sorterGroup?: SorterGroup<CollectionItem>;
};
export declare class FilterCollection<CollectionItem extends object, SearchByKey extends keyof CollectionItem & string, FilterKey extends keyof CollectionItem & string> extends Component<Props<CollectionItem, SearchByKey, FilterKey>, State<CollectionItem>> {
    initialFilterState: FilterState;
    state: State<CollectionItem>;
    mkStatePropLens: <P extends "searchText" | "sorterGroup" | "filterState">(prop: P) => Lens<State<CollectionItem>, State<CollectionItem>[P]>;
    stateToFilterStateLens: Lens<State<CollectionItem>, Record<string, Record<string, boolean>>>;
    stateToSearchTextLens: Lens<State<CollectionItem>, string>;
    stateToSorterGroupOptional: Optional<State<CollectionItem>, SorterGroup<CollectionItem>>;
    sorterGroupToSortersLens: Lens<SorterGroup<CollectionItem>, Sorter<CollectionItem>[]>;
    stateToSortersOptional: Optional<State<CollectionItem>, Sorter<CollectionItem>[]>;
    onSorterChange: (key: string) => void;
    onFilterChange: (groupKey: string, filterKey: string, value: boolean) => void;
    resetFilters: () => void;
    onSearchChange: (searchText: string) => void;
    renderCollection: () => React.ReactNode[];
    render(): React.ReactNode;
}
export {};
