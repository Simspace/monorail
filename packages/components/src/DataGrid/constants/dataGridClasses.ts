import { generateUtilityClasses } from '@mui/base'
import type { GridClasses } from '@mui/x-data-grid-premium'
import { gridClasses } from '@mui/x-data-grid-premium'

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
