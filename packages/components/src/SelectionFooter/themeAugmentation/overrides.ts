import { SelectionFooterClassKey } from '../selectionFooterClasses.js'

declare module '@mui/material/styles/overrides' {
  interface ComponentNameToClassKey {
    MonorailSelectionFooter: SelectionFooterClassKey
  }
}
