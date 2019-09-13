import { ControllerStateAndHelpers } from 'downshift'
import { lookup } from 'fp-ts/lib/Array'
import { fromNullable, Option } from 'fp-ts/lib/Option'

import { hasKey } from '@monorail/sharedHelpers/typeGuards'

export type DropdownItemValue = string | number | object | undefined

export type DropdownItemType = {
  value: DropdownItemValue
  label: string
  disabled?: boolean
}

// DropdownItemType Typeguard
export const isDropdownItem = (item: unknown) =>
  hasKey(item, 'value') && hasKey(item, 'label')

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

export const getHighlightedItem = <D extends unknown = DropdownItemType>(
  items: Array<D>,
  { highlightedIndex }: ControllerStateAndHelpers<D>,
): Option<D> =>
  fromNullable(highlightedIndex)
    .filter(index => index >= 0)
    .chain(index => lookup(index, items))

export const nextHighlightedIndex = (
  key: string,
  initial: number,
  max: number,
) => {
  const index = getKeyboardMoveIndex(key, initial, max)

  return index < 0 ? 0 : index >= max ? max : index
}

export const parseAsDropdownItem = (item: unknown): DropdownItemType =>
  item && isDropdownItem(item)
    ? (item as DropdownItemType)
    : {
        value: String(item),
        label: String(item),
        disabled: false,
      }
