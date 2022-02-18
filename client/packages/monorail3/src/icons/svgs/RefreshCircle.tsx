import React from 'react'
import { SvgIcon, SvgIconProps } from '@material-ui/core' // eslint-disable-line no-restricted-imports

export const RefreshCircle = (props: SvgIconProps) => (
  <SvgIcon viewBox="0 0 120 120" {...props}>
    <circle cx="60" cy="60" r="60" fill="white" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M0 60C0 26.88 26.88 0 60 0C93.12 0 120 26.88 120 60C120 93.12 93.12 120 60 120C26.88 120 0 93.12 0 60ZM60 28C68.84 28 76.8 31.6 82.6 37.4L92 28V56H64L76.88 43.12C72.56 38.76 66.64 36 60 36C46.76 36 36 46.76 36 60C36 73.24 46.76 84 60 84C70.44 84 79.32 77.32 82.6 68H90.92C87.36 81.8 74.92 92 60 92C42.32 92 28.04 77.68 28.04 60C28.04 42.32 42.32 28 60 28Z"
    />
  </SvgIcon>
)
