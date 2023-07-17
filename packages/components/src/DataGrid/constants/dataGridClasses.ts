import type { GridClasses } from '@mui/x-data-grid-premium'
import { gridClasses } from '@mui/x-data-grid-premium'

import { dataGalleryClasses as galleryClasses } from '@monorail/components/DataGrid/components/DataGallery/constants/dataGalleryClasses'
import { generateUtilityClasses } from '@monorail/utils'

export interface DataGridGroupedClasses {
  grouped: string
  rowDragOverTop: string
  rowDragOverBottom: string
}

const extraClasses = generateUtilityClasses<keyof DataGridGroupedClasses>(
  'MuiDataGrid',
  ['grouped', 'rowDragOverTop', 'rowDragOverBottom'],
)

export const dataGridClasses: GridClasses & DataGridGroupedClasses = {
  ...gridClasses,
  ...extraClasses,
}

export const dataGalleryClasses = galleryClasses
