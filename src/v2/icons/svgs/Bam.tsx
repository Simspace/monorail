import React, { ComponentType } from 'react'
// eslint-disable-next-line no-restricted-imports
import { SvgIcon, SvgIconProps } from '@material-ui/core'

export const Bam = (props: SvgIconProps) => (
  <SvgIcon {...props}>
    <path
      fillRule="evenodd"
      d="M4 9V7h12v2H4zm0 4h16v-2H4v2zm0 4h12v-2H4v2z"
      clipRule="evenodd"
    />
  </SvgIcon>
)
