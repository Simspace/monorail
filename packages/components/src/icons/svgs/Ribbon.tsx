import React from 'react'
import type { SvgIconProps } from '@mui/material/SvgIcon'
import SvgIcon from '@mui/material/SvgIcon'

export const Ribbon = (props: SvgIconProps) => (
  <SvgIcon width={10} height={13} viewBox="0 0 10 13" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M1.389 1.857v6.81L6.11 7.119l1.667.62V13l-3.89-1.857L0 13V3.095c0-.68.5-1.238 1.111-1.238h.278z"
    />
    <path d="M8.889 0H3.333c-.61 0-1.11.371-1.11.825V7.43L6.11 6.19 10 7.43V.825C10 .371 9.5 0 8.889 0z" />
  </SvgIcon>
)
