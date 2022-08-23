import { generateUtilityClass, generateUtilityClasses } from '@mui/base'

export interface SelectionFooterClasses {
  root: string
}

export type SelectionFooterClassKey = keyof SelectionFooterClasses

export function getSelectionFooterUtilityClass(slot: string): string {
  return generateUtilityClass('MonorailSelectionFooter', slot)
}

export const selectionFooterClasses: SelectionFooterClasses =
  generateUtilityClasses('MonorailSelectionFooter', ['root'])
