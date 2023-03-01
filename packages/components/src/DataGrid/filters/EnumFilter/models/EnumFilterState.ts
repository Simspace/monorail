import { isPlainObject } from '@mui/utils'

export const EnumFilterStateTypeId = Symbol.for(
  '@simspace/monorail3/EnumFilterState',
)
export type EnumFilterStateTypeId = typeof EnumFilterStateTypeId

export interface EnumFilterState<V = unknown> {
  [EnumFilterStateTypeId]: EnumFilterStateTypeId
  uiSelected: Set<V>
  selected: Set<V>
  searchText: string
  width: number
  compare: ((rowValue: unknown, filterValue: unknown) => boolean) | undefined
}

export function isEnumFilterState(value: unknown): value is EnumFilterState {
  return isPlainObject(value) && EnumFilterStateTypeId in value
}

interface GetEnumFilterInitialStateParams {
  compare?: (rowValue: unknown, filterValue: unknown) => boolean
}

export function getEnumFilterInitialState({
  compare,
}: GetEnumFilterInitialStateParams): EnumFilterState {
  return {
    [EnumFilterStateTypeId]: EnumFilterStateTypeId,
    uiSelected: new Set(),
    selected: new Set(),
    searchText: '',
    compare,
    width: 0,
  }
}
