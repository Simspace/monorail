import React from 'react'
import type { ButtonTypeMap, ExtendButtonBase } from '@mui/material'
import { Button as MuiButton } from '@mui/material'
import clsx from 'clsx'

declare module '@mui/material/Button' {
  /**
   * Extend the Button color prop to allow for the other semantic styles.
   *
   * These seem to work out-of-the-box with no custom variant theming
   */
  interface ButtonPropsColorOverrides {
    info: true
    success: true
    warning: true
    error: true
    inherit: false
    secondary: true
  }
}

/**
 *
 * Demos:
 *
 * - [Button](https://simspace.gitlab.io/engineering/ux-engineering/monorail/main/storybook/?path=/docs/inputs-button--default)
 * - [Button group (MUI)](https://mui.com/material-ui/react-button-group/)
 * - [Buttons (MUI)](https://mui.com/material-ui/react-button/)
 *
 * API:
 *
 * - [Button API](https://mui.com/material-ui/api/button/)
 * - inherits [ButtonBase API](https://mui.com/material-ui/api/button-base/)
 */
export const Button = React.forwardRef(
  ({ className, inverted, ...props }, ref) => (
    <MuiButton
      ref={ref}
      className={clsx(
        inverted === true && 'MonorailButton-inverted',
        className,
      )}
      {...props}
    />
  ),
) as ExtendButtonBase<
  ButtonTypeMap<
    {
      inverted?: boolean
    },
    'button'
  >
>

// @ts-expect-error
// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
Button.muiName = MuiButton.muiName

export * from '@mui/material/Button'
