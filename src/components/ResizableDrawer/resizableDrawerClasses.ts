import { generateUtilityClass, generateUtilityClasses } from '@mui/material'

export interface ResizableDrawerClasses {
  root: string
  dragArea: string
  dragAreaDragging: string
  handle: string
  handleDragging: string
}

export type ResizableDrawerClassKey = keyof ResizableDrawerClasses

export function getResizableDrawerUtilityClass(slot: string): string {
  return generateUtilityClass('MonorailResizableDrawer', slot)
}

export const resizableDrawerClasses: ResizableDrawerClasses =
  generateUtilityClasses('MonorailDrawer', [
    'root',
    'dragArea',
    'dragAreaDragging',
    'handle',
    'handleDragging',
  ])
