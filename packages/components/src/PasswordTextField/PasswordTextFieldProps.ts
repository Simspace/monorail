import type React from 'react'
import type { SvgIconProps } from '@mui/material'

import type { IconButtonProps } from '../IconButton.js'
import type { TextFieldProps } from '../TextField.js'

export interface PasswordTextFieldProps
  extends Omit<TextFieldProps, 'slotProps'> {
  /**
   * Props applied to the isVisible state
   */
  isVisible?: boolean
  /**
   * Props applied to the initial isVisible state.
   */
  defaultIsVisible?: boolean
  /**
   * Callback fired when the state is changed.
   *
   * @param {React.SyntheticEvent} event The event source of the callback.
   */
  onVisibilityChange?: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    isVisible: boolean,
  ) => void
  slotProps?: {
    /**
     * Props applied to the visibility Icon.
     */
    visibilityIcon?: Partial<SvgIconProps>
    /**
     * Props applied to the visibility off Icon.
     */
    visibilityOffIcon?: Partial<SvgIconProps>
    /**
     * Props applied to the IconButton.
     */
    iconButton?: Partial<IconButtonProps>
  }
}
