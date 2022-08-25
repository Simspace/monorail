import { isPlainObject } from '@mui/utils'

import type { TextFilterOperator } from './TextFilterOperator.js'

export const TextFilterStateTypeId = Symbol.for(
  '@simspace/monorail3/TextFilterState',
)
export type TextFilterStateTypeId = typeof TextFilterStateTypeId

export interface TextFilterState {
  readonly [TextFilterStateTypeId]: TextFilterStateTypeId
  operator: TextFilterOperator
  searchText: string
}

export function isTextFilterState(value: unknown): value is TextFilterState {
  return isPlainObject(value) && TextFilterStateTypeId in value
}

export function getTextFilterInitialState(
  initialOperator: TextFilterOperator,
): TextFilterState {
  return {
    [TextFilterStateTypeId]: TextFilterStateTypeId,
    operator: initialOperator,
    searchText: '',
  }
}
