import React from 'react'
import type { PaletteColor, TypeText } from '@mui/material'
import { type Keyframes, keyframes } from '@mui/styled-engine'

import type { StandardElementProps } from '@monorail/types'
import { styled, useThemeProps } from '@monorail/utils'

const TRANSLATE_AMOUNT = '12%'
const DURATION = 2250
const PAUSE = 250
const BUFFER = (PAUSE / (DURATION + PAUSE)) * 100

export interface LoadingIndicatorProps extends StandardElementProps<'svg'> {
  size?: number
}

const rotateAnimation = keyframes({
  [`0%, ${BUFFER}%`]: { transform: 'rotate(0turn)' },
  '100%': { transform: 'rotate(2turn)' },
})

const dotAnimation = (
  primaryColor: TypeText['primary'],
  secondaryColor: PaletteColor['main'],
): Keyframes =>
  keyframes({
    [`0%, ${BUFFER + 10}%`]: {
      transform: 'scale(1)',
      animationTimingFunction: 'ease-in',
      fill: primaryColor,
    },
    [`${BUFFER + 20}%, 77%`]: {
      transform: 'scale(0.77)',
      fill: secondaryColor,
      animationTimingFunction: 'ease-out',
    },
    '85%': { transform: 'scale(1)', fill: primaryColor },
  })

const topBracketAnimation = keyframes({
  [`0%, ${BUFFER}%`]: { transform: 'translate(0, 0)' },
  [`${BUFFER + 25}%`]: {
    transform: `translate(-${TRANSLATE_AMOUNT}, -${TRANSLATE_AMOUNT})`,
  },
})

const bottomBracketAnimation = keyframes({
  [`0%, ${BUFFER}%`]: { transform: 'translate(0, 0)' },
  [`${BUFFER + 25}%`]: {
    transform: `translate(${TRANSLATE_AMOUNT}, ${TRANSLATE_AMOUNT})`,
  },
})

const LoadingIndicatorRoot = styled('svg')<LoadingIndicatorProps>(
  ({ size }) => ({
    '--duration': `${DURATION}ms`,
    '--pause': `${PAUSE}ms`,
    '--total-duration': 'calc(var(--duration) + var(--pause))',
    '--easing': 'ease-in-out',

    animation: `${rotateAnimation} var(--total-duration) var(--easing) infinite`,
    width: size + 'px',
    height: size + 'px',
    willChange: 'transform',
  }),
)

const Dot = styled('path')(({ theme }) => ({
  animation: `${dotAnimation(
    theme.palette.text.primary,
    theme.palette.primary.main,
  )} var(--total-duration) infinite`,
  transformOrigin: 'center',
  fill: theme.palette.text.primary,
}))

const TopBracket = styled('path')(({ theme }) => ({
  animation: `${topBracketAnimation} var(--total-duration) var(--easing) infinite`,
  fill: theme.palette.text.primary,
}))

const BottomBracket = styled('path')(({ theme }) => ({
  animation: `${bottomBracketAnimation} var(--total-duration) var(--easing) infinite`,
  fill: theme.palette.text.primary,
}))

export const LoadingIndicator = React.forwardRef((inProps, ref) => {
  const { size = 48, ...otherProps } = useThemeProps({
    props: inProps,
    name: 'LoadingIndicator',
  })

  return (
    <LoadingIndicatorRoot
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 48 48"
      ref={ref}
      {...otherProps}
    >
      <Dot d="M24 28.501a4.5 4.5 0 10-4.5-4.5 4.5 4.5 0 004.5 4.5z" />
      <TopBracket d="M14.0003 14.0012L40.0017 14.0009V8.00086L22.0235 8.00086C14.2786 8.00086 8.00001 14.2795 8.00001 22.0244V28.0007H14.0003V14.0012Z" />
      <BottomBracket d="M34.0014 34.0005L8.00001 34.0008V40.0008H25.9783C33.7231 40.0008 40.0017 33.7223 40.0017 25.9774V20.001H34.0014V34.0005Z" />
    </LoadingIndicatorRoot>
  )
}) as (props: LoadingIndicatorProps) => JSX.Element
