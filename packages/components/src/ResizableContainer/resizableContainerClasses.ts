import { generateUtilityClass, generateUtilityClasses } from '@mui/material'

export interface ResizableContainerClasses {
  root: string
}

export type ResizableContainerClassKey = keyof ResizableContainerClasses

export function getResizableContainerUtilityClass(slot: string): string {
  return generateUtilityClass('MonorailResizableContainer', slot)
}

export const resizableContainerClasses: ResizableContainerClasses =
  generateUtilityClasses('MonorailResizableContainer', ['root'])
