import { prop } from '@monorail/sharedHelpers/fp-ts-ext/Record'
import { len } from '@monorail/sharedHelpers/fp-ts-ext/Array'
import { fold } from '@monorail/sharedHelpers/fp-ts-ext/Option'
import { array, head } from 'fp-ts/lib/Array'
import React, { Component, ReactNode } from 'react'
import styled, { css, SimpleInterpolation } from 'styled-components'
import { Button } from '@monorail/buttons/Button'
import { ButtonDisplay, ButtonSize } from '@monorail/buttons/buttonTypes'
import { Choice } from '@monorail/inputs/Choice'
import { CommonComponentType } from '@monorail/types'
import { Div } from '@monorail/StyleHelpers'
import { Filter } from '@monorail/filters/Filter'
import { FilterGroupWithData, SorterGroup } from './types'
import { Search } from '@monorail/inputs/Search'
import { Status } from '@monorail/status/Status'
import {
  ease,
  flexFlow,
  visible,
  typography,
  FontSizes,
} from '@monorail/CommonStyles'

const sorterItemStyle = (selected: boolean) => css`
  ${typography(500, FontSizes.Content)};

  cursor: pointer;
  padding: 8px;

  ${selected &&
    css`
      background: hsla(219, 100%, 54%, 0.1);
    `};

  :hover {
    background: hsla(219, 100%, 54%, 0.1);
  }
`

const BBFilterBar = styled.div<CommonComponentType>(
  ({ cssOverrides }) => css`
    ${flexFlow('row')};

    margin-left: -4px;

    ${cssOverrides};
  `,
)

type Props<
  CollectionItem extends object,
  FilterByKey extends keyof CollectionItem & string
> = {
  cssOverrides?: SimpleInterpolation
  filterGroups: Array<FilterGroupWithData<CollectionItem, FilterByKey>>
  sorterGroup?: SorterGroup<CollectionItem>
  isFiltered: boolean
  onFilterChange: (group: string, filter: string, value: boolean) => void
  onSearchChange: (searchText: string) => void
  onSorterChange?: (key: string) => void
  resetFilters: () => void
  searchText: string
  document?: Document
}

export class FilterBar<
  CollectionItem extends object,
  FilterByKey extends keyof CollectionItem & string
> extends Component<Props<CollectionItem, FilterByKey>> {
  renderFilterName = (
    filterGroup: FilterGroupWithData<CollectionItem, FilterByKey>,
  ): ReactNode => {
    if (filterGroup.activeFilterCount === len(filterGroup.filters)) {
      // If unchanged, just show label
      return filterGroup.label
    } else if (filterGroup.activeFilterCount > 1) {
      // If changed and label is greater than 1, show the count
      return (
        <>
          {filterGroup.label}
          <Status
            cssOverrides={css`
              margin-left: 4px;
            `}
          >
            {filterGroup.activeFilterCount}
          </Status>
        </>
      )
    } else if (filterGroup.activeFilterCount === 1) {
      // Get checked filter option
      const headFilterOpt = head(
        filterGroup.filters.filter(item => item.checked),
      )
      const activeFilterLabel = fold(headFilterOpt, '', prop('label'))
      // If equal to 1, show the label and the single active filter
      return `${filterGroup.label} - ${activeFilterLabel}`
    } else {
      // Otherwise no filters are checked, so show None
      return `${filterGroup.label} - None`
    }
  }

  renderFilters = () => {
    const { document, filterGroups, onFilterChange } = this.props

    return array.map(filterGroups, group => (
      <Filter
        document={document}
        content={array.map(group.filters, filter => (
          <Choice
            onChange={event =>
              onFilterChange(
                group.filterKey,
                filter.value,
                event.currentTarget.checked,
              )
            }
            type="checkbox"
            checked={filter.checked}
            key={filter.value}
          >
            {filter.label}
          </Choice>
        ))}
        cssOverrides={css`
          margin: 4px;
        `}
        isActive={group.activeFilterCount !== group.filters.length}
        key={group.filterKey}
        title={this.renderFilterName(group)}
      />
    ))
  }

  renderSorters = () => {
    const { document, sorterGroup, onSorterChange } = this.props

    return sorterGroup ? (
      <Filter
        document={document}
        content={array.map(sorterGroup.sorters, sorter => (
          <Div
            cssOverrides={sorterItemStyle(sorter.selected)}
            onClick={() =>
              onSorterChange ? onSorterChange(sorter.key) : undefined
            }
            key={sorter.key}
          >
            {sorter.label}
          </Div>
        ))}
        cssOverrides={css`
          margin: 4px;
        `}
        isActive={false}
        key={sorterGroup.key}
        title={sorterGroup.label}
      />
    ) : (
      undefined
    )
  }

  render() {
    const {
      searchText,
      onSearchChange,
      isFiltered,
      resetFilters,
      cssOverrides,
    } = this.props

    return (
      <BBFilterBar cssOverrides={cssOverrides}>
        {this.renderFilters()}
        {this.renderSorters()}
        <Button
          size={ButtonSize.Compact}
          display={ButtonDisplay.Secondary}
          cssOverrides={css`
            ${visible(isFiltered)};
            margin: 4px;
            transform: translateX(${isFiltered ? 0 : -32}px);
            transition: background ease 75ms,
              visibility ${ease(isFiltered)} 150ms,
              opacity ${ease(isFiltered)} 150ms,
              transform ${ease(isFiltered)} 150ms;
          `}
          onClick={resetFilters}
        >
          Clear Filters
        </Button>
        <Search
          cssOverrides={css`
            margin: auto 0 auto auto;
            max-width: 256px;
            width: 100%;
            flex-shrink: 1;
          `}
          value={searchText}
          onChange={onSearchChange}
        />
      </BBFilterBar>
    )
  }
}
