/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'

import type { CreateTableOverloads } from '../generated/CreateTableOverloads.js'
import type { GridApi, GridColDef, GridValidRowModel } from '../internal.js'
import { clearAllFilterState, clearFilterState } from '../utils.js'
import type {
  GridColFilterState,
  GridColFilterTypeMap,
} from './gridColFilterType.js'
import type { MakeTypedColDef } from './makeTypedColDef.js'

/**
 * Phantom type key
 */
const Field: unique symbol = Symbol()
type Field = typeof Field

/**
 * Phantom type key
 */
const FieldToRow: unique symbol = Symbol()
type FieldToRow = typeof FieldToRow

/**
 * Phantom type key
 */
const FieldToFormatted: unique symbol = Symbol()
type FieldToFormatted = typeof FieldToFormatted

/**
 * Phantom type key
 */
const FilterableField: unique symbol = Symbol()
type FilterableField = typeof FilterableField
/**
 * Phantom type key
 */
const FieldToColumn: unique symbol = Symbol()
type FieldToColumn = typeof FieldToColumn
/**
 * Phantom type key
 */
const FieldToValue: unique symbol = Symbol()
type FieldToValue = typeof FieldToValue
/**
 * Phantom type key
 */
const FieldToFilterType: unique symbol = Symbol()
type FieldToFilterType = typeof FieldToFilterType
/**
 * Phantom type key
 */
const FieldToFilterState: unique symbol = Symbol()
type FieldToFilterState = typeof FieldToFilterState

/**
 * The definition of a Table, which is a set of DataGrid columns. Includes an array of columns
 * meant for passing to the DataGrid `columns` prop, as well as various utilities for interacting
 * with the table.
 */
export interface TableDef<Cols extends ErasedMakeTypedColDefs> {
  /**
   * The column definition array, give this to the `columns` prop of DataGrid.
   */
  columns: {
    [i in keyof Cols]: Cols[i] extends MakeTypedColDef<
      infer R,
      any,
      infer V,
      any,
      infer F,
      any
    >
      ? GridColDef<R, V, F>
      : never
  }

  /**
   * Subscribes to debounced filter state changes of the given `field`
   *
   * @returns A function that unsubscribes from filter state changes
   */
  subscribeToFilter: <K extends this[FilterableField]>(
    apiRef: React.MutableRefObject<GridApi>,
    field: K,
    f: (_: this[FieldToFilterState][K]) => void,
  ) => () => void

  /**
   * Subscribes to debounced filter state changes of the given `field`
   * and stores the value in React state. Automatically unsubscribes when the
   * component is unmounted.
   *
   * @returns The reactive state of the filter
   */
  useFilterState: <K extends this[FilterableField]>(
    apiRef: React.MutableRefObject<GridApi>,
    field: K,
  ) => this[FieldToFilterState][K] | undefined

  /**
   * Clears the state of a specific column filter
   */
  clearFilterState: <K extends this[FilterableField]>(
    apiRef: React.MutableRefObject<GridApi>,
    field: K,
  ) => void

  /**
   * Clears the state of all column filters
   */
  clearAllFilterState: (apiRef: React.MutableRefObject<GridApi>) => void

  // Phantom types

  [Field]: {
    [i in keyof Cols]: Cols[i] extends MakeTypedColDef<
      any,
      infer F,
      any,
      infer _,
      any,
      any
    >
      ? F
      : never
  }[number]

  [FieldToColumn]: {
    [K in this[Field]]: {
      [i in keyof Cols]: K extends Cols[i]['field'] ? Cols[i] : never
    }[number]
  }

  [FieldToRow]: {
    [K in this[Field]]: this[FieldToColumn][K] extends MakeTypedColDef<
      infer R,
      any,
      any,
      infer _,
      any,
      any
    >
      ? R
      : never
  }

  [FieldToFormatted]: {
    [K in this[Field]]: this[FieldToColumn][K] extends MakeTypedColDef<
      any,
      any,
      any,
      infer _,
      infer F,
      any
    >
      ? F
      : never
  }

  [FieldToValue]: {
    [K in this[Field]]: this[FieldToColumn][K] extends MakeTypedColDef<
      any,
      any,
      infer V,
      infer VG,
      any,
      any
    >
      ? VG extends never
        ? V
        : VG
      : never
  }

  [FieldToFilterType]: {
    [K in this[Field]]: this[FieldToColumn][K] extends MakeTypedColDef<
      any,
      any,
      any,
      infer _,
      any,
      infer Filter
    >
      ? [keyof GridColFilterTypeMap<any, any, any>] extends [Filter]
        ? never
        : Filter
      : never
  }

  [FieldToFilterState]: {
    [K in this[Field]]: this[FieldToFilterType][K] extends keyof GridColFilterTypeMap<
      this[FieldToRow][K],
      this[FieldToValue][K],
      this[FieldToFormatted][K]
    >
      ? GridColFilterTypeMap<
          this[FieldToRow][K],
          this[FieldToValue][K],
          this[FieldToFormatted][K]
        >[this[FieldToFilterType][K]]['state']
      : never
  }

  [FilterableField]: {
    [K in this[Field]]: [this[FieldToFilterType][K]] extends [never] ? never : K
  }[this[Field]]
}

export function createTable<
  R extends GridValidRowModel,
>(): CreateTableOverloads<R> {
  return (...columns: ErasedMakeTypedColDefs): TableDef<any> => {
    const columnMap: Record<string, ErasedMakeTypedColDef> = {}
    for (const def of columns) {
      columnMap[def.field] = def
    }

    function subscribeToFilter(
      apiRef: React.MutableRefObject<GridApi>,
      field: string,
      f: (state: GridColFilterState<any, any, any>) => void,
    ) {
      const filterSubscriptions = (apiRef.current.state.filterSubscriptions ||=
        new Map())
      if (!filterSubscriptions.has(field)) {
        filterSubscriptions.set(field, new Set())
      }
      filterSubscriptions.get(field)!.add(f)
      return () => {
        filterSubscriptions.get(field)!.delete(f)
      }
    }

    function useFilterState(
      apiRef: React.MutableRefObject<GridApi>,
      field: string,
    ): GridColFilterState<any, any, any> | undefined {
      const [filterState, setFilterState] =
        React.useState<GridColFilterState<any, any, any>>()
      React.useEffect(() => {
        return subscribeToFilter(apiRef, field, state => {
          setFilterState(state)
        })
      }, [apiRef, field])
      return filterState
    }

    return {
      columns,
      subscribeToFilter,
      useFilterState,
      clearFilterState,
      clearAllFilterState,
    } as TableDef<any>
  }
}

type ErasedMakeTypedColDef = MakeTypedColDef<
  any,
  string,
  any,
  any,
  any,
  keyof GridColFilterTypeMap<any, any, any>
>
type ErasedMakeTypedColDefs = Array<ErasedMakeTypedColDef>
