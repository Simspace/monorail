import { generateUtilityClass, generateUtilityClasses } from '@mui/base'

export interface SplitButtonClasses {
  /** Styles applied to the root element */
  root: string
  /** Styles applied to the popper element */
  popper: string
  /** Styles applied to the paper element */
  paper: string
  /** Styles applied to the menu list element */
  menuList: string
  /** Styles applied to the primary button */
  primaryButton: string
  /** Styles applied to the secondary (dropdown) button */
  secondaryButton: string
}

export type SplitButtonClassKey = keyof SplitButtonClasses

export function getSplitButtonUtilityClass(slot: string): string {
  return generateUtilityClass('MonorailSplitButton', slot)
}

export const splitButtonClasses: SplitButtonClasses = generateUtilityClasses(
  'MonorailSplitButton',
  ['root', 'popper', 'paper', 'menuList', 'primaryButton', 'secondaryButton'],
)
