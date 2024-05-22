import React from 'react'
import type { AlertClasses, AlertProps } from '@mui/material'
import {
  Alert as MuiAlert,
  alertClasses as muiAlertClasses,
  generateUtilityClasses,
  styled,
} from '@mui/material'
import clsx from 'clsx'

import { excludeProps } from '@monorail/utils'

declare module '@mui/material/Alert' {
  interface AlertPropsVariantOverrides {
    text: true
  }
  interface AlertProps {
    /**
     * If true, the left and right padding is removed. This prop only works with the `text` variant.
     * @default false
     */
    disableGutters?: boolean
  }
}

declare module '@mui/material/Alert/alertClasses' {
  interface AlertClasses {
    disableGutters: string
    text: string
  }
}

export const alertClasses: AlertClasses = {
  ...muiAlertClasses,
  ...generateUtilityClasses('MuiAlert', ['text', 'disableGutters']),
}

const StyledMuiAlert = styled(MuiAlert, {
  shouldForwardProp: excludeProps('disableGutters'),
})``

/**
 *
 * Demos:
 *
 * - [Alert](https://simspace.gitlab.io/engineering/ux-engineering/monorail/main/storybook/?path=/docs/feedback-alert--default)
 * - [Alert (MUI)](https://mui.com/material-ui/react-alert/)
 *
 * API:
 *
 * - [Alert API](https://mui.com/material-ui/api/alert/)
 * - inherits [Paper API](https://mui.com/material-ui/api/paper/)
 */
export const Alert = React.forwardRef((inProps, ref) => {
  const {
    disableGutters = false,
    variant = 'outlined',
    className,
    ...props
  } = inProps

  const textVariantClassName =
    variant === 'text' ? alertClasses.text : alertClasses[variant]
  const disableGuttersClassName =
    variant === 'text' && disableGutters === true
      ? alertClasses.disableGutters
      : ''

  return (
    <StyledMuiAlert
      className={clsx(className, disableGuttersClassName, textVariantClassName)}
      ref={ref}
      disableGutters={disableGutters}
      variant={variant}
      {...props}
    />
  )
}) as (props: AlertProps) => JSX.Element

export * from '@mui/material/Alert'
