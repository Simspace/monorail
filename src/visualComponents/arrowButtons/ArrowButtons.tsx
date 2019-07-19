import React, { MouseEvent } from 'react'
import styled, { css, SimpleInterpolation } from 'styled-components'

import {
  Colors,
  flexFlow,
  FontSizes,
  getColor,
  typography,
} from '@monorail/helpers/exports'
import { isUndefined } from '@monorail/sharedHelpers/typeGuards'
import { CommonComponentType } from '@monorail/types'
import {
  ButtonDisplay,
  ButtonSize,
} from '@monorail/visualComponents/buttons/buttonTypes'
import { IconButton } from '@monorail/visualComponents/buttons/IconButton'

/*
 * Styles
 */

//  TODO: remove this container and position on the arrow buttons themselves
const ArrowButtonsContainer = styled.div`
  ${flexFlow('row')};
  height: 100%;
  z-index: 5;
  pointer-events: none;
`

const RatioContainer = styled.p`
  ${typography(400, FontSizes.Title5)};

  color: ${getColor(Colors.Black62)};
  margin: auto 4px;
`

/*
 * Types
 */

type Props = CommonComponentType & {
  current: number
  next?: (event: MouseEvent<Element>) => void
  previous?: (event: MouseEvent<Element>) => void
  total: number
  slideIndicatorType?: string
  size?: ButtonSize
  arrowColor?: Colors
  loop?: boolean
  cssArrowOverrides?: SimpleInterpolation
}

/*
 * Components
 */

export const ArrowButtons = (props: Props) => {
  const {
    current,
    next,
    previous,
    total,
    slideIndicatorType,
    cssArrowOverrides,
    arrowColor = Colors.Black,
    size,
    loop = false,
    ...otherProps
  } = props

  return (
    <ArrowButtonsContainer {...otherProps}>
      <IconButton
        icon="chevron_left"
        disabled={isUndefined(previous) || (current === 0 && !loop)}
        onClick={previous}
        display={ButtonDisplay.Chromeless}
        size={size}
        cssOverrides={
          slideIndicatorType === 'dot'
            ? css`
                margin: auto auto auto 16px;
                pointer-events: all;
                ${cssArrowOverrides};
              `
            : css`
                margin: auto auto auto 0;
                pointer-events: all;
                ${cssArrowOverrides};
              `
        }
      />
      {slideIndicatorType !== 'dot' && (
        <RatioContainer>{`${current + 1} / ${total + 1}`}</RatioContainer>
      )}
      <IconButton
        icon="chevron_right"
        disabled={!loop && (isUndefined(next) || current === total)}
        onClick={next}
        display={ButtonDisplay.Chromeless}
        size={size}
        cssOverrides={
          slideIndicatorType === 'dot'
            ? css`
                margin: auto 16px auto auto;
                pointer-events: all;
                ${cssArrowOverrides};
              `
            : css`
                margin: auto 0 auto auto;
                pointer-events: all;
                ${cssArrowOverrides};
              `
        }
      />
    </ArrowButtonsContainer>
  )
}
