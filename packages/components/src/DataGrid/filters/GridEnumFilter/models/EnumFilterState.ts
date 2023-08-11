import { isPlainObject } from '@mui/utils'

export const EnumFilterStateTypeId = Symbol.for(
  '@monorail/components/DataGrid/filters/EnumFilter/models/EnumFilterState',
)
export type EnumFilterStateTypeId = typeof EnumFilterStateTypeId

export interface EnumFilterState<V = unknown> {
  [EnumFilterStateTypeId]: EnumFilterStateTypeId
  selected: Set<V>
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
    selected: new Set(),
    compare,
  }
}
