import { generateUtilityClass, generateUtilityClasses } from '@monorail/utils'

export interface SplitButtonClasses {
  /** Styles applied to the root element */
  root: string
  /** Styles applied to the menu list element */
  menu: string
  /** Styles applied to the primary button */
  primaryButton: string
  primaryButtonSmall: string
  primaryButtonLarge: string
  /** Styles applied to the secondary (dropdown) button */
  secondaryButton: string
  secondaryButtonSmall: string
  secondaryButtonLarge: string
}

export type SplitButtonClassKey = keyof SplitButtonClasses

export function getSplitButtonUtilityClass(slot: string): string {
  return generateUtilityClass('MonorailSplitButton', slot)
}

export const splitButtonClasses: SplitButtonClasses = generateUtilityClasses(
  'MonorailSplitButton',
  [
    'root',
    'menu',
    'primaryButton',
    'primaryButtonSmall',
    'primaryButtonLarge',
    'secondaryButton',
    'secondaryButtonSmall',
    'secondaryButtonLarge',
  ],
)
