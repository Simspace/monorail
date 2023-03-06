import { Pagination as MuiPagination } from '@mui/material'

declare module '@mui/material/Pagination' {
  interface PaginationPropsColorOverrides {
    standard: false
  }
}

/**
 *
 * Demos:
 *
 * - [Pagination](https://simspace.gitlab.io/engineering/ux-engineering/monorail/main/storybook/?path=/docs/navigation-pagination--default)
 * - [Pagination (MUI)](https://mui.com/material-ui/react-pagination/)
 *
 * API:
 *
 * - [Pagination API](https://mui.com/material-ui/api/pagination/)
 */
export const Pagination: typeof MuiPagination = MuiPagination

export * from '@mui/material/Pagination'
