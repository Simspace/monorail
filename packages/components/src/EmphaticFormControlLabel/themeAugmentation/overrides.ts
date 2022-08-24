import { EmphaticFormControlLabelClassKey } from '../emphaticFormControlLabelClasses'

declare module '@mui/material/styles/overrides' {
  interface ComponentNameToClassKey {
    MonorailEmphaticFormControlLabel: EmphaticFormControlLabelClassKey
  }
}
