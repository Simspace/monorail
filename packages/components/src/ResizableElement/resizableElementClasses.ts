import { generateUtilityClass, generateUtilityClasses } from '@mui/material'

export interface ResizableElementClasses {
  root: string
}

export type ResizableElementClassKey = keyof ResizableElementClasses

export function getResizableElementUtilityClass(slot: string): string {
  return generateUtilityClass('MonorailResizableElement', slot)
}

export const resizableElementClasses: ResizableElementClasses =
  generateUtilityClasses('MonorailResizableElement', ['root'])
