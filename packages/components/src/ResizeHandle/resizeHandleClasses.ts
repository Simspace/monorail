import { generateUtilityClass, generateUtilityClasses } from '@mui/material'

export interface ResizeHandleClasses {
  root: string
  handle: string
  grip: string
  dragging: string
}

export type ResizeHandleClassKey = keyof ResizeHandleClasses

export function getResizeHandleUtilityClass(slot: string): string {
  return generateUtilityClass('MonorailResizeHandle', slot)
}

export const resizeHandleClasses: ResizeHandleClasses = generateUtilityClasses(
  'MonorailResizeHandle',
  ['root', 'handle', 'grip', 'dragging'],
)
