import { generateUtilityClass, generateUtilityClasses } from '@monorail/utils'

export interface WidgetContentClasses {
  root: string
}

export type WidgetContentClassKey = keyof WidgetContentClasses

export function getWidgetContentUtilityClass(slot: string): string {
  return generateUtilityClass('MonorailWidgetContent', slot)
}

export const widgetContentClasses: WidgetContentClasses =
  generateUtilityClasses('MonorailWidgetContent', ['root'])
