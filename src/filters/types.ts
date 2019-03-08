export type FilterOption = {
  label: string
  value: string
}

export type CheckedFilterData = {
  checked: boolean
}

export type FilterWithCheckedData = FilterOption & CheckedFilterData

export type ActiveFilterCountData = {
  activeFilterCount: number
}

type CheckedFiltersData = { filters: FilterWithCheckedData[] }

export type FilterGroupWithData<
  CollectionItem extends object,
  FilterKey extends keyof CollectionItem & string
> = CollectionItem[FilterKey] extends string
  ? {
      label: string
      filterKey: FilterKey
      transform?: <A extends CollectionItem[FilterKey]>(
        searchValue: A,
      ) => string
    } & ActiveFilterCountData &
      CheckedFiltersData
  : {
      label: string
      filterKey: FilterKey
      transform: <A extends CollectionItem[FilterKey]>(searchValue: A) => string
    } & ActiveFilterCountData &
      CheckedFiltersData

type FilterOptionsData = { filters: FilterOption[] }

export type FilterGroup<
  CollectionItem extends object,
  FilterKey extends keyof CollectionItem & string
> = CollectionItem[FilterKey] extends string
  ? {
      label: string
      filterKey: FilterKey
      /**
       * FilterCollection will reference id
       * instead of filterKey in state,
       * so FilterGroups won't get mixed up.
       */
      id: string
      transform?: <A extends CollectionItem[FilterKey]>(
        searchValue: A,
      ) => string
    } & FilterOptionsData
  : {
      label: string
      filterKey: FilterKey
      id: string
      transform: <A extends CollectionItem[FilterKey]>(searchValue: A) => string
    } & FilterOptionsData

export type AppliedFilters = { filters: string[] }

export type AppliedFilterGroup<
  CollectionItem extends object,
  FilterKey extends keyof CollectionItem & string
> = CollectionItem[FilterKey] extends string
  ? {
      label: string
      filterKey: FilterKey
      id: string
      transform?: <A extends CollectionItem[FilterKey]>(
        searchValue: A,
      ) => string
    } & AppliedFilters
  : {
      label: string
      filterKey: FilterKey
      id: string
      transform: <A extends CollectionItem[FilterKey]>(searchValue: A) => string
    } & AppliedFilters

export type StrBoolMap = Record<string, boolean>
export type FilterState = Record<string, StrBoolMap>

export type Sorter<CollectionItem> = {
  label: string
  key: string
  onSort: (xs: CollectionItem[]) => CollectionItem[]
  selected: boolean
}
export type SorterGroup<CollectionItem> = {
  label: string
  key: string
  sorters: Array<Sorter<CollectionItem>>
}
