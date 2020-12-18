import { KeyboardEvent } from 'react'
import {
  ControllerStateAndHelpers,
  GetInputPropsOptions,
  PropGetters,
} from 'downshift'

import { hasKey, isObject } from '@monorail/sharedHelpers/typeGuards'
import { TextFieldProps } from '@monorail/visualComponents/inputs/TextField'

export type DropdownItemValue = string | number

export type DropdownItemType = {
  disabled?: boolean
  label: string
  value?: DropdownItemValue
}
export type DropdownType = object | DropdownItemValue

export type DropdownStateType<T> = {
  downshiftProps: ControllerStateAndHelpers<T>
  items: Array<T>
}

/** Partial definitions to Solve Downshift typing */
export type DownshiftGetInputProps = GetInputPropsOptions &
  Partial<TextFieldProps>
export type DownshiftRootPropsGetter<D> = PropGetters<D>['getRootProps']
export type DownshiftItemPropsGetter<D> = PropGetters<D>['getItemProps']
export type DownshiftMenuPropsGetter<D> = PropGetters<D>['getMenuProps']
export type DownshiftKeyboardEvent = KeyboardEvent & {
  preventDownshiftDefault?: boolean
}

// DropdownItemType Typeguard
export const isDropdownItem = (item: unknown): item is DropdownItemType =>
  isObject(item) && hasKey(item, 'value') && hasKey(item, 'label')

const getKeyboardMoveDelta = (key: string) => {
  switch (key) {
    case 'ArrowLeft':
    case 'PageUp':
      return -10
    case 'ArrowRight':
    case 'PageDown':
      return 10
    case 'ArrowUp':
      return -1
    case 'ArrowDown':
      return 1
    default:
      return 0
  }
}
const getKeyboardMoveIndex = (key: string, initial: number, max: number) => {
  switch (key) {
    case 'Home':
      return 0
    case 'End':
      return max
    default:
      return initial + getKeyboardMoveDelta(key)
  }
}

export const nextHighlightedIndex = (
  key: string,
  initial: number,
  max: number,
) => {
  const index = getKeyboardMoveIndex(key, initial, max)

  return index < 0 ? 0 : index >= max ? max : index
}
