import { generateUtilityClass, generateUtilityClasses } from '@mui/material'

export interface ResizeHandleClasses {
  root: string
  rootDragging: string
  handle: string
  handleDragging: string
}

export type ResizeHandleClassKey = keyof ResizeHandleClasses

export function getResizeHandleUtilityClass(slot: string): string {
  return generateUtilityClass('MonorailResizeHandle', slot)
}

export const resizeHandleClasses: ResizeHandleClasses = generateUtilityClasses(
  'MonorailResizeHandle',
  ['root', 'rootDragging', 'handle', 'handleDragging'],
)
