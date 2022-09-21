import type { SplitButtonClassKey } from '../splitButtonClasses.js'

declare module '@mui/material/styles/overrides' {
  interface ComponentNameToClassKey {
    MonorailSplitButton: SplitButtonClassKey
  }
}
