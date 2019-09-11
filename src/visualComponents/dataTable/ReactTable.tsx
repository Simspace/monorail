import { Do } from 'fp-ts-contrib/lib/Do'
import { lookup } from 'fp-ts/lib/Array'
import { option } from 'fp-ts/lib/Option'
import React, {
  Children,
  CSSProperties,
  FC,
  PropsWithChildren,
  ReactElement,
  useState,
} from 'react'
import {
  Column,
  ControlledStateOverrideProps,
  SortedChangeFunction,
  SortingRule,
  TableProps,
} from 'react-table'

import { Colors, getColor } from '@monorail/helpers/color'
import { flexFlow } from '@monorail/helpers/flex'
import { Sizes } from '@monorail/helpers/size'
import styled, { css } from '@monorail/helpers/styled-components'
import { ellipsis, FontSizes, typography } from '@monorail/helpers/typography'
import { dropDirections } from '@monorail/metaComponents/popOver/PopOver'
import { PopOverNext } from '@monorail/metaComponents/popOver/PopOverNext'
import {
  assertNever,
  isFalse,
  isNil,
  isUndefined,
} from '@monorail/sharedHelpers/typeGuards'
import { Button } from '@monorail/visualComponents/buttons/Button'
import {
  ButtonDisplay,
  ButtonSize,
} from '@monorail/visualComponents/buttons/buttonTypes'
import { IconButton } from '@monorail/visualComponents/buttons/IconButton'
import { EmptyTable } from '@monorail/visualComponents/dataStates/DataStates'
import { Icon } from '@monorail/visualComponents/icon/Icon'
import { TextField } from '@monorail/visualComponents/inputs/TextField'
import { ScrollAnimation } from '@monorail/visualComponents/layout/ScrollAnimation'
import { Menu } from '@monorail/visualComponents/menu/Menu'

const THEAD_HEIGHT = Sizes.DP40

export const TableComponent = styled.div`
  ${flexFlow('column')};

  overflow-x: scroll;
  height: 100%;
  min-width: 100%;
  position: relative; /* pos:rel need for filter bar. */
`

export const TheadComponentContainer = styled.div<{ isFilterBar: boolean }>(
  ({ isFilterBar }) => css`
    ${flexFlow('row')};

    flex-shrink: 0;
    height: ${THEAD_HEIGHT}px;
    position: relative;

    ${isFilterBar
      ? css`
          left: 0;
          pointer-events: none;
          position: absolute;
          right: 0;
          top: 0;
        `
      : css`
          background: ${getColor(Colors.Grey99)};
          overflow: hidden;

          &::after {
            background: ${getColor(Colors.Grey90)};
            bottom: 0;
            content: '';
            height: 1px;
            left: 0;
            position: absolute;
            right: 0;
          }
        `};
  `,
)

export type TheadComponentProps = {
  className: string
  hasFilter?: boolean
  style?: CSSProperties
}

export const TheadComponent: FC<TheadComponentProps> = ({
  children,
  className,
  hasFilter,
  ...domProps
}) => {
  return (
    <TheadComponentContainer
      isFilterBar={className === '-filters'}
      className={className}
      {...domProps}
    >
      {children}
    </TheadComponentContainer>
  )
}

enum ThComponentType {
  Action = 'actions',
  Filter = 'filter',
  Sort = 'sort',
}

const ThComponentContainer = styled.div<{
  type: ThComponentType
  filterable?: boolean
}>(
  ({ type, filterable }) => css`
    padding: 0 ${filterable ? 34 : 6}px 0 6px;

    ${flexFlow('row')};
    ${typography(500, FontSizes.Title5)};

    pointer-events: none;
    align-items: center;
    color: ${getColor(Colors.Black89)};
    position: relative;

    .rt-resizable-header-content {
      ${ellipsis};
    }

    &:first-of-type {
      padding-left: 26px;
    }

    &:last-of-type {
      padding-right: 54px;
    }

    .rt-resizable-header-content {
      ${ellipsis};
    }
  `,
)

enum Sort {
  Ascending = 'ascending',
  Descending = 'descending',
  Unsorted = 'unsorted',
}

const getSortStatus = (className: string) => {
  if (className.includes('-sort-desc')) {
    return Sort.Descending
  } else if (className.includes('-sort-asc')) {
    return Sort.Ascending
  } else {
    return Sort.Unsorted
  }
}

const getSortIcon = (sortStatus: Sort) => {
  switch (sortStatus) {
    case Sort.Ascending:
      return 'sort_ascending'
    case Sort.Descending:
      return 'sort_descending'
    case Sort.Unsorted:
      return 'sort'
    default:
      assertNever(sortStatus)
      return ''
  }
}

export function useSort(): [Array<SortingRule>, SortedChangeFunction] {
  const [sorted, setSorted] = useState<Array<SortingRule>>([])

  const onSortChange = (newSorted: Array<SortingRule>) => {
    setSorted(
      Do(option)
        .bind('current', lookup(0, sorted))
        .bind('upcoming', lookup(0, newSorted))
        .done()
        .filter(
          ({ current, upcoming }) => current.id === upcoming.id && current.desc,
        )
        .fold(newSorted, () => []),
    )
  }

  return [sorted, onSortChange]
}

export type ThComponentProps = {
  toggleSort: () => void
  className: string
  column?: Column
  isFiltered?: boolean
  style?: CSSProperties
}

const ThLabel = styled.div`
  ${typography(700, FontSizes.Title5)};

  color: ${getColor(Colors.Black89)};
  font-weight: 500;
  justify-content: space-between;
  padding-left: 6px;
  pointer-events: all;
  text-transform: none;
  width: 100%;
`
const ThSortButton = styled(Button).attrs({
  display: ButtonDisplay.Chromeless,
  size: ButtonSize.Compact,
})`
  color: ${getColor(Colors.Black89)};
  font-weight: 500;
  justify-content: space-between;
  padding-left: 6px;
  pointer-events: all;
  text-transform: none;
  width: 100%;

  ${Icon} {
    margin-right: -4px;
    margin-left: 2px;
  }
`

export const ThComponent: FC<ThComponentProps> = ({
  children,
  toggleSort,
  className,
  column,
  isFiltered,
  ...domProps
}) => {
  const sortStatus = getSortStatus(className)
  const isFilterable = !isNil(column) && !isFalse(column.filterable)
  const isSortable = !isNil(column) && !isFalse(column.sortable)

  // Render empty header if there are actions.
  if (className.includes('actions')) {
    return (
      <ThComponentContainer
        type={ThComponentType.Action}
        className={className}
        {...domProps}
      />
    )
  }

  // Render Filter Header
  if (!isUndefined(isFiltered)) {
    return (
      <ThComponentContainer
        type={ThComponentType.Filter}
        className={className}
        filterable={isFilterable}
        {...domProps}
      >
        {!isNil(column) && isFilterable && (
          <>
            {/* Render Hidden Sort Button to give the correct spacing. */}
            <ThSortButton
              iconRight="sort"
              css={`
                width: auto;
                visibility: hidden;
              `}
            >
              <div className="rt-resizable-header-content">{column.Header}</div>
            </ThSortButton>
            <PopOverNext
              xDirection={dropDirections.Right}
              popOver={props => (
                <Menu {...props} width={props.position.originWidth}>
                  {children}
                </Menu>
              )}
              toggle={props => (
                <IconButton
                  {...props}
                  css={`
                    margin: auto -24px auto auto;
                    pointer-events: all;
                    transform: translateX(4px);
                  `}
                  display={ButtonDisplay.Chromeless}
                  icon="filter"
                  isActive={isFiltered}
                  className={isFiltered ? 'is-active' : ''}
                />
              )}
            />
          </>
        )}
      </ThComponentContainer>
    )
  }

  const childrenArray = Children.toArray(children)

  const Header = childrenArray[0]
  const Resizer = childrenArray[1]

  // Render Sorted Header
  return (
    <ThComponentContainer
      type={ThComponentType.Sort}
      className={className}
      filterable={isFilterable}
      {...domProps}
    >
      {isSortable ? (
        <ThSortButton
          isActive={sortStatus !== Sort.Unsorted}
          onClick={toggleSort}
          iconRight={getSortIcon(sortStatus)}
          className={sortStatus !== Sort.Unsorted ? 'is-active' : ''}
        >
          {Header}
        </ThSortButton>
      ) : (
        <ThLabel>{Header}</ThLabel>
      )}
      {Resizer}
    </ThComponentContainer>
  )
}

type FilterComponentProps = {
  column: Column
  filter?: {
    id: string
    value: string
  }
  onChange: (event: unknown) => void
}

export const FilterComponent: FC<FilterComponentProps> = ({
  filter,
  onChange,
}) => {
  return (
    <TextField
      placeholder="Filter"
      value={!isNil(filter) ? filter.value : ''}
      onChange={event => onChange(event.target.value)}
      cssOverrides={css`
        width: 100%;
        padding: 8px 12px;
      `}
    />
  )
}

export const ResizerComponent = styled.div`
  bottom: 4px;
  cursor: col-resize;
  pointer-events: all;
  position: absolute;
  right: -4px;
  top: 4px;
  width: 9px;

  &::after {
    background: ${getColor(Colors.Grey94)};
    bottom: 0;
    content: '';
    left: 4px;
    position: absolute;
    top: 0;
    width: 1px;
  }
`

export const TrGroupComponent = styled.div`
  ${flexFlow('row')};

  height: 40px;
  position: relative;
  flex-shrink: 0;

  &:hover::before {
    background: ${getColor(Colors.Grey98)};
  }
  &:hover .actions {
    opacity: 0.9999;
  }

  &::before {
    bottom: 1px;
    content: '';
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
  }
`

export const TdComponent = styled.div(
  ({ className }) => css`
    ${!isNil(className) &&
      className.includes('actions') &&
      `justify-content: flex-end;
      opacity: 0.3;
      `}

    ${flexFlow('row')};
    ${typography(400, FontSizes.Title5)};

    ${ellipsis};

    color: ${getColor(Colors.Black89)};
    align-items: center;
    padding: 0 12px;
    position: relative;

    &:first-of-type {
      padding-left: 32px;
    }

    &:last-of-type {
      padding-right: 32px;
    }
  `,
)

export const TBodyComponent = styled(
  ({ style, ...domProps }: { style?: { [key: string]: number | string } }) => (
    <ScrollAnimation containerCssOverrides={style} {...domProps} />
  ),
)`
  overflow-x: hidden;
`

export const NoDataContainer = styled.div`
  ${flexFlow('column')};
  ${typography(400, FontSizes.Title5)};

  align-items: center;
  background: ${getColor(Colors.White)};
  bottom: 0;
  color: ${getColor(Colors.Black62)};
  justify-content: center;
  left: 0;
  position: absolute;
  right: 0;
  top: ${THEAD_HEIGHT}px;
`

export const MonorailReactTableOverrides: Partial<TableProps> = {
  FilterComponent: (props: PropsWithChildren<FilterComponentProps>) => (
    <FilterComponent {...props} />
  ),
  ResizerComponent: (props: PropsWithChildren<{}>) => (
    <ResizerComponent {...props} />
  ),
  TableComponent: (props: PropsWithChildren<{}>) => (
    <TableComponent {...props} />
  ),
  TbodyComponent: (
    props: PropsWithChildren<{ style: { [key: string]: number | string } }>,
  ) => <TBodyComponent {...props} />,
  TdComponent: (props: PropsWithChildren<{}>) => <TdComponent {...props} />,
  ThComponent: (props: PropsWithChildren<ThComponentProps>) => (
    <ThComponent {...props} />
  ),
  TheadComponent: (props: PropsWithChildren<TheadComponentProps>) => (
    <TheadComponent {...props} />
  ),
  TrComponent: ({ children }: { children: ReactElement }) => children,
  TrGroupComponent: (props: PropsWithChildren<{}>) => (
    <TrGroupComponent {...props} />
  ),
  NoDataComponent: (props: PropsWithChildren<{}>) => (
    <NoDataContainer>
      <EmptyTable />
    </NoDataContainer>
  ),
  getTheadThProps: (state, rowInfo, column) => ({
    column,
  }),
  getTheadFilterThProps: (
    {
      filtered,
    }: {
      filtered?: Array<{
        id: string
        value: string
      }>
    },
    rowInfo,
    column,
  ) => {
    return {
      column,
      isFiltered:
        isNil(filtered) || isNil(column)
          ? false
          : !!filtered.find(filter => filter.id === column.id),
    }
  },
  style: { height: '100%', width: '100%' },
  minRows: 0,
  getTheadProps: () => ({ hasFilter: true }),
  showPagination: false,
  defaultFilterMethod: (filter: Filter, row: { [key: string]: unknown }) => {
    const id = filter.pivotId || filter.id
    return (
      !isUndefined(row[id]) &&
      String(row[id])
        .toLocaleLowerCase()
        .includes(filter.value.toLocaleString().toLocaleLowerCase())
    )
  },
  filterable: true,
  resizable: true,
  loading: false,
  multiSort: false,
}

export interface Filter {
  id: string
  value: string
  pivotId?: string
}

type RowInfo<I> = {
  /** Materialized row of data */
  row: unknown

  /** The post-accessed values from the original row */
  rowValues: unknown

  /** The index of the row */
  index: number

  /** The index of the row relative to the current page */
  viewIndex: number

  /** The size of the page */
  pageSize: number

  /** The index of page */
  page: number

  /** The nesting depth (zero-indexed) */
  level: number

  /** The nesting path of the row */
  nestingPath: Array<number>

  /** A boolean stating if the row is an aggregation row */
  aggregated: boolean

  /** A boolean stating if the row is grouped by Pivot */
  groupedByPivot: boolean

  /** An array of any expandable sub-rows contained in this row */
  subRows: Array<unknown>

  /** Original object passed to row */
  original: I
}

export interface CellInfo<I>
  extends RowInfo<I>,
    Pick<ControlledStateOverrideProps, 'resized'> {
  /* true if this row is expanded */
  isExpanded: boolean

  /* the cell's column */
  column: Column

  /* materialized value of the cell */
  value: string | number

  /* true if the column is pivoted */
  pivoted: boolean

  /* true if this column is an expander */
  expander: boolean

  /* true if the column is visible */
  show: boolean

  /* resolved width of the cell */
  width: number

  /* resolved maxWidth of the cell */
  maxWidth: number

  /* resolved tdProps from `getTdProps` for this cell */
  tdProps: unknown

  /* resolved column props from 'getProps' for this cell's column */
  columnProps: unknown

  /* resolved array of classes for the cell */
  classes: Array<string>

  /* resolved styles for this cell */
  styles: object
}

export type TableCellRenderer<I> =
  | ((cellInfo: CellInfo<I>, column: unknown) => React.ReactNode)
  | React.ReactNode

export type ComponentPropsGetterR<I> = (
  finalState: {
    filtered?: Array<{
      id: string
      value: string
    }>
  },
  rowInfo?: RowInfo<I>,
  column?: Column<I>,
  instance?: unknown,
) => object | undefined

export type TableColumns<T> = Array<Column<T>>
