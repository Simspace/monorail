import { generateUtilityClass, generateUtilityClasses } from '@mui/material'

export interface EnumFilterClasses {
  root: string
}

export type EnumFilterClassKey = keyof EnumFilterClasses

export function getEnumFilterUtilityClass(slot: string): string {
  return generateUtilityClass('MonorailEnumFilter', slot)
}

export const enumFilterClasses: EnumFilterClasses = generateUtilityClasses(
  'MonorailEnumFilter',
  ['root'],
)
