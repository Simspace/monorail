import { generateUtilityClass, generateUtilityClasses } from '@mui/base'

export interface ScrollShadowClasses {
  root: string
  scrollContainer: string
  topShadow: string
  bottomShadow: string
}

export function getScrollShadowUtilityClass(slot: string): string {
  return generateUtilityClass('MonorailScrollShadow', slot)
}

export const scrollShadowClasses: ScrollShadowClasses = generateUtilityClasses(
  'MonorailScrollShadow',
  ['root', 'scrollContainer', 'topShadow', 'bottomShadow'],
)
