import { GridValidRowModel } from '../internal.js'

declare module '@mui/x-data-grid-premium/models/dataGridPremiumProps' {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any
  interface DataGridPremiumProps<R extends GridValidRowModel = any> {
    stripedRows?: boolean
  }
}

export {}
