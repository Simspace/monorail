import { generateUtilityClass, generateUtilityClasses } from '@monorail/utils'

export interface PasswordTextFieldClasses {
  /**	Styles applied to the root element. */
  root: string
  /** Styles applied to the toggle visibility button */
  toggleVisibilityButton: string
  /** Styles applied to the visibility icon */
  visibilityIcon: string
  /** Styles applied to the visibility off icon */
  visibilityOffIcon: string
}

export type PasswordTextFieldClassKey = keyof PasswordTextFieldClasses

export function getPasswordTextFieldUtilityClass(slot: string): string {
  return generateUtilityClass('MonorailPasswordTextField', slot)
}

export const passwordTextFieldClasses: PasswordTextFieldClasses =
  generateUtilityClasses('MonorailPasswordTextField', [
    'root',
    'toggleVisibilityButton',
    'visibilityIcon',
    'visibilityOffIcon',
  ])
