import React, {
  Children,
  CSSProperties,
  FC,
  MouseEvent,
  PropsWithChildren,
  ReactElement,
  useState,
} from 'react'
import {
  Column,
  ControlledStateOverrideProps,
  ExpandedChangeFunction,
  FinalState,
  ReactTableDefaults,
  SortedChangeFunction,
  SortingRule,
  TableProps,
} from 'react-table'
import { isString } from 'util'
import { lookup } from 'fp-ts/lib/Array'
import { pipe } from 'fp-ts/lib/function'
import * as O from 'fp-ts/lib/Option'
import { showNumber } from 'fp-ts/lib/Show'
import { Do } from 'fp-ts-contrib/lib/Do'

import { Colors, getColor } from '@monorail/helpers/color'
import { flexFlow } from '@monorail/helpers/flex'
import { Sizes } from '@monorail/helpers/size'
import styled, { css } from '@monorail/helpers/styled-components'
import {
  ellipsis,
  FontSizes,
  typographyFont,
} from '@monorail/helpers/typography'
import { dropDirections } from '@monorail/metaComponents/popOver/PopOver'
import { PopOverNext } from '@monorail/metaComponents/popOver/PopOverNext'
import { ordStringByLocaleLowerCase } from '@monorail/sharedHelpers/fp-ts-ext/Ord'
import {
  assertNever,
  isFalse,
  isNil,
  isNotNil,
  isNumber,
  isTrue,
  isUndefined,
} from '@monorail/sharedHelpers/typeGuards'
import { Button } from '@monorail/visualComponents/buttons/Button'
import {
  ButtonDisplay,
  ButtonSize,
} from '@monorail/visualComponents/buttons/buttonTypes'
import {
  IconButton,
  StyledIconButton,
} from '@monorail/visualComponents/buttons/IconButton'
import {
  Banner,
  Detail,
  EmptyTable,
  IconBox,
  NoResultsIcon,
} from '@monorail/visualComponents/dataStates/DataStates'
import { Icon } from '@monorail/visualComponents/icon/Icon'
import { TextField } from '@monorail/visualComponents/inputs/TextField'
import { ScrollAnimation } from '@monorail/visualComponents/layout/ScrollAnimation'
import { Menu } from '@monorail/visualComponents/menu/Menu'
import { Status } from '@monorail/visualComponents/status/Status'
import { Loading } from '../loading/Loading'

export * from 'react-table'

export { default as ReactTable } from 'react-table'

const THEAD_HEIGHT = Sizes.DP40
const TD_HEIGHT = Sizes.DP40

export const TableComponent = styled.div`
  ${flexFlow('column')};

  overflow-x: hidden;
  height: 100%;
  min-width: 100%;
  position: relative; /* pos:rel need for filter bar. */
`

export const TheadComponentContainer = styled.div<{
  isFilterBar: boolean
  isGroupBar: boolean
}>(
  ({ isFilterBar, isGroupBar }) => css`
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

          ${!isGroupBar &&
            css`
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
        `};
  `,
)

export type TheadComponentProps = {
  className: string
  style?: CSSProperties
}

export const TheadComponent: FC<TheadComponentProps> = ({
  children,
  className,
  ...domProps
}) => {
  return (
    <TheadComponentContainer
      isFilterBar={className === '-filters'}
      isGroupBar={className === '-headerGroups'}
      className={className}
      {...domProps}
    >
      {children}
    </TheadComponentContainer>
  )
}

const ThComponentContainer = styled.div<{
  filterable?: boolean
}>(
  ({
    filterable,
    theme: {
      size: {
        table: { margin },
      },
    },
  }) => css`
    padding: 0 ${filterable ? 34 : 6}px 0 6px;

    ${flexFlow('row')};
    ${typographyFont(500, FontSizes.Title5)};

    pointer-events: none;
    align-items: center;
    color: ${getColor(Colors.Black89a)};
    position: relative;

    .rt-resizable-header-content {
      ${ellipsis};
    }

    &:first-of-type {
      padding-left: ${margin - 6}px;
    }

    &:last-of-type {
      padding-right: ${margin + 22}px;
    }

    .rt-resizable-header-content {
      ${ellipsis};
    }
  `,
)

export enum Sort {
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

export const getSortIcon = (sortStatus: Sort) => {
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

export function useSort(
  defaultSorted: Array<SortingRule> = [],
): [Array<SortingRule>, SortedChangeFunction] {
  const [sorted, setSorted] = useState<Array<SortingRule>>(defaultSorted)

  const onSortChange = (newSorted: Array<SortingRule>) => {
    setSorted(
      pipe(
        pipe(
          Do(O.option)
            .bind('current', lookup(0, sorted))
            .bind('upcoming', lookup(0, newSorted))
            .done(),
          O.filter(
            ({ current, upcoming }) =>
              current.id === upcoming.id && current.desc,
          ),
        ),
        O.fold(
          () => newSorted,
          () => [],
        ),
      ),
    )
  }

  return [sorted, onSortChange]
}

export type ThComponentProps = {
  className: string
  column?: Column
  isExpanderColumn: boolean
  isFiltered?: boolean
  show: boolean
  style?: CSSProperties
  isGroup?: boolean
  toggleSort: () => void
}

const ThLabel = styled.div`
  ${typographyFont(700, FontSizes.Title5)};

  color: ${getColor(Colors.Black89a)};
  font-weight: 500;
  justify-content: space-between;
  padding-left: 6px;
  pointer-events: all;
  text-transform: none;
  width: 100%;
`
export const ThSortButton = styled(Button).attrs({
  display: ButtonDisplay.Chromeless,
  size: ButtonSize.Compact,
})`
  color: ${getColor(Colors.Black89a)};
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

export const ThComponent: FC<ThComponentProps> = props => {
  const {
    children,
    className,
    column,
    isExpanderColumn,
    isFiltered,
    show,
    isGroup,
    toggleSort,
    ...domProps
  } = props

  const sortStatus = getSortStatus(className)
  const isFilterable = isNotNil(column) && !isFalse(column.filterable)
  const isSortable = isNotNil(column) && !isFalse(column.sortable)

  if (!show) {
    return <></>
  }

  if (isExpanderColumn) {
    return (
      <ThComponentContainer
        className={className}
        {...domProps}
        style={{ width: 52, flexShrink: 0 }}
      />
    )
  }

  if (isGroup) {
    return (
      <ThComponentContainer className={className} {...domProps}>
        {children}
      </ThComponentContainer>
    )
  }

  // Render empty header if there are actions.
  if (className.includes('actions')) {
    return <ThComponentContainer className={className} {...domProps} />
  }

  // Render Filter Header
  if (!isUndefined(isFiltered) && isNotNil(column)) {
    return (
      <ThComponentContainer
        className={className}
        filterable={isFilterable}
        {...domProps}
      >
        {isFilterable && (
          <>
            {/* Render Hidden Sort Button to give the correct spacing. */}
            <ThSortButton
              iconRight="sort"
              css={`
                visibility: hidden;
              `}
            >
              <div className="rt-resizable-header-content">
                {column && column.Header}
              </div>
            </ThSortButton>
            <PopOverNext
              toSide={false}
              xDirection={dropDirections.Right}
              popOver={popOverProps =>
                popOverProps.isOpen ? (
                  <Menu
                    {...popOverProps}
                    width={popOverProps.position.originWidth}
                  >
                    {children}
                  </Menu>
                ) : null
              }
              toggle={toggleProps => (
                <IconButton
                  {...toggleProps}
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
  const inputRef = React.useRef<HTMLInputElement>(null)
  React.useEffect(() => {
    setTimeout(() => {
      inputRef.current?.focus()
    }, 0)
  }, [])

  return (
    <TextField
      ref={inputRef}
      placeholder="Filter"
      value={!isNil(filter) ? filter.value : ''}
      onChange={event => onChange(event.target.value)}
      cssOverrides={css`
        width: unset;
        padding: 8px 12px;
        visibility: visible;
      `}
      hideStdErr
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

export type TrGroupComponentProps = { isGroup?: boolean }

export const TrGroupComponent = styled.div<{ isGroup?: boolean }>(
  ({ isGroup = false }) => css`
    ${isGroup
      ? css`
          ${flexFlow('column')};
        `
      : css`
          ${flexFlow('row')};
          height: auto;
          min-height: ${TD_HEIGHT}px;

          &:hover::before {
            background: ${getColor(Colors.Grey98)};
          }

          &:hover .actions ${StyledIconButton} {
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
        `};

    position: relative;
    flex-shrink: 0;
  `,
)

enum TdComponentType {
  Default = 'default',
  Actions = 'actions',
  Expandable = 'expandable',
  Hidden = 'hidden',
}

const tdComponentTypeStyles = {
  [TdComponentType.Default]: css``,
  [TdComponentType.Expandable]: css`
    height: ${TD_HEIGHT}px;
    background: #f6f6f9;
    cursor: pointer;
    user-select: none;
  `,
  [TdComponentType.Actions]: css`
    justify-content: flex-end;
  `,
  [TdComponentType.Hidden]: css``,
}

type TdComponentContainerProps = {
  className: string
  style?: CSSProperties
  onClick: (event: MouseEvent<HTMLDivElement>) => void
  tdComponentType: TdComponentType
}

export const TdComponentContainer = styled.div<TdComponentContainerProps>(
  ({
    tdComponentType,
    theme: {
      size: {
        table: { margin },
      },
    },
  }) => css`
    ${tdComponentTypeStyles[tdComponentType]}
    ${flexFlow('row')};
    ${typographyFont(400, FontSizes.Title5)};
    ${ellipsis};

    color: ${getColor(Colors.Black89a)};
    align-items: center;
    padding: 0 12px;
    position: relative;

    &:first-of-type {
      padding-left: ${margin}px;
    }

    &:last-of-type {
      padding-right: ${margin}px;
    }
  `,
)

export type TdComponentProps = Omit<
  TdComponentContainerProps,
  'tdComponentType'
> & {
  isExpanderColumn: boolean
}

const getTdComponentType = ({ className }: { className: string }) => {
  if (className.includes('actions')) {
    return TdComponentType.Actions
  } else if (className.includes('rt-expandable')) {
    return TdComponentType.Expandable
  } else if (className.includes('hidden')) {
    return TdComponentType.Hidden
  } else {
    return TdComponentType.Default
  }
}

export const TdComponent: FC<TdComponentProps> = props => {
  const { className, style, isExpanderColumn, ...domProps } = props
  const [titleText, setTitleText] = React.useState('')
  const containerRef = React.useRef<HTMLDivElement>(null)
  const tdComponentType = getTdComponentType({ className })

  React.useLayoutEffect(() => {
    if (containerRef.current) {
      setTitleText(containerRef.current.innerText)
    }
  }, [])

  if (tdComponentType === TdComponentType.Hidden) {
    return <></>
  } else if (tdComponentType === TdComponentType.Expandable) {
    return (
      <TdComponentContainer
        ref={containerRef}
        className={className}
        tdComponentType={tdComponentType}
        title={titleText}
        {...domProps}
      />
    )
  } else if (isExpanderColumn) {
    return (
      <TdComponentContainer
        ref={containerRef}
        className={className}
        style={{ width: 54, flexShrink: 0 }}
        tdComponentType={tdComponentType}
        title={titleText}
        {...domProps}
      />
    )
  }

  return (
    <TdComponentContainer
      ref={containerRef}
      className={className}
      style={style}
      tdComponentType={tdComponentType}
      title={titleText}
      {...domProps}
    />
  )
}

export const TBodyComponent = styled(
  ({ style, ...domProps }: { style?: { [key: string]: number | string } }) => (
    <ScrollAnimation containerCssOverrides={style} {...domProps} />
  ),
)`
  overflow-x: hidden;
`

export const NoDataContainer = styled.div`
  ${flexFlow('row')};
  ${typographyFont(400, FontSizes.Title5)};

  align-items: center;
  background: ${getColor(Colors.White)};
  bottom: 0;
  color: ${getColor(Colors.Black62a)};
  justify-content: center;
  overflow: auto;
  left: 0;
  position: absolute;
  right: 0;
  top: ${THEAD_HEIGHT}px;
`

const BannerDetailContainer = styled.div`
  ${flexFlow('column')};

  justify-content: center;
  margin-left: 16px;
`

export const NoDataComponentVertical: FC = () => (
  <NoDataContainer>
    <EmptyTable />
  </NoDataContainer>
)

export const NoDataComponentHorizontal: FC = () => (
  <NoDataContainer css="flex-direction: row; justify-content: center;">
    <IconBox>
      <NoResultsIcon />
    </IconBox>
    <BannerDetailContainer>
      <Banner css="margin: 0 0 16px;">No Entries Found</Banner>
      <Detail>We couldn't find any records.</Detail>
    </BannerDetailContainer>
  </NoDataContainer>
)

export const ExpanderComponent: TableCellRenderFunction<unknown> = ({
  isExpanded,
}) => (
  <IconButton
    icon="arrow_drop_down"
    display={ButtonDisplay.Chromeless}
    css={`
      margin-right: 8px;
      transform: rotate(${isExpanded ? 0 : '-90deg'});
    `}
  />
)

export const EllipsisValueComponent: TableCellRenderFunction<unknown> = ({
  value,
}) => {
  return (
    <div
      title={isNumber(value) ? showNumber.show(value) : value}
      css={ellipsis}
    >
      {value}
    </div>
  )
}

const LoadingWrapperContainer = styled.div`
  ${flexFlow('column')};

  align-items: center;
  height: 100%;
  justify-content: center;
  width: 100%;
`

export const LoadingWrapper = () => {
  return (
    <LoadingWrapperContainer>
      <Loading size={{ _type: 'size', hw: 64 }} />
    </LoadingWrapperContainer>
  )
}

export const MonorailReactTableOverrides: TableProps = {
  ...ReactTableDefaults,
  AggregatedComponent: (props: PropsWithChildren<{}>) => {
    return null
  },
  FilterComponent: (props: PropsWithChildren<FilterComponentProps>) => (
    <FilterComponent {...props} />
  ),
  LoadingComponent: ({ loading }: { loading: boolean }) =>
    loading ? (
      <NoDataContainer>
        <LoadingWrapper />
      </NoDataContainer>
    ) : null,
  ResizerComponent: (props: PropsWithChildren<{}>) => (
    <ResizerComponent {...props} />
  ),
  TableComponent: (props: PropsWithChildren<{}>) => (
    <TableComponent {...props} />
  ),
  TbodyComponent: (
    props: PropsWithChildren<{ style?: { [key: string]: number | string } }>,
  ) => <TBodyComponent {...props} />,
  TdComponent: (props: PropsWithChildren<TdComponentProps>) => (
    <TdComponent {...props} />
  ),
  ThComponent: (props: PropsWithChildren<ThComponentProps>) => (
    <ThComponent {...props} />
  ),
  TheadComponent: (props: PropsWithChildren<TheadComponentProps>) => (
    <TheadComponent {...props} />
  ),
  TrComponent: ({ children }: { children: ReactElement }) => children,
  TrGroupComponent: (props: PropsWithChildren<TrGroupComponentProps>) => (
    <TrGroupComponent {...props} />
  ),
  NoDataComponent: (props: PropsWithChildren<{}>) => (
    <NoDataComponentVertical />
  ),
  PivotComponent: (cellInfo: CellInfo<unknown>, column) => {
    const Expander: TableCellRenderFunction<unknown> =
      (cellInfo.column.Expander as TableCellRenderFunction<unknown>) ||
      ExpanderComponent
    const PivotValue: TableCellRenderFunction<unknown> =
      (cellInfo.column.PivotValue as TableCellRenderFunction<unknown>) ||
      EllipsisValueComponent

    return (
      <>
        {Expander(cellInfo, column)}
        {PivotValue(cellInfo, column)}
        {isNotNil(cellInfo.subRows) && (
          <Status inactive css="margin-left: 16px;">
            {cellInfo.subRows.length}
          </Status>
        )}
      </>
    )
  },
  getTrGroupProps: (finalState: unknown, rowInfo?: RowInfo<unknown>) => {
    if (isNil(rowInfo)) {
      return {}
    }

    return {
      isGroup: rowInfo.groupedByPivot,
      item: rowInfo.original,
    }
  },
  getTdProps: (
    { pivotBy = [] }: TableProps,
    rowInfo: RowInfo<unknown> | undefined,
    column: Column | undefined,
  ) => {
    const { id = '' } = column || {}

    return {
      isExpanderColumn: pivotBy.includes(id),
    }
  },
  getTheadFilterThProps: (
    { filtered, pivotBy = [] }: TableProps,
    rowInfo,
    column,
  ) => {
    const { id = '' } = column || {}
    return {
      isExpanderColumn: pivotBy.includes(id),
      show: isNil(column) ? true : column.show,
      column,
      isFiltered:
        isNil(filtered) || isNil(column)
          ? false
          : !!filtered.find(filter => filter.id === column.id),
    }
  },
  getTheadGroupThProps: (
    { hasHeaderGroups }: { hasHeaderGroups: boolean },
    rowInfo,
    column,
  ) => ({
    column,
    isGroup: hasHeaderGroups,
    show: hasHeaderGroups,
  }),
  getTheadThProps: (finalState: TableProps, rowInfo, column) => {
    const { pivotBy = [] } = finalState

    const { id = '' } = column || {}

    return {
      isExpanderColumn: pivotBy.includes(id),
      show: isNil(column) ? true : column.show,
      column,
    }
  },
  style: { height: '100%', width: '100%' },
  minRows: 0,
  showPagination: false,
  defaultFilterMethod: (filter: Filter, row: { [key: string]: unknown }) => {
    const id = filter.pivotId || filter.id
    return (
      isTrue(row._groupedByPivot) ||
      (!isUndefined(row[id]) &&
        String(row[id])
          .toLocaleLowerCase()
          .includes(filter.value.toLocaleString().toLocaleLowerCase()))
    )
  },
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  defaultSortMethod: (a: any, b: any) =>
    isString(a) && isString(b)
      ? ordStringByLocaleLowerCase.compare(a, b)
      : a > b
      ? 1
      : b > a
      ? -1
      : 0,
  sortable: true,
  filterable: true,
  resizable: true,
  loading: false,
  multiSort: false,
}

export function useTableExpandState<T extends object>({
  data,
  pivotKey,
  defaultExpanded = true,
}: {
  data: Array<T>
  pivotKey: keyof T
  defaultExpanded?: boolean
}): {
  expanded: Array<boolean>
  onExpandedChange: ExpandedChangeFunction
} {
  const initialValues = data
    .reduce<Array<T[keyof T]>>((accumulator, item) => {
      const pivotValue = item[pivotKey]

      if (isNotNil(pivotValue) && !accumulator.includes(pivotValue)) {
        return accumulator.concat(pivotValue)
      }

      return accumulator
    }, [])
    .map(() => defaultExpanded)

  const [expanderState, setExpanderState] = useState<Array<boolean>>(
    initialValues,
  )

  return {
    expanded: expanderState,
    onExpandedChange: expanded => setExpanderState(expanded), // tslint:disable-line:no-unsafe-any
  }
}

export function useTableExpandStateFixedGroups<T extends object>({
  totalGroups,
}: {
  totalGroups: number
}): {
  expanded: Array<boolean>
  onExpandedChange: ExpandedChangeFunction
} {
  const initialValues = new Array(totalGroups).fill(true)

  const [expanderState, setExpanderState] = useState<Array<boolean>>(
    initialValues,
  )

  return {
    expanded: expanderState,
    onExpandedChange: expanded => setExpanderState(expanded), // tslint:disable-line:no-unsafe-any
  }
}

export interface Filter {
  id: string
  value: string
  pivotId?: string
}

export type RowInfo<I> = {
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

export interface CellInfo<T, V = string | number>
  extends RowInfo<T>,
    Pick<ControlledStateOverrideProps, 'resized'> {
  /* true if this row is expanded */
  isExpanded: boolean

  /* the cell's column */
  column: Column

  /* materialized value of the cell */
  value: V

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

export type TableCellRenderFunction<I, V = string | number> = (
  cellInfo: CellInfo<I, V>,
  column: unknown,
) => React.ReactNode

export type TableCellRenderer<I, V = string | number> =
  | TableCellRenderFunction<I, V>
  | React.ReactNode

export type ComponentPropsGetterR<I> = (
  finalState: FinalState<I> & {
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

/** Setting up default components for `ReactTable` to use so that we don't have
 * to set them on every table. */
Object.assign(ReactTableDefaults, {
  ...MonorailReactTableOverrides,
})
