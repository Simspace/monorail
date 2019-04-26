import React, { Component } from 'react';
import { SimpleInterpolation } from 'styled-components';
import { FilterGroupWithData, SorterGroup } from './types';
declare type Props<CollectionItem extends object, FilterByKey extends keyof CollectionItem & string> = {
    cssOverrides?: SimpleInterpolation;
    filterGroups: Array<FilterGroupWithData<CollectionItem, FilterByKey>>;
    sorterGroup?: SorterGroup<CollectionItem>;
    isFiltered: boolean;
    onFilterChange: (group: string, filter: string, value: boolean) => void;
    onSearchChange: (searchText: string) => void;
    onSorterChange?: (key: string) => void;
    resetFilters: () => void;
    searchText: string;
    document?: Document;
};
export declare class FilterBar<CollectionItem extends object, FilterByKey extends keyof CollectionItem & string> extends Component<Props<CollectionItem, FilterByKey>> {
    renderFilterName: (filterGroup: FilterGroupWithData<CollectionItem, FilterByKey>) => React.ReactNode;
    renderFilters: () => JSX.Element[];
    renderSorters: () => JSX.Element | undefined;
    render(): JSX.Element;
}
export {};
