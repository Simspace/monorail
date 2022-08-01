import { isPlainObject } from '@mui/utils'

export const EnumFilterStateTypeId = Symbol.for(
  '@simspace/monorail3/EnumFilterState',
)
export type EnumFilterStateTypeId = typeof EnumFilterStateTypeId

export interface EnumFilterState {
  [EnumFilterStateTypeId]: EnumFilterStateTypeId
  uiSelected: Set<unknown>
  selected: Set<unknown>
  searchText: string
  width: number
}

export function isEnumFilterState(value: unknown): value is EnumFilterState {
  return isPlainObject(value) && EnumFilterStateTypeId in value
}

export function getEnumFilterInitialState(): EnumFilterState {
  return {
    [EnumFilterStateTypeId]: EnumFilterStateTypeId,
    uiSelected: new Set(),
    selected: new Set(),
    searchText: '',
    width: 0,
  }
}
