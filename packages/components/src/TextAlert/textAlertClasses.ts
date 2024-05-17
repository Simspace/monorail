import generateUtilityClass from '@mui/utils/generateUtilityClass'
import generateUtilityClasses from '@mui/utils/generateUtilityClasses'

export interface TextAlertClasses {
  /** Styles applied to the root element. */
  root: string
}

export type TextAlertClassKey = keyof TextAlertClasses

export function getTextAlertUtilityClasses(slot: string): string {
  return generateUtilityClass('MonorailTextAlert', slot)
}

export const textAlertClasses: TextAlertClasses = generateUtilityClasses(
  'MonorailTextAlert',
  ['root'],
)
