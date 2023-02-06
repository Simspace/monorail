import { generateUtilityClass, generateUtilityClasses } from '@monorail/utils'

export interface DialogHeaderClasses {
  root: string
  title: string
  iconContainer: string
}

export type DialogHeaderClassKey = keyof DialogHeaderClasses

export function getDialogHeaderUtilityClass(slot: string): string {
  return generateUtilityClass('MonorailDialogHeader', slot)
}

export const dialogHeaderClasses: DialogHeaderClasses = generateUtilityClasses(
  'MonorailDialogHeader',
  ['root', 'title', 'iconContainer'],
)
