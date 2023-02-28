import { generateUtilityClass, generateUtilityClasses } from '@monorail/utils'

export interface DataGalleryClasses {
  main: string
  columnHeaders: string
  columnHeader: string
  'columnHeader--sortable': string
}

export type DataGalleryClassKey = keyof DataGalleryClasses

export function getDataGalleryUtilityClass(slot: string): string {
  return generateUtilityClass('MonorailDataGallery', slot)
}

export const dataGalleryClasses: DataGalleryClasses = generateUtilityClasses(
  'MonorailDataGallery',
  ['main', 'columnHeaders', 'columnHeader', 'columnHeader--sortable'],
)
