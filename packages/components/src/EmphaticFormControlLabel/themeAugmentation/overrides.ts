import { EmphaticFormControlLabelClassKey } from '../emphaticFormControlLabelClasses.js'

declare module '@mui/material/styles/overrides' {
  interface ComponentNameToClassKey {
    MonorailEmphaticFormControlLabel: EmphaticFormControlLabelClassKey
  }
}
