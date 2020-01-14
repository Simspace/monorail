import React, { FC } from 'react'
import styled from 'styled-components'

import {
  Colors,
  flexFlow,
  FontSizes,
  getColor,
  typography,
} from '@monorail/helpers/exports'
import { Icon } from '@monorail/visualComponents/icon/Icon'

import { Confetti } from './Confetti'

/*
 * Styles
 */

const Container = styled.div`
  ${flexFlow('column')};

  align-items: center;
  height: 100%;
  justify-content: center;
  width: 100%;
`

const StyledIcon = styled(Icon)`
  color: ${getColor(Colors.BrandDarkBlue)};
`

const Title = styled.h1`
  ${typography(700, FontSizes.Hyper2)};

  color: ${getColor(Colors.Black89)};
  margin: 24px 0 24px 0;
`

const SubTitle = styled.div`
  ${typography(400, FontSizes.Title3)};

  color: ${getColor(Colors.Black89)};
  max-width: 448px;
  text-align: center;
  width: 100%;
`

/*
 * Types
 */

type SuccessPageProps = {
  titleText?: React.ReactNode
  subtitleText?: React.ReactNode
}

/*
 * Components
 */

export const SuccessPage: FC<SuccessPageProps> = props => {
  const {
    titleText = 'Event Complete!',
    subtitleText = 'We will be in touch with you shortly.',
  } = props

  return (
    <Container>
      <Confetti></Confetti>
      <StyledIcon icon="check_circle" size={160} />
      <Title>{titleText}</Title>
      <SubTitle>{subtitleText}</SubTitle>
    </Container>
  )
}
