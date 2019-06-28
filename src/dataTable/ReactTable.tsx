import React, {
  FunctionComponent,
  PropsWithChildren,
  ReactElement,
} from 'react'
import { Column, ControlledStateOverrideProps, TableProps } from 'react-table'

import { Button } from '@monorail/buttons/Button'
import { ButtonDisplay, ButtonSize } from '@monorail/buttons/buttonTypes'
import { IconButton } from '@monorail/buttons/IconButton'
import { Colors, getColor } from '@monorail/helpers/color'
import { flexFlow } from '@monorail/helpers/flex'
import styled, { css } from '@monorail/helpers/styled-components'
import { ellipsis, FontSizes, typography } from '@monorail/helpers/typography'
import { TextField } from '@monorail/inputs/TextField'
import { Menu } from '@monorail/menu/Menu'
import { PopOver } from '@monorail/popOver/PopOver'
import { isNil } from '@monorail/sharedHelpers/typeGuards'

export const TableComponent = styled.div`
  ${flexFlow('column')}
  overflow-x: scroll;
  height: 100%;
  min-width: 100%;
`

const TheadComponentContainer = styled.div<{ isFilterBar: boolean }>(
  ({ isFilterBar }) => css`
    ${flexFlow('row')};

    height: 48px;
    flex-shrink: 0;

    ${isFilterBar
      ? css`
          margin-top: -48px;
          pointer-events: none;
        `
      : css`
          border-bottom: 1px solid ${getColor(Colors.Grey90)};
          background: ${getColor(Colors.Grey99)};
          overflow: hidden;
        `};
  `,
)

type TheadComponentProps = {
  className: string
  hasFilter?: boolean
}

export const TheadComponent: FunctionComponent<TheadComponentProps> = ({
  children,
  className,
  hasFilter,
  ...domProps
}) => {
  return (
    <TheadComponentContainer
      isFilterBar={className === '-filters'}
      {...domProps}
    >
      {children}
    </TheadComponentContainer>
  )
}

const ThComponentContainer = styled.div`
  ${flexFlow('row')};
  ${typography(500, FontSizes.Title5)};

  align-items: center;
  color: ${getColor(Colors.Black89)};
  padding: 0 12px;
  position: relative;

  &:first-of-type {
    padding-left: 32px;
  }

  &:last-of-type {
    padding-right: 32px;
  }

  .rt-resizable-header-content {
    ${ellipsis};

    margin-right: 32px;
  }
`

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
  }
}

type ThComponentProps = {
  toggleSort: () => void
  className: string
  column?: Column
  isFiltered?: boolean
}

export const ThComponent: FunctionComponent<ThComponentProps> = ({
  children,
  toggleSort,
  className,
  column,
  isFiltered,
  ...domProps
}) => {
  const sortStatus = getSortStatus(className)

  if (className.includes('actions')) {
    return <ThComponentContainer className={className} {...domProps} />
  }

  if (!isNil(column)) {
    return (
      <ThComponentContainer className={className} {...domProps}>
        <PopOver
          popOver={props => (
            <Menu {...props} width={props.position.originWidth}>
              {children}
            </Menu>
          )}
          toggle={props => (
            <Button
              {...props}
              size={ButtonSize.Large}
              display={ButtonDisplay.Chromeless}
              css={`
                margin: auto 28px auto -8px;
                pointer-events: all;
                flex: 1;
              `}
            >
              <IconButton
                css="margin: auto -11px auto auto; pointer-events: none;"
                display={ButtonDisplay.Chromeless}
                icon="filter"
                isActive={isFiltered}
                passedAs="div"
              />
            </Button>
          )}
        />
      </ThComponentContainer>
    )
  }

  return (
    <ThComponentContainer className={className} {...domProps}>
      {children}

      <IconButton
        isActive={sortStatus !== Sort.Unsorted}
        display={ButtonDisplay.Chromeless}
        icon={getSortIcon(sortStatus)}
        onClick={toggleSort}
        css="margin: auto 0 auto auto;"
      />
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

export const FilterComponent: FunctionComponent<FilterComponentProps> = ({
  filter,
  onChange,
}) => {
  return (
    <TextField
      type="text"
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
      'justify-content: flex-end;'}

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

export const TBodyComponent = styled.div`
  ${flexFlow('column')};

  flex: 1 1 100%;
  overflow-y: auto;
  overflow-x: hidden;
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
  TbodyComponent: (props: PropsWithChildren<{}>) => (
    <TBodyComponent {...props} />
  ),
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
  style: { width: '100%' },
  minRows: 0,
  getTheadProps: () => ({ hasFilter: true }),
  showPagination: false,
  defaultFilterMethod: (filter: Filter, row: { [key: string]: unknown }) => {
    const id = filter.pivotId || filter.id
    return row[id] !== undefined
      ? String(row[id])
          .toLocaleLowerCase()
          .includes(filter.value.toLocaleString().toLocaleLowerCase())
      : true
  },
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
