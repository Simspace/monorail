import { PaginationItem as MuiPaginationItem } from '@mui/material'

declare module '@mui/material/PaginationItem' {
  interface PaginationItemPropsColorOverrides {
    standard: false
  }
}

export const PaginationItem: typeof MuiPaginationItem = MuiPaginationItem

export * from '@mui/material/PaginationItem'
