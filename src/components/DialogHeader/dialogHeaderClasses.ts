import { generateUtilityClass, generateUtilityClasses } from '@mui/base'

export interface DialogHeaderClasses {
  root: string
  title: string
  icon: string
}

export type DialogHeaderClassKey = keyof DialogHeaderClasses

export function getDialogHeaderUtilityClass(slot: string): string {
  return generateUtilityClass('MonorailDialogHeader', slot)
}

export const dialogHeaderClasses: DialogHeaderClasses = generateUtilityClasses(
  'MonorailDailogHeader',
  ['root', 'title', 'icon'],
)
