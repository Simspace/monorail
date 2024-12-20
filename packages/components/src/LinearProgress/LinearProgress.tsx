import React from 'react'
import type { LinearProgressClasses, LinearProgressProps } from '@mui/material'
import {
  generateUtilityClasses,
  LinearProgress as MuiLinearProgress,
  linearProgressClasses as muiLinearProgressClasses,
} from '@mui/material'
import clsx from 'clsx'

import { Box, Typography } from '@monorail/components'

declare module '@mui/material/LinearProgress' {
  interface LinearProgressPropsColorOverrides {
    inherit: false
    default: true
    secondary: false
  }
  interface LinearProgressProps {
    size?: 'small' | 'medium'
    /**
     * If `true`, the value will be displayed as a percentage. This prop is only enabled for `variant="indeterminate"`.
     * @default false
     */
    showPercentage?: boolean
  }
}

declare module '@mui/material/LinearProgress/linearProgressClasses' {
  interface LinearProgressClasses {
    showPercentage: string
  }
}

export const linearProgressClasses: LinearProgressClasses = {
  ...muiLinearProgressClasses,
  ...generateUtilityClasses('MuiLinearProgress', ['showPercentage']),
}

/**
 * ## ARIA
 *
 * If the progress bar is describing the loading progress of a particular region of a page,
 * you should use `aria-describedby` to point to the progress bar, and set the `aria-busy`
 * attribute to `true` on that region until it has finished loading.
 *
 * Demos:
 *
 * - [Linear Progress](https://simspace.gitlab.io/engineering/ux-engineering/monorail/main/storybook/?path=/docs/feedback-linearprogress--default)
 * - [Progress (MUI)](https://mui.com/material-ui/react-progress/)
 *
 * API:
 *
 * - [LinearProgress API](https://mui.com/material-ui/api/linear-progress/)
 */

export const LinearProgress = React.forwardRef((inProps, ref) => {
  const {
    value,
    className,
    variant,
    showPercentage = false,
    ...props
  } = inProps

  const showPercentageClassName =
    showPercentage === true ? linearProgressClasses.showPercentage : ''

  let linearProgressComponent: JSX.Element

  if (
    showPercentage === true &&
    value !== undefined &&
    variant === 'indeterminate'
  ) {
    linearProgressComponent = (
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <MuiLinearProgress
          ref={ref}
          className={clsx(className, showPercentageClassName)}
          {...props}
          value={value}
          variant={variant}
        />
        <Typography variant="inputLabel" color="text.secondary">{`${Math.round(
          value,
        )}%`}</Typography>
      </Box>
    )
  } else {
    linearProgressComponent = (
      <MuiLinearProgress ref={ref} {...props} value={value} variant={variant} />
    )
  }

  return linearProgressComponent
}) as (props: LinearProgressProps) => JSX.Element

// @ts-expect-error -- assigning muiName
LinearProgress.muiName = MuiLinearProgress.muiName

export * from '@mui/material/LinearProgress'
