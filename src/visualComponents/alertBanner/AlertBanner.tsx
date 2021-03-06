import React, { ReactNode } from 'react'
import styled, { css } from 'styled-components'

import {
  Colors,
  flexFlow,
  FontSizes,
  getColor,
} from '@monorail/helpers/exports'
import { ButtonDisplay } from '@monorail/visualComponents/buttons/buttonTypes'
import { IconButton } from '@monorail/visualComponents/buttons/IconButton'
import { Icon } from '@monorail/visualComponents/icon/Icon'
import {
  AlertColors,
  AlertIcons,
  AlertLevel,
} from '@monorail/visualComponents/toast/types'
import { Text } from '@monorail/visualComponents/typography/Text'

/*
 * Styles
 */

const BannerContainer = styled.div<{ level: AlertLevel }>(
  ({ level }) => css`
    display: flex;
    border: 1px solid ${getColor(AlertColors[level])};
    background-color: ${getColor(AlertColors[level], 0.08)};
    height: 80px;
    flex-shrink: 0;
    max-width: 1920px;
  `,
)

const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 56px;
  flex-shrink: 0;
`

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0;
`

const CloseAlert = styled.div`
  align-items: center;
  margin: 0 0 0 auto;
  padding: 0 16px;

  ${flexFlow('row')};
`

/*
 * Props
 */

type AlertBannerProps = {
  level: AlertLevel
  message: ReactNode
  title?: string
} & (
  | {
      dismissible?: true
      onClick: () => void
    }
  | {
      dismissible: false
    }
)

/*
 * Component
 */

export const AlertBanner = (props: AlertBannerProps) => {
  const { level = AlertLevel.Info, message, title, ...domProps } = props

  return (
    <BannerContainer level={level} {...domProps}>
      <IconContainer>
        <Icon icon={AlertIcons[level]} color={AlertColors[level]} size={24} />
      </IconContainer>
      <TextContainer>
        <Text
          css={`
            margin-bottom: 5px;
          `}
          fontWeight={500}
          fontSize={FontSizes.Title4}
          color={AlertColors[level]}
        >
          {title}
        </Text>
        <Text
          fontWeight={400}
          fontSize={FontSizes.Title5}
          color={Colors.Gray62}
          css={css`
            max-width: 664px;
          `}
        >
          {message}
        </Text>
      </TextContainer>
      {(props.dismissible || props.dismissible === undefined) && (
        <CloseAlert>
          <IconButton
            icon={'close'}
            display={ButtonDisplay.Chromeless}
            onClick={props.onClick}
            css={css`
              color: ${getColor(Colors.Gray24)};
            `}
          />
        </CloseAlert>
      )}
    </BannerContainer>
  )
}
