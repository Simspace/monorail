import React, { Component, ReactNode } from 'react'
import { css } from 'styled-components'

import { BBCardGrid } from 'src/cards/Cards'
import { FilterBar } from 'src/filters/FilterBar'
import * as R from 'ramda'
import { FilterGroups, SorterGroup } from './types'

type Props = {
  catalog: Array<{}>
  itemRender: (item: any) => ReactNode
  searchKey: string
  filterGroups: FilterGroups
  sorterGroup?: SorterGroup
}

type FilterState = {
  [key: string]: {
    [key: string]: boolean
  }
}

type State = {
  searchText: string
  filterState: FilterState
  sorterGroup?: SorterGroup
}

// Initializes the filter groups state
const initializeFilterState = (filterGroups: FilterGroups) =>
  filterGroups.reduce(
    (groups, group) => ({
      ...groups,
      [group.key]: group.filters.reduce(
        (filters, filter) => ({
          ...filters,
          [filter.key]: true, // setting this default true for now
        }),
        {},
      ),
    }),
    {},
  )

export class FilterCollection extends Component<Props, State> {
  initialFilterState: FilterState
  constructor(props: Props) {
    super(props)
    this.initialFilterState = initializeFilterState(props.filterGroups)
    this.state = {
      searchText: '',
      filterState: this.initialFilterState,
      sorterGroup: this.props.sorterGroup,
    }
  }

  onSorterChange = (key: string) => {
    const { sorterGroup } = this.state

    sorterGroup &&
      this.setState(({}) => ({
        sorterGroup: R.set(
          R.lensProp('sorters'),
          R.map(s => {
            if (s.key === key || s.selected) {
              s.selected = !s.selected
            }

            return s
          }, sorterGroup.sorters),
          sorterGroup,
        ),
      }))
  }

  onFilterChange = (groupKey: string, filterKey: string, value: boolean) => {
    this.setState(state =>
      R.set(R.lensPath(['filterState', groupKey, filterKey]), value, state),
    )
  }

  resetFilters = () => {
    this.setState(() => ({
      filterState: this.initialFilterState,
    }))
  }

  onSearchChange = (searchText: string) => {
    this.setState(() => ({
      searchText,
    }))
  }

  renderCatalog = () => {
    const {
      catalog,
      itemRender,
      searchKey,
      filterGroups,
      sorterGroup,
    } = this.props
    const { searchText, filterState } = this.state

    // sanitize search text
    const sanitizedSearchText = searchText.toLocaleLowerCase()

    // Here we loop through all the filter groups and filter out the
    // filters that are unchecked. This is an optimization so
    // we don't need to do this work every time in the below map
    const appliedFilterGroups = filterGroups.map(group => ({
      ...group,
      filters: group.filters.reduce(
        (appliedFilters: string[], filter) =>
          // if the filter is true, add it to the applied filters array
          filterState[group.key][filter.key]
            ? [...appliedFilters, filter.key]
            : appliedFilters,
        [],
      ),
    }))

    const filtered = R.filter((catalogItem: { [key: string]: string }) => {
      // If search exists and item does not match, filter it out
      if (
        searchText.length > 0 &&
        catalogItem[searchKey]
          .toLocaleLowerCase()
          .indexOf(sanitizedSearchText) === -1
      ) {
        return false
      }

      // Otherwise loop through filters groups and make sure that for
      // each filter group that at least one of the applied filters matches
      // the item, otherwise filter the item out
      const doesMatchFilter = !appliedFilterGroups.some(
        group =>
          // If none of the filters match, this will return
          // true and exit the .some early
          !group.filters.some(
            filter =>
              // Check if the filter matches the item data after
              // its been run through the filter transform
              filter ===
              (group.transform || R.identity)(R.prop(group.key, catalogItem)),
          ),
      )

      return doesMatchFilter
    }, catalog)

    // sort filtered items
    if (!sorterGroup) {
      return R.map(itemRender, filtered)
    }

    const foundSorter = R.find(s => s.selected, sorterGroup.sorters)

    return foundSorter
      ? R.map(itemRender, foundSorter.onSort(filtered))
      : R.map(itemRender, filtered)
  }

  render() {
    const { filterGroups } = this.props
    const { searchText, filterState, sorterGroup } = this.state

    // add the checked value to each filter item and compute
    // how many filters in each group are applied (we need this
    // for the filter button rendering)
    const filterGroupsWithStateData = filterGroups.map(g => {
      const filters = g.filters.map(f => ({
        ...f,
        checked: filterState[g.key][f.key],
      }))
      const activeFilterCount = filters.filter(f => f.checked).length

      return {
        ...g,
        activeFilterCount,
        filters,
      }
    })

    // Check if the filter state has changed, we need this to know
    // whether or not to show the reset button
    const isFiltered = !R.equals(this.initialFilterState, filterState)

    return (
      <BBCardGrid>
        <FilterBar
          resetFilters={this.resetFilters}
          filterGroups={filterGroupsWithStateData}
          sorterGroup={sorterGroup}
          onSearchChange={this.onSearchChange}
          searchText={searchText}
          onFilterChange={this.onFilterChange}
          onSorterChange={this.onSorterChange}
          isFiltered={isFiltered}
          css={css`
            grid-column: -1 / 1;
          `}
        />
        {this.renderCatalog()}
      </BBCardGrid>
    )
  }
}
