export type Filter = {
  label: string;
  key: string;
};

export type FilterWithData = Filter & {
  checked: boolean;
};

export type FilterGroup<FilterType> = {
  label: string;
  key: string;
  transform?: Function;
  filters: FilterType[];
};

export type FilterGroupWithData = FilterGroup<FilterWithData> & {
  activeFilterCount: number;
};

export type FilterGroups = Array<FilterGroup<Filter>>;
export type FilterGroupsWithData = FilterGroupWithData[];

export type Sorter = {
  label: string;
  key: string;
  onSort: Function;
  selected: boolean;
};
export type SorterGroup = {
  label: string;
  key: string;
  sorters: Sorter[];
};
