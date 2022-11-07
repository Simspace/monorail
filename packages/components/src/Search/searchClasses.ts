import { generateUtilityClass, generateUtilityClasses } from '@monorail/utils'

export interface SearchClasses {
  /**	Styles applied to the root element. */
  root: string
  /** Styles applied to the clear button */
  clearButton: string
}

export type SearchClassKey = keyof SearchClasses

export function getSearchUtilityClass(slot: string): string {
  return generateUtilityClass('MonorailSearch', slot)
}

export const searchClasses: SearchClasses = generateUtilityClasses(
  'MonorailSearch',
  ['root', 'clearButton'],
)
