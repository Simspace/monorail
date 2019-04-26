import React, { MouseEvent } from 'react'
import { IconButton } from '@monorail/buttons/IconButton'
import styled from 'styled-components'
import { ButtonDisplay } from '@monorail/buttons/buttonTypes'
import {
  Colors,
  getColor,
  flexFlow,
  FontSizes,
  typography,
} from '@monorail/helpers/exports'
import { CommonComponentType } from '@monorail/types'

/*
 * Styles
 */

const ArrowButtonsContainer = styled.div`
  ${flexFlow('row')};

  align-items: center; /* Need for IE 11 */
  align-self: flex-end; /* Need for IE 11 */
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
  count?: number
  next?: (event: MouseEvent<Element>) => void
  previous?: (event: MouseEvent<Element>) => void
  total?: number
}

/*
 * Components
 */

export const ArrowButtons = (props: Props) => {
  const { count, next, previous, total, ...otherProps } = props

  return (
    <ArrowButtonsContainer {...otherProps}>
      <IconButton
        icon="chevron_left"
        disabled={previous === undefined}
        onClick={previous}
        display={ButtonDisplay.Chromeless}
      />
      <RatioContainer>{`${count} / ${total}`}</RatioContainer>
      <IconButton
        icon="chevron_right"
        disabled={next === undefined}
        onClick={next}
        display={ButtonDisplay.Chromeless}
      />
    </ArrowButtonsContainer>
  )
}
