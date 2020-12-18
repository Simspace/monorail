import { includesNoncase } from '@monorail/sharedHelpers/strings'
import { isNumber, isString } from '@monorail/sharedHelpers/typeGuards'
import { Undefinedable } from '@monorail/sharedHelpers/typeLevel'

import {
  DropdownItemType,
  DropdownItemValue,
  DropdownType,
  isDropdownItem,
} from './helpers'

type DropdownParserProps<T> = {
  value: (item: T) => Undefinedable<DropdownItemValue>
  label: (item: T) => string
}

export type DropdownParser<T> = DropdownParserProps<T> & {
  isActive: (item: T) => boolean
  includes: (target: string) => (source: T) => boolean
  compare: (
    target: T | DropdownItemValue,
  ) => (source: T | DropdownItemValue) => boolean
}

export type DropdownParserHook<T> = (
  props?: Partial<DropdownParserProps<T>>,
) => DropdownParser<T>

export function createDropdownTypeParser<T extends DropdownType>(
  props?: Partial<DropdownParserProps<T>>,
): DropdownParser<T> {
  const {
    value = (item: T) => (isDropdownItem(item) ? item.value : String(item)),
    label = (item: T) =>
      isDropdownItem(item) ? item.label || '' : String(item),
  } = props || {}

  const itemValue = (item: T | DropdownItemValue) =>
    isString(item) || isNumber(item) ? item : value(item)

  const includes = (target: string) => (source: T): boolean =>
    includesNoncase(target)(label(source))

  const compare = (target: T | DropdownItemValue) => (
    source: T | DropdownItemValue,
  ): boolean => itemValue(source) === itemValue(target)

  const isActive = (item: T) => !(item as DropdownItemType).disabled

  return {
    value: itemValue,
    label,
    isActive,
    // Match by String
    includes,
    // Compare item
    compare,
  }
}

export const createCustomParser = <T extends DropdownType>(
  options: Partial<DropdownParserProps<T>> & Partial<DropdownParser<T>>,
) => {
  const { value, label, ...override } = options
  const parser = createDropdownTypeParser<T>({ value, label })

  return () => ({
    ...parser,
    ...override,
  })
}
