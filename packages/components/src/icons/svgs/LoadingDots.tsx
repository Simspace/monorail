import React from 'react'
import type { SvgIconProps } from '@mui/material/SvgIcon'
import SvgIcon from '@mui/material/SvgIcon'
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles({
  loadingFadeInline: {
    animation: '$loadingFadeInline 1.1s infinite',
  },
  loadingDotOne: {
    animationDelay: '0.1s',
  },
  loadingDotTwo: {
    animationDelay: '0.3s',
  },
  loadingDotThree: {
    animationDelay: '0.5s',
  },
  '@keyframes loadingFadeInline': {
    '0%': {
      opacity: 0.2,
    },
    '50%': {
      opacity: 1,
    },
    '100%': {
      opacity: 0.2,
    },
  },
})

export const LoadingDots = (props: SvgIconProps) => {
  const classes = useStyles()
  return (
    <SvgIcon {...props}>
      <circle
        className={`${classes.loadingFadeInline} ${classes.loadingDotOne}`}
        cx="6"
        cy="12"
        r="2"
      />
      <circle
        className={`${classes.loadingFadeInline} ${classes.loadingDotTwo}`}
        cx="12"
        cy="12"
        r="2"
      />
      <circle
        className={`${classes.loadingFadeInline} ${classes.loadingDotThree}`}
        cx="18"
        cy="12"
        r="2"
      />
    </SvgIcon>
  )
}
