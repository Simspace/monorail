import type { GridClasses } from '@mui/x-data-grid-premium'
import { gridClasses } from '@mui/x-data-grid-premium'

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
