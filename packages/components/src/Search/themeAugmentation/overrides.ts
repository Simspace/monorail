import type { SearchClassKey } from '../searchClasses.js'

declare module '@mui/material/styles/overrides' {
  interface ComponentNameToClassKey {
    MonorailSearch: SearchClassKey
  }
}
