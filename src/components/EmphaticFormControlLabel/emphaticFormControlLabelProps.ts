/* eslint-disable @typescript-eslint/no-explicit-any */
import { SxProps, Theme } from '@mui/material'

import { StandardElementProps } from '../../types'
import { TypographyProps } from '../Typography'
import { ControlProps } from './controlProps'
import { EmphaticFormControlLabelClasses } from './emphaticFormControlLabelClasses'

export interface EmphaticFormControlLabelProps<
  P extends ControlProps = ControlProps,
> extends StandardElementProps<'label', 'onChange'> {
  /**
   * If `true`, the component appears selected.
   */
  checked?: boolean
  /**
   * Override or extend the styles applied to the component.
   */
  classes?: Partial<EmphaticFormControlLabelClasses>
  /**
   * The props used for each slot inside.
   * @default {}
   */
  componentsProps?: {
    /**
     * Props applied to the Typography wrapper of the passed label.
     * This is unused if disableTypography is true.
     * @default {}
     */
    typography?: Partial<TypographyProps>
    /**
     * Props applied to the control of the label.
     * @default {}
     */
    control?: Partial<Omit<P, keyof ControlProps>>
  }
  /**
   * A control element. For instance, it can be a `Radio`, a `Switch` or a `Checkbox`.
   */
  control: React.JSXElementConstructor<P>
  /**
   * If `true`, the control is disabled.
   */
  disabled?: boolean
  /**
   * If `true`, the label is rendered as it is passed without an additional typography node.
   */
  disableTypography?: boolean
  /**
   * A text or an element to be used in an enclosing label element.
   */
  label: React.ReactNode
  name?: string
  /**
   * Callback fired when the state is changed.
   *
   * @param {React.SyntheticEvent} event The event source of the callback.
   * You can pull out the new checked state by accessing `event.target.checked` (boolean).
   */
  onChange?: (event: React.SyntheticEvent, checked: boolean) => void
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx?: SxProps<Theme>
  /**
   * The value of the component.
   */
  value?: unknown
  /**
   * The error or success state of the component. This is always a controlled prop.
   * @default 'default'
   */
  state?: 'default' | 'error' | 'success'
}
