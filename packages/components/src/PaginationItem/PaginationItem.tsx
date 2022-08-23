import { PaginationItem as MuiPaginationItem } from '@mui/material'

declare module '@mui/material/PaginationItem' {
  interface PaginationItemPropsColorOverrides {
    standard: false
  }
}

/**
 *
 * Demos:
 *
 * - [Pagination](https://mui.com/material-ui/react-pagination/)
 *
 * API:
 *
 * - [PaginationItem API](https://mui.com/material-ui/api/pagination-item/)
 */
export const PaginationItem: typeof MuiPaginationItem = MuiPaginationItem

export * from '@mui/material/PaginationItem'
