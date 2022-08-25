import React from 'react'
import type { SvgIconProps } from '@mui/material/SvgIcon'
import SvgIcon from '@mui/material/SvgIcon'

export const ScaleExpert = (props: SvgIconProps) => (
  <SvgIcon
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect width="16" height="3" fill="#6C35F2" />
    <rect y="4" width="16" height="3" fill="#6C35F2" />
    <rect y="8" width="16" height="3" fill="#6C35F2" />
    <rect y="12" width="16" height="3" fill="#6C35F2" />
  </SvgIcon>
)
