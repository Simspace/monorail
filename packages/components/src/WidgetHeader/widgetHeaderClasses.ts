import { generateUtilityClass, generateUtilityClasses } from '@monorail/utils'

export interface WidgetHeaderClasses {
  root: string
  titleContainer: string
  title: string
  subtitle: string
  actions: string
}

export type WidgetHeaderClassKey = keyof WidgetHeaderClasses

export function getWidgetHeaderUtilityClass(slot: string): string {
  return generateUtilityClass('MonorailWidgetHeader', slot)
}

export const widgetHeaderClasses: WidgetHeaderClasses = generateUtilityClasses(
  'MonorailWidgetHeader',
  ['root', 'titleContainer', 'title', 'subtitle', 'actions'],
)
