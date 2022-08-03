import generateUtilityClass from '@mui/utils/generateUtilityClass'
import generateUtilityClasses from '@mui/utils/generateUtilityClasses'

export interface EmphaticFormControlLabelClasses {
  /** Styles applied to the root element. */
  root: string
  /** State class applied to the root element if `disabled={true}`. */
  disabled: string
  /** Styles applied to the label's Typography component. */
  label: string
  /** Styles applied to the label's control component. */
  control: string
  /** State class applied to the root element if `state="error"`. */
  error: string
  /** State class applied to the root element if `state="success"`. */
  success: string
  /** State class applied to the root element if `checked={true}`. */
  checked: string
}

export type EmphaticFormControlLabelClassKey =
  keyof EmphaticFormControlLabelClasses

export function getEmphaticFormControlLabelUtilityClasses(
  slot: string,
): string {
  return generateUtilityClass('MonorailEmphaticFormControlLabel', slot)
}

export const emphaticFormControlLabelClasses: EmphaticFormControlLabelClasses =
  generateUtilityClasses('MonorailEmphaticFormControlLabel', [
    'root',
    'disabled',
    'label',
    'checked',
    'error',
    'success',
    'control',
  ])
