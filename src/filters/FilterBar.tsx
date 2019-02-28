import { prop } from '@monorail/CoreUtils/Record'
import { len } from '@monorail/CoreUtils/Array'
import { fold } from '@monorail/CoreUtils/Option'
import { array, head } from 'fp-ts/lib/Array'
import React, { Component, ReactNode } from 'react'
import styled, { css, SimpleInterpolation } from 'styled-components'

import {
  ease,
  flexFlow,
  visible,
  typography,
  FontSizes,
} from '@monorail/CommonStyles'
import { Div } from '@monorail/StyleHelpers'

import { Filter } from '@monorail/filters/Filter'
import { Search } from '@monorail/inputs/Search'
import { Choice } from '@monorail/inputs/Choice'
import { Status } from '@monorail/status/Status'
import { Button } from '@monorail/buttons/Button'

import { FilterGroupWithData, SorterGroup } from './types'
import { ButtonDisplay, ButtonSize } from '@monorail/buttons/buttonTypes'

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

const BBFilterBar = styled<{ css?: SimpleInterpolation }, 'div'>('div')`
  ${flexFlow('row')};

  margin-left: -4px;

  ${({ css: cssOverrides }) => cssOverrides};
`

type Props<
  CollectionItem extends object,
  FilterByKey extends keyof CollectionItem & string
> = {
  css?: SimpleInterpolation
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
            css={css`
              margin-left: 4px;
            `}
          >
            {filterGroup.activeFilterCount}
          </Status>
        </>
      )
    } else if (filterGroup.activeFilterCount === 1) {
      const headFilterOpt = head(filterGroup.filters)
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
        css={css`
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
            css={sorterItemStyle(sorter.selected)}
            onClick={() =>
              onSorterChange ? onSorterChange(sorter.key) : undefined
            }
            key={sorter.key}
          >
            {sorter.label}
          </Div>
        ))}
        css={css`
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
      css: cssOverrides,
    } = this.props

    return (
      <BBFilterBar css={cssOverrides}>
        {this.renderFilters()}
        {this.renderSorters()}
        <Button
          size={ButtonSize.Compact}
          display={ButtonDisplay.Secondary}
          css={css`
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
          css={css`
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
