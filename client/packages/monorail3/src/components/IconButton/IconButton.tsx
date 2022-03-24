import React from 'react'
import * as MUI from '@mui/material'

export interface IconButtonProps extends MUI.IconButtonProps {
  variant?: 'contained' | 'outlined' | 'chromeless'
  shape?: 'circular' | 'rounded'
}

export const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
  (props, ref) => (
    <MUI.IconButton
      ref={ref}
      variant="chromeless"
      shape="circular"
      {...props}
    />
  ),
)
