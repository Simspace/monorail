import React, { Component, Fragment, ReactNode } from 'react'
import styled, { css, SimpleInterpolation } from 'styled-components'
import { ease, flexFlow, visible, typography, FontSizes } from 'CommonStyles'
import { Div } from 'StyleHelpers'

import { Filter } from 'filters/Filter'
import { Search } from 'inputs/Search'
import { Choice } from 'inputs/Choice'
import { Status } from 'status/Status'
import { Button } from 'buttons/Button'

import { FilterGroupsWithData, FilterGroupWithData, SorterGroup } from './types'
import { ButtonDisplay, ButtonSize } from 'buttons/buttonTypes'

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

type Props = {
  css?: SimpleInterpolation
  filterGroups: FilterGroupsWithData
  sorterGroup?: SorterGroup
  isFiltered: boolean
  onFilterChange: (group: string, filter: string, value: boolean) => void
  onSearchChange: (searchText: string) => void
  onSorterChange?: (key: string) => void
  resetFilters: () => void
  searchText: string
}

export class FilterBar extends Component<Props> {
  renderFilterName = (filterGroup: FilterGroupWithData): ReactNode => {
    if (filterGroup.activeFilterCount === filterGroup.filters.length) {
      // If unchanged, just show label
      return filterGroup.label
    } else if (filterGroup.activeFilterCount > 1) {
      // If changed and label is greater than 1, show the count
      return (
        <Fragment>
          {filterGroup.label}
          <Status
            css={css`
              margin-left: 4px;
            `}
          >
            {filterGroup.activeFilterCount}
          </Status>
        </Fragment>
      )
    } else if (filterGroup.activeFilterCount === 1) {
      // If equal to 1, show the label and the single active filter
      return `${filterGroup.label} - ${filterGroup.filters[0].label}`
    } else {
      // Otherwise no filters are checked, so show None
      return `${filterGroup.label} - None`
    }
  }

  renderFilters = () => {
    const { filterGroups, onFilterChange } = this.props

    return filterGroups.map(group => (
      <Filter
        content={group.filters.map(filter => (
          <Choice
            onChange={event =>
              onFilterChange(
                group.key,
                filter.key,
                event!.currentTarget.checked,
              )
            }
            type="checkbox"
            checked={filter.checked}
            key={filter.key}
          >
            {filter.label}
          </Choice>
        ))}
        css={css`
          margin: 4px;
        `}
        isOpen={false}
        isActive={group.activeFilterCount !== group.filters.length}
        key={group.key}
        title={this.renderFilterName(group)}
      />
    ))
  }

  renderSorters = () => {
    const { sorterGroup, onSorterChange } = this.props

    return sorterGroup ? (
      <Filter
        content={sorterGroup.sorters.map(sorter => (
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
        isOpen={false}
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
          `}
          value={searchText}
          onChange={onSearchChange}
        />
      </BBFilterBar>
    )
  }
}
