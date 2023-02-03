import { generateUtilityClass, generateUtilityClasses } from '@mui/material'

export interface DateFilterClasses {
  root: string
}

export type DateFilterClassKey = keyof DateFilterClasses

export function getDateFilterUtilityClass(slot: string) {
  return generateUtilityClass('MonorailDateFilter', slot)
}

export const dateFilterClasses: DateFilterClasses = generateUtilityClasses(
  'MonorailDateFilter',
  ['root'],
)
