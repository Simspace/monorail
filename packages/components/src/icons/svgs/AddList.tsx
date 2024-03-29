import React from 'react'
import type { SvgIconProps } from '@mui/material/SvgIcon'
import SvgIcon from '@mui/material/SvgIcon'

export const AddList = (props: SvgIconProps) => (
  <SvgIcon {...props}>
    <path
      fillRule="evenodd"
      d="M12 17.748A8 8 0 1117.748 12H15v3h-3v2.748zM5.917 6.75h5.5v.917h-5.5V6.75zm0 1.833h5.5V9.5h-5.5v-.917zm0 2.75h3.666v-.916H5.917v.916zm9.625-1.375l-.688-.687-2.516 2.52-1.38-1.374-.687.687 2.067 2.063 3.204-3.209z"
      clipRule="evenodd"
    ></path>
    <path d="M19 19h3v-2h-3v-3h-2v3h-3v2h3v3h2v-3z"></path>
  </SvgIcon>
)
