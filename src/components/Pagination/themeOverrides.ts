import { Components, Theme } from '@mui/material'

declare module '@mui/material/Pagination' {
  interface PaginationPropsColorOverrides {
    standard: false
    secondary: false
  }
}

export const MonorailPaginationOverrides: Components<Theme>['MuiPagination'] = {
  defaultProps: {
    color: 'primary',
    shape: 'rounded',
    size: 'large',
  },
}
