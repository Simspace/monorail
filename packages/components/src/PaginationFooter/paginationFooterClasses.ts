import { generateUtilityClass, generateUtilityClasses } from '@mui/material'

export interface PaginationFooterClasses {
  root: string
  pagination: string
  left: string
  right: string
}

export type PaginationFooterClassKey = keyof PaginationFooterClasses

export function getPaginationFooterUtilityClass(slot: string): string {
  return generateUtilityClass('MonorailPaginationFooter', slot)
}

export const PaginationFooterClasses: PaginationFooterClasses =
  generateUtilityClasses('MonorailPaginationFooter', [
    'root',
    'pagination',
    'left',
    'right',
  ])
