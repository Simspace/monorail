export declare type FilterOption = {
    label: string;
    value: string;
};
export declare type CheckedFilterData = {
    checked: boolean;
};
export declare type FilterWithCheckedData = FilterOption & CheckedFilterData;
export declare type ActiveFilterCountData = {
    activeFilterCount: number;
};
declare type CheckedFiltersData = {
    filters: Array<FilterWithCheckedData>;
};
export declare type FilterGroupWithData<CollectionItem extends object, FilterKey extends keyof CollectionItem & string> = CollectionItem[FilterKey] extends string ? {
    label: string;
    filterKey: FilterKey;
    transform?: <A extends CollectionItem[FilterKey]>(searchValue: A) => string;
} & ActiveFilterCountData & CheckedFiltersData : {
    label: string;
    filterKey: FilterKey;
    transform: <A extends CollectionItem[FilterKey]>(searchValue: A) => string;
} & ActiveFilterCountData & CheckedFiltersData;
declare type FilterOptionsData = {
    filters: Array<FilterOption>;
};
export declare type FilterGroup<CollectionItem extends object, FilterKey extends keyof CollectionItem & string> = CollectionItem[FilterKey] extends string ? {
    label: string;
    filterKey: FilterKey;
    /**
     * FilterCollection will reference id
     * instead of filterKey in state,
     * so FilterGroups won't get mixed up.
     */
    id: string;
    transform?: <A extends CollectionItem[FilterKey]>(searchValue: A) => string;
} & FilterOptionsData : {
    label: string;
    filterKey: FilterKey;
    id: string;
    transform: <A extends CollectionItem[FilterKey]>(searchValue: A) => string;
} & FilterOptionsData;
export declare type AppliedFilters = {
    filters: Array<string>;
};
export declare type AppliedFilterGroup<CollectionItem extends object, FilterKey extends keyof CollectionItem & string> = CollectionItem[FilterKey] extends string ? {
    label: string;
    filterKey: FilterKey;
    id: string;
    transform?: <A extends CollectionItem[FilterKey]>(searchValue: A) => string;
} & AppliedFilters : {
    label: string;
    filterKey: FilterKey;
    id: string;
    transform: <A extends CollectionItem[FilterKey]>(searchValue: A) => string;
} & AppliedFilters;
export declare type StrBoolMap = Record<string, boolean>;
export declare type FilterState = Record<string, StrBoolMap>;
export declare type Sorter<CollectionItem> = {
    label: string;
    key: string;
    onSort: (xs: Array<CollectionItem>) => Array<CollectionItem>;
    selected: boolean;
};
export declare type SorterGroup<CollectionItem> = {
    label: string;
    key: string;
    sorters: Array<Sorter<CollectionItem>>;
};
export {};
//# sourceMappingURL=types.d.ts.map