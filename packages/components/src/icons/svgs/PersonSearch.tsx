import React from 'react'
import type { SvgIconProps } from '@mui/material/SvgIcon'
import SvgIcon from '@mui/material/SvgIcon'

export const PersonSearch = (props: SvgIconProps) => (
  <SvgIcon {...props}>
    <path d="M15.951 15.32h.814l5.135 5.147L20.367 22l-5.146-5.136v-.813l.73-.73z"></path>
    <path
      fillRule="evenodd"
      d="M11.75 8.25a1.75 1.75 0 11-3.499.001 1.75 1.75 0 013.499-.001zM6.5 12.625c0-1.164 2.332-1.75 3.5-1.75 1.168 0 3.5.586 3.5 1.75v.875h-7v-.875z"
      clipRule="evenodd"
    ></path>
    <path
      fillRule="evenodd"
      d="M10 16a6 6 0 100-12 6 6 0 000 12zm0 2a8 8 0 100-16 8 8 0 000 16z"
      clipRule="evenodd"
    ></path>
  </SvgIcon>
)
