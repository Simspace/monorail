import React from 'react'
import type { SvgIconProps } from '@mui/material/SvgIcon'
import SvgIcon from '@mui/material/SvgIcon'

export const Copy = (props: SvgIconProps) => (
  <SvgIcon {...props}>
    <path
      clipRule="evenodd"
      d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zM8 21h11V7H8v14z"
      fillRule="evenodd"
    />
  </SvgIcon>
)
