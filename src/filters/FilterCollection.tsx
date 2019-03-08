import { mkIO, runIO } from '@monorail/CoreUtils/IO'
import { constVoid, o } from '@monorail/CoreUtils/general'
import { mkRecordKeyOptional } from '@monorail/CoreUtils/optics'
import { findIndex, toLocaleLower } from '@monorail/CoreUtils/String'
import { len, map, notAny } from '@monorail/CoreUtils/Array'
import { fold } from '@monorail/CoreUtils/Option'
import { isNil } from '@monorail/CoreUtils/primitive-guards'
import { array, findFirst, snoc } from 'fp-ts/lib/Array'
import { constant } from 'fp-ts/lib/function'
import { isNone, Option, fromNullable } from 'fp-ts/lib/Option'
import { insert } from 'fp-ts/lib/Record'
import { Lens, Optional } from 'monocle-ts'
import React, { Component, ReactNode } from 'react'
import {
  AppliedFilterGroup,
  FilterOption,
  FilterGroup,
  FilterGroupWithData,
  FilterState,
  FilterWithCheckedData,
  Sorter,
  SorterGroup,
  StrBoolMap,
} from './types'

const intializeFilterState = <
  CollectionItem extends object,
  FilterKey extends keyof CollectionItem & string
>(
  filterGroups: Array<FilterGroup<CollectionItem, FilterKey>>,
): FilterState => {
  const initStrMap: StrBoolMap = {}
  const initFilterState: FilterState = {}

  return array.reduce(
    filterGroups,
    initFilterState,
    (groups, group): FilterState =>
      insert(
        group.id,
        array.reduce(
          group.filters,
          initStrMap,
          (filters, filterItem): Record<string, boolean> =>
            insert(filterItem.value, true, filters),
        ),
        groups,
      ),
  )
}

/**
 * Helper function to reduce the boilerplate of creating typed a `FilterGroup`
 */
export const createFilterGroup = <
  CollectionItem extends object,
  FilterKey extends keyof CollectionItem & string
>(
  collectionItem: FilterGroup<CollectionItem, FilterKey>,
): FilterGroup<CollectionItem, FilterKey> => collectionItem

type Props<
  CollectionItem extends object,
  SearchByKey extends keyof CollectionItem & string,
  FilterKey extends keyof CollectionItem & string
> = {
  catalog: CollectionItem[]
  itemRender: (item: CollectionItem) => ReactNode
  searchByKey: SearchByKey
  filterGroups: Array<FilterGroup<CollectionItem, FilterKey>>
  // TODO: Refactor to use Option instead of possibly undefined
  sorterGroup?: SorterGroup<CollectionItem>
  children: (
    props: {
      filters: {
        resetFilters: () => void
        filterGroups: Array<FilterGroupWithData<CollectionItem, FilterKey>>
        onFilterChange: (
          groupKey: string,
          filterKey: string,
          value: boolean,
        ) => void
        isFiltered: boolean
      }
      sorters: {
        // TODO: Refactor to use Option instead of possibly undefined
        sorterGroup?: SorterGroup<CollectionItem>
        onSorterChange: (key: string) => void
      }
      search: {
        onSearchChange: (searchText: string) => void
        searchText: string
      }
      collection: Array<ReactNode>
    },
  ) => ReactNode
}

/**
 * Type-level helper utility to extract the possible "lookup" values
 * for the `filterKey` key of the `FilterGroup` items in an Array
 */
export type GetFilterKeyType<A> = A extends Array<{
  filterKey: infer Value
}>
  ? Value
  : never

type State<CollectionItem> = {
  searchText: string
  filterState: FilterState
  // TODO: Refactor to use Option instead of possibly undefined
  sorterGroup?: SorterGroup<CollectionItem>
}

export class FilterCollection<
  CollectionItem extends object,
  SearchByKey extends keyof CollectionItem & string,
  FilterKey extends keyof CollectionItem & string
> extends Component<
  Props<CollectionItem, SearchByKey, FilterKey>,
  State<CollectionItem>
> {
  initialFilterState: FilterState = intializeFilterState<
    CollectionItem,
    FilterKey
  >(this.props.filterGroups)

  state: State<CollectionItem> = {
    searchText: '',
    filterState: this.initialFilterState,
    sorterGroup: this.props.sorterGroup,
  }

  mkStatePropLens = Lens.fromProp<State<CollectionItem>>()

  stateToFilterStateLens = this.mkStatePropLens('filterState')

  stateToSearchTextLens = this.mkStatePropLens('searchText')

  stateToSorterGroupOptional = Optional.fromNullableProp<
    State<CollectionItem>
  >()('sorterGroup')

  sorterGroupToSortersLens = Lens.fromProp<SorterGroup<CollectionItem>>()(
    'sorters',
  )

  stateToSortersOptional = this.stateToSorterGroupOptional.composeLens(
    this.sorterGroupToSortersLens,
  )

  onSorterChange = (key: string) => {
    const { sorterGroup } = this.state

    const sorterGroupOpt = fromNullable(sorterGroup)

    const toggleSelected = (s: Sorter<CollectionItem>) =>
      s.key === key || s.selected ? { ...s, selected: !s.selected } : s

    const transition = this.stateToSortersOptional.modify(map(toggleSelected))
    const setStateIO = mkIO(() => this.setState(transition))
    const constSetStateIO = constant(setStateIO)
    const noOpIO = mkIO(constVoid)

    const onSorterChangeIO = sorterGroupOpt.fold(noOpIO, constSetStateIO)

    runIO(onSorterChangeIO)
  }

  onFilterChange = (groupKey: string, filterKey: string, value: boolean) => {
    const stateToFilterKeyOptional = this.stateToFilterStateLens
      .composeOptional(mkRecordKeyOptional(groupKey))
      .composeOptional(mkRecordKeyOptional(filterKey))

    const transition = stateToFilterKeyOptional.set(value)
    const setStateIO = mkIO(() => this.setState(transition))

    runIO(setStateIO)
  }

  resetFilters = () => {
    const transition = this.stateToFilterStateLens.set(this.initialFilterState)
    const setStateIO = mkIO(() => this.setState(transition))

    runIO(setStateIO)
  }

  onSearchChange = (searchText: string) => {
    const transition = this.stateToSearchTextLens.set(searchText)
    const setStateIO = mkIO(() => this.setState(transition))

    runIO(setStateIO)
  }

  renderCollection = () => {
    const {
      catalog,
      itemRender,
      searchByKey,
      filterGroups,
      sorterGroup,
    } = this.props
    const { searchText, filterState } = this.state

    // sanitize search text
    const sanitizedSearchText = toLocaleLower(searchText)

    // Here we loop through all the filter groups and filter out the
    // filters that are unchecked. This is an optimization so
    // we don't need to do this work every time in the below map
    const initStrArr: string[] = []
    const getMakeAppliedFilters = (
      group: FilterGroup<CollectionItem, FilterKey>,
    ) => (appliedFilters: string[], filterItem: FilterOption): string[] =>
      // if the filter is true, add it to the applied filters array
      filterState[group.id][filterItem.value]
        ? snoc(appliedFilters, filterItem.value)
        : appliedFilters
    const toAppliedFilterGroup = (
      group: FilterGroup<CollectionItem, FilterKey>,
    ): AppliedFilterGroup<CollectionItem, FilterKey> => {
      // couldn't use spread without casting due to below issue:
      // https://github.com/Microsoft/TypeScript/pull/13288
      const result = {
        label: group.label,
        filterKey: group.filterKey,
        transform: group.transform,
        filters: array.reduce(
          group.filters,
          initStrArr,
          getMakeAppliedFilters(group),
        ),
      } as AppliedFilterGroup<CollectionItem, FilterKey>
      return result
    }
    const appliedFilterGroups = array.map(filterGroups, toAppliedFilterGroup)

    const filtered = array.filter(catalog, catalogItem => {
      // If search exists and item does not match, filter it out
      const searchValue = catalogItem[searchByKey]

      const findIndexLocaleLower = o(
        findIndex(sanitizedSearchText),
        toLocaleLower,
      )
      const isNotFound = o(
        (x: Option<number>) => isNone(x),
        findIndexLocaleLower,
      )

      if (typeof searchValue !== 'string') {
        console.error('tried to search non-string value') // tslint:disable-line:no-console
      } else if (len(searchText) > 0 && isNotFound(searchValue)) {
        return false
      }

      // Otherwise loop through filters groups and make sure that for
      // each filter group that at least one of the applied filters matches
      // the item, otherwise filter the item out
      const doesMatchFilter = notAny(appliedFilterGroups, group => {
        // Check if the filter matches the item data after
        // its been run through the filter transform
        const matches = (filterTerm: string) => {
          const target = group.filterKey
          const value = catalogItem[target]

          if (isNil(group.transform) && typeof value === 'string') {
            return filterTerm === value
          } else if (!isNil(group.transform)) {
            return filterTerm === group.transform(value)
          } else {
            const errorMsg =
              `error: lookup value for ${group.filterKey}` +
              `must be a string, but received a ${typeof value} (${value})`
            console.error(errorMsg) // tslint:disable-line:no-console
            throw new Error(errorMsg)
          }
        }

        // If none of the filters match, this will return
        // true and exit early
        return notAny(group.filters, matches)
      })

      return doesMatchFilter
    })

    const filteredReactNodes = array.map(filtered, itemRender)

    // sort filtered items
    if (!sorterGroup) {
      return filteredReactNodes
    }

    const foundSorter = findFirst(sorterGroup.sorters, s => s.selected)

    const toSortedFilteredReactNodes = (x: Sorter<CollectionItem>) =>
      array.map(x.onSort(filtered), itemRender)

    return fold(foundSorter, filteredReactNodes, toSortedFilteredReactNodes)
  }

  render() {
    const { filterGroups, children } = this.props
    const { searchText, filterState, sorterGroup } = this.state

    // add the checked value to each filter item and compute
    // how many filters in each group are applied (we need this
    // for the filter button rendering)
    const filterGroupsWithStateData: Array<
      FilterGroupWithData<CollectionItem, FilterKey>
    > = array.map(filterGroups, g => {
      const filtersWithCheckedData = array.map(g.filters, f => {
        const filterStateMap = filterState[g.id]
        const checked = filterStateMap[f.value]
        const filterWithCheckedData: FilterWithCheckedData = {
          ...f,
          checked,
        }
        return filterWithCheckedData
      })
      const activeFilterCount = array.filter(
        filtersWithCheckedData,
        f => f.checked,
      ).length

      // couldn't use spread without casting due to below issue:
      // https://github.com/Microsoft/TypeScript/pull/13288
      const filterGroupWithData = {
        label: g.label,
        filterKey: g.id,
        transform: g.transform,
        activeFilterCount,
        filters: filtersWithCheckedData,
      } as FilterGroupWithData<CollectionItem, FilterKey>
      return filterGroupWithData
    })

    // Check if the filter state has changed, we need this to know
    // whether or not to show the reset button
    const isFiltered = this.initialFilterState !== filterState

    return children({
      filters: {
        resetFilters: this.resetFilters,
        filterGroups: filterGroupsWithStateData,
        onFilterChange: this.onFilterChange,
        isFiltered,
      },
      sorters: {
        sorterGroup,
        onSorterChange: this.onSorterChange,
      },
      search: {
        onSearchChange: this.onSearchChange,
        searchText,
      },
      collection: this.renderCollection(),
    })
  }
}
