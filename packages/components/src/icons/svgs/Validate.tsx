import React from 'react'
import { useTheme } from '@mui/material'
import type { SvgIconProps } from '@mui/material/SvgIcon'
import SvgIcon from '@mui/material/SvgIcon'

export const Validate = (props: SvgIconProps) => {
  const theme = useTheme()
  return (
    <SvgIcon {...props}>
      <path
        d="M15.5 22V2H3.5V22L9.5 16L15.5 22Z"
        fill={theme.palette.primary.shades[700]}
      />
      <path
        d="M20.5 14V2H10.5V14L15.5 10L20.5 14Z"
        fill={theme.palette.primary.shades[400]}
      />
    </SvgIcon>
  )
}
