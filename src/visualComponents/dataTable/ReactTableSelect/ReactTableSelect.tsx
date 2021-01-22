import React, { useState } from 'react'
import ReactTable, {
  Column,
  ComponentPropsGetter0,
  ComponentPropsGetterR,
  DerivedDataObject,
  RowInfo,
  TableProps,
} from 'react-table'
import AutoSizer from 'react-virtualized-auto-sizer'
import { FixedSizeList as List } from 'react-window'
import { FlattenSimpleInterpolation } from 'styled-components'
import { Overwrite } from 'typelevel-ts'
import { A, O, pipe, R } from '@monorail/sharedHelpers/fp-ts-imports'

import { Colors, getColor } from '@monorail/helpers/exports'
import { css } from '@monorail/helpers/styled-components'
import { logger } from '@monorail/v2/shared/helpers'
import { NoData } from '@monorail/visualComponents/dataStates/DataStates'
import { useSort } from '@monorail/visualComponents/dataTable/ReactTable'
import {
  DEFAULT_ITEMS_PER_PAGE_OPTION,
  ItemsPerPageOption,
  itemsPerPageOptionToValue,
} from '@monorail/visualComponents/dataTable/ReactTableSelect/helpers'
import { SelectionSummaryBar } from '@monorail/visualComponents/dataTable/ReactTableSelect/SelectionSummaryBar'
import { Choice } from '@monorail/visualComponents/inputs/Choice'

enum SELECTED {
  ALL = 'ALL',
  SOME = 'SOME',
  NONE = 'NONE',
}

export enum CheckboxType {
  Radio = 'RADIO',
  Checkbox = 'CHECKBOX',
}

const getDefaultTrProps = (props: { disabled: boolean }) => ({
  isRow: true,
  css: css`
    display: flex;
    flex-flow: row nowrap;
    height: auto;
    min-height: 40px;
    position: relative;
    width: 100%;
    cursor: ${props.disabled ? 'default' : 'pointer'};
    transition: all 150ms;
    :hover {
      background: ${props.disabled
        ? 'inherit'
        : getColor(Colors.AccentBlue300, 0.1)};
    }
    ${props.disabled
      ? css`
          & :not(i) {
            color: ${props.disabled ? getColor(Colors.Gray54) : 'inherit'};
            font-style: ${props.disabled ? 'italic' : 'inherit'};
          }
        `
      : ''}
  `,
})

const DefaultTrComponent = (props: {
  children: React.ReactElement
  onClick: () => void
  style: React.CSSProperties
  isRow: boolean
  css: FlattenSimpleInterpolation
}) => {
  if (!props.isRow) {
    return props.children
  } else {
    return (
      <div css={props.css} onClick={props.onClick} style={props.style}>
        {props.children}
      </div>
    )
  }
}

const TBodyComponent = (tbodyComponentProps: {
  children: Array<Array<JSX.Element>>
  className: string
  style: React.CSSProperties
  rowHeight: number
}) => {
  const { rowHeight, children } = tbodyComponentProps

  return pipe(
    children,
    O.fromPredicate(Array.isArray),
    O.chain(A.head),
    O.chain(O.fromPredicate(Array.isArray)),
    O.chain(O.fromPredicate(A.isNonEmpty)),
    O.fold(
      () => {
        return <NoData />
      },
      (items: Array<JSX.Element>) => {
        const Row = (rowProps: {
          index: number
          style: React.CSSProperties
        }) => <div style={rowProps.style}>{items[rowProps.index]}</div>

        return (
          <div style={{ flex: '1 1 auto' }}>
            <AutoSizer
              css={css`
                margin: 0;
                padding: 0;
              `}
            >
              {({ width, height }) => (
                /* prefer FixedSizeList for performance Daniel Laubacher  Thu 30 Jul 2020 **/
                <List
                  style={{ outline: 'none', willChange: 'unset' }}
                  width={width}
                  height={height}
                  itemSize={rowHeight}
                  itemCount={items.length}
                >
                  {Row}
                </List>
              )}
            </AutoSizer>
          </div>
        )
      },
    ),
  )
}

export type SelectableTableProps<T> = {
  selectProps: {
    onSelectionChange: (sel: Record<string, T>) => void
    selected: Record<string, T>
    getId: (x: T) => string
    isDisabled: (x: T) => boolean
    totalItems: number // This will prevent the count from getting out of sync when search is used to filter items DL 6/20
    rowHeight: number
    type?: CheckboxType
  }
  reactTableProps: ModifiedReactTableProps<T> &
    Required<Pick<TableProps<T>, 'data' | 'columns'>>
}

type ModifiedReactTableProps<T> = Partial<
  Omit<TableProps<T>, 'data' | 'columns' | 'getTrProps' | 'TrComponent'>
>

export const ReactTableSelect = <T extends unknown>({
  selectProps: { type = CheckboxType.Checkbox, totalItems, ...selectProps },
  reactTableProps: { ...reactTableProps },
}: SelectableTableProps<T>) => {
  const [itemsPerPage, setItemsPerPage] = useState<ItemsPerPageOption>(
    DEFAULT_ITEMS_PER_PAGE_OPTION,
  )
  const [sorted, onSortedChange] = useSort()

  const isSelected = (item: T) =>
    O.isSome(R.lookup(selectProps.getId(item), selectProps.selected))

  const toggleCheckbox = (args: { item: T; sel: Record<string, T> }) => {
    const { item, sel } = args
    const id = selectProps.getId(item)
    return O.isSome(R.lookup(id, sel))
      ? R.deleteAt(id)(sel)
      : R.insertAt(id, item)(sel)
  }

  const toggleRadio = (args: { item: T; sel: Record<string, T> }) => {
    const { item, sel } = args
    const id = selectProps.getId(item)
    return O.isSome(R.lookup(id, sel)) ? {} : { [id]: item }
  }

  const toggleItem = (item: T) => (sel: Record<string, T>) => {
    return type === CheckboxType.Checkbox
      ? toggleCheckbox({ item, sel })
      : toggleRadio({ item, sel })
  }

  const removeDisabledItems = (items: Array<T>) =>
    items.filter(x => !selectProps.isDisabled(x))

  const removeItems = (items: Array<T>) =>
    items.reduce(
      (acc, cur) => R.deleteAt(selectProps.getId(cur))(acc),
      selectProps.selected,
    )
  const addItems = (items: Array<T>) =>
    items.reduce(
      (acc, cur) => R.insertAt(selectProps.getId(cur), cur)(acc),
      selectProps.selected,
    )

  const toggleAll = (items: Array<T>) => {
    return getSelected(items) === SELECTED.ALL
      ? removeItems(items)
      : addItems(items)
  }

  const getSelected = (items: Array<T>) =>
    items.every(isSelected)
      ? SELECTED.ALL
      : items.some(isSelected)
      ? SELECTED.SOME
      : SELECTED.NONE

  const selectColumn: Column<T> = {
    Header: (info: { data: Array<DerivedDataObject> }) => {
      const visibleRows = info.data.map(data => data._original as T)
      const selected = getSelected(visibleRows)
      const noVisibleItems = reactTableProps.data.length === 0

      return type === CheckboxType.Checkbox ? (
        <Choice
          indeterminate={selected === SELECTED.SOME}
          dense
          style={{ width: 24, padding: 0 }}
          centeredInput
          type={'checkbox'}
          checked={selected === SELECTED.ALL && !noVisibleItems}
          disabled={noVisibleItems}
          onClick={() => {
            selectProps.onSelectionChange(
              toggleAll(removeDisabledItems(visibleRows)),
            )
          }}
        />
      ) : null
    },
    Cell: (info: { original: T }) => {
      return (
        <Choice
          indeterminate={false}
          dense
          readOnly
          style={{ width: 24, padding: 0 }}
          centeredInput
          type={type === CheckboxType.Checkbox ? 'checkbox' : 'radio'}
          checked={isSelected(info.original)}
          disabled={selectProps.isDisabled(info.original)}
          onClick={() => {
            /** Handle click on the row not the cell DL 6/20 */
          }}
        />
      )
    },
    width: 60,
    filterable: false,
    sortable: false,
    resizable: true,
    style: { textAlign: 'center' },
  }

  return (
    <ReactTable
      sorted={sorted}
      onSortedChange={onSortedChange}
      getPaginationProps={() => ({
        itemsPerPage,
        totalItems,
        totalSelectedItems: Object.keys(selectProps.selected).length,
        onItemsPerPageChange: setItemsPerPage,
      })}
      PaginationComponent={SelectionSummaryBar}
      {...reactTableProps}
      columns={[selectColumn, ...reactTableProps.columns]}
      pageSize={itemsPerPageOptionToValue(itemsPerPage, totalItems)}
      getTbodyProps={
        (() => {
          return { rowHeight: selectProps.rowHeight }
        }) as ComponentPropsGetter0
      }
      TbodyComponent={TBodyComponent}
      getTrProps={
        ((_: unknown, rowInfo?: Overwrite<RowInfo, { original: T }>) => {
          const { onClick, disabled } = pipe(
            O.fromNullable(rowInfo),
            O.fold(
              () => {
                return {
                  onClick: () =>
                    logger(({ warn }) =>
                      warn(
                        '*WARNING* Possible error in `getTrProps` within `ReactTableSelect`! `rowInfo` is undefined',
                      ),
                    ),
                  disabled: false,
                }
              },
              row => {
                const disabled_ = selectProps.isDisabled(row.original)
                return {
                  onClick: () => {
                    if (!disabled_) {
                      selectProps.onSelectionChange(
                        toggleItem(row.original)(selectProps.selected),
                      )
                    }
                  },
                  disabled: disabled_,
                }
              },
            ),
          )

          return {
            ...getDefaultTrProps({ disabled }),
            onClick,
            disabled,
          }
        }) as ComponentPropsGetterR
      }
      TrComponent={DefaultTrComponent}
    />
  )
}
