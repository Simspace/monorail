import type { DataGridViewStyle } from '@monorail/components/DataGrid'

declare module '@mui/x-data-grid-premium/models/gridApiPremium' {
  interface GridApiPremium {
    setViewStyle: (viewStyle: DataGridViewStyle, external?: boolean) => void
  }
}
