import { generateUtilityClass, generateUtilityClasses } from '@monorail/utils'

export interface WidgetClasses {
  root: string
}

export type WidgetClassKey = keyof WidgetClasses

export function getWidgetUtilityClass(slot: string): string {
  return generateUtilityClass('MonorailWidget', slot)
}

export const widgetClasses: WidgetClasses = generateUtilityClasses(
  'MonorailWidget',
  ['root'],
)
