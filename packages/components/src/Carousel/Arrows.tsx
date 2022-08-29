import type { VFC } from 'react'
import React from 'react'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import { styled } from '@mui/material'

import type { IconButtonProps } from '../IconButton.js'
import { IconButton } from '../IconButton.js'

type Props = {
  uniqueIdentifier: string
}

export const Arrows: VFC<
  Props & { IconButtonProps?: Partial<IconButtonProps> }
> = props => {
  return (
    <>
      <PrevButtonContainer>
        <PrevButton
          id={`prev-arrow-${props.uniqueIdentifier}`}
          color="primary"
          shape="circular"
          size="medium"
          variant="outlined"
          aria-label="Previous"
          className="glider-prev"
          {...props.IconButtonProps}
          data-test-id="carousel-prev-button"
        >
          <ChevronLeftIcon />
        </PrevButton>
        <PrevGradient className="shadow-prev" />
      </PrevButtonContainer>

      <NextButtonContainer>
        <NextButton
          id={`next-arrow-${props.uniqueIdentifier}`}
          color="primary"
          shape="circular"
          size="medium"
          variant="outlined"
          aria-label="Next"
          className="glider-next"
          {...props.IconButtonProps}
          data-test-id="carousel-next-button"
        >
          <ChevronRightIcon />
        </NextButton>
        <NextGradient className="shadow-next" />
      </NextButtonContainer>
    </>
  )
}

export const PrevButtonContainer = styled('div')(() => ({
  position: 'absolute',
  left: -2,
  width: 'fit-content',
  top: 0,
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
}))

export const NextButtonContainer = styled('div')(() => ({
  position: 'absolute',
  right: -2,
  left: 'auto',
  width: 'fit-content',
  top: 0,
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
}))

export const PrevButton = styled(IconButton)(({ theme }) => ({
  position: 'relative',
  top: '50%',
  transform: 'translate(16%, -50%)',
  pointerEvents: 'auto',
  margin: theme.spacing(0, 2),
}))

export const NextButton = styled(IconButton)(({ theme }) => ({
  position: 'relative',
  top: '50%',
  transform: 'translate(-16%, -50%)',
  pointerEvents: 'auto',
  margin: theme.spacing(0, 2),
}))

const gradientOpacity = {
  none: '00',
  low: '18',
  medium: '61',
}

export const NextGradient = styled('div')(({ theme }) => ({
  position: 'relative',
  transform: 'translate(0%, -32px)',
  height: '100%',
  background: `linear-gradient(
    90deg,
    ${theme.palette.common.white}${gradientOpacity.none} 0%,
    ${theme.palette.common.white}${gradientOpacity.low} 33%,
    ${theme.palette.common.white}${gradientOpacity.medium} 71%,
    ${theme.palette.common.white} 100%
    )`,
  transition: 'opacity 0.2s',
  pointerEvents: 'none',
  flex: 'none',
}))

export const PrevGradient = styled('div')(({ theme }) => ({
  position: 'relative',
  transform: 'translate(0%, -32px)',
  height: '100%',
  background: `linear-gradient(
    90deg,
    ${theme.palette.common.white} 0%,
    ${theme.palette.common.white}${gradientOpacity.medium} 33%,
    ${theme.palette.common.white}${gradientOpacity.low} 71%,
    ${theme.palette.common.white}${gradientOpacity.none} 100%
    )`,
  transition: 'opacity 0.2s',
  pointerEvents: 'none',
  flex: 'none',
}))