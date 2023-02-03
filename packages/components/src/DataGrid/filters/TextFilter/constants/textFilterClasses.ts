import { generateUtilityClass, generateUtilityClasses } from '@mui/material'

export interface TextFilterClasses {
  root: string
}

export type TextFilterClassKey = keyof TextFilterClasses

export function getTextFilterUtilityClass(slot: string) {
  return generateUtilityClass('MonorailTextFilter', slot)
}

export const textFilterClasses: TextFilterClasses = generateUtilityClasses(
  'MonorailTextFilter',
  ['root'],
)
