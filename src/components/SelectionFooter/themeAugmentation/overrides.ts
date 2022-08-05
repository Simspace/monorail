import { SelectionFooterClassKey } from '../selectionFooterClasses'

declare module '@mui/material/styles/overrides' {
  interface ComponentNameToClassKey {
    MonorailSelectionFooter: SelectionFooterClassKey
  }
}
