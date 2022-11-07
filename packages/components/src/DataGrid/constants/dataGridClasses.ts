import type { GridClasses } from '@mui/x-data-grid-premium'
import { gridClasses } from '@mui/x-data-grid-premium'

import { generateUtilityClasses } from '@monorail/utils'

export interface DataGridGroupedClasses {
  grouped: string
}

const groupedClasses = generateUtilityClasses<keyof DataGridGroupedClasses>(
  'MuiDataGrid',
  ['grouped'],
)

export const dataGridClasses: GridClasses & DataGridGroupedClasses = {
  ...gridClasses,
  ...groupedClasses,
}
