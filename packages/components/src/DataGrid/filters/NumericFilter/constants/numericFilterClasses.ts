import { generateUtilityClass, generateUtilityClasses } from '@mui/material'

export interface NumericFilterClasses {
  root: string
}

export type NumericFilterClassKey = keyof NumericFilterClasses

export function getNumericFilterUtilityClass(slot: string) {
  return generateUtilityClass('MonorailNumericFilter', slot)
}

export const numericFilterClasses: NumericFilterClasses =
  generateUtilityClasses('MonorailNumericFilter', ['root'])
