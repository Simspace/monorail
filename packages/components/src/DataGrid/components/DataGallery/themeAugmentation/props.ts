import type { DataGridPremiumProps } from '@mui/x-data-grid-premium'

declare module '@mui/material/styles/props' {
  interface ComponentsPropsList {
    MonorailDataGallery: DataGridPremiumProps
  }
}

export {}
