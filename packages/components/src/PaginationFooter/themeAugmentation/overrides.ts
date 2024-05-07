import type { PaginationFooterClassKey } from '../PaginationFooterClasses.js'

declare module '@mui/material/styles/overrides' {
  interface ComponentNameToClassKey {
    MonorailPaginationFooter: PaginationFooterClassKey
  }
}
