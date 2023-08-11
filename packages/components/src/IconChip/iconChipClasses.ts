import { generateUtilityClass, generateUtilityClasses } from '@monorail/utils'

export interface IconChipClasses {
  root: string
}

export type IconChipClassKey = keyof IconChipClasses

export function getIconChipUtilityClass(slot: string): string {
  return generateUtilityClass('MonorailIconChip', slot)
}

export const iconChipClasses: IconChipClasses = generateUtilityClasses(
  'MonorailIconChip',
  ['root'],
)
