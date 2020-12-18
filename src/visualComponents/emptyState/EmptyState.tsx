import React from 'react'
import { css, SimpleInterpolation } from 'styled-components'

import {
  Colors,
  flexFlow,
  FontSizes,
  FontWeights,
} from '@monorail/helpers/exports'
import styled from '@monorail/helpers/styled-components'
import { isNonEmptyString } from '@monorail/sharedHelpers/typeGuards'
import { CommonComponentType } from '@monorail/types'
import { Button, ButtonProps } from '@monorail/visualComponents/buttons/Button'
import { ButtonDisplay } from '@monorail/visualComponents/buttons/buttonTypes'
import { Icon } from '@monorail/visualComponents/icon/Icon'
import { IconType } from '@monorail/visualComponents/icon/IconType'
import { Text } from '@monorail/visualComponents/typography/Text'

const Container = styled.div<CommonComponentType>(
  ({ cssOverrides }) => css`
    ${flexFlow('column')}

    align-items: center;
    flex: 1;
    justify-content: center;
    text-align: center;

    ${cssOverrides}
  `,
)

export const TextContainer = styled.div`
  ${flexFlow('column')}
`

export type EmptyStateProps = {
  icon?: IconType
  size?: EmptyStateSizes // Optional for now to avoid breaking changes in Attack Controller/Threat Actions. GS 07/22/20
  message?: string
  title?: string
  cssOverrides?: SimpleInterpolation
  button?: ButtonProps & {
    text: string
  }
}

export enum EmptyStateSizes {
  Small = 'small',
  Large = 'large',
}

export const iconSizes = {
  [EmptyStateSizes.Small]: 56,
  [EmptyStateSizes.Large]: 88,
}

export const titleSizes = {
  [EmptyStateSizes.Small]: FontSizes.Title4,
  [EmptyStateSizes.Large]: FontSizes.Title1,
}

export const messageSizes = {
  [EmptyStateSizes.Small]: FontSizes.Title5,
  [EmptyStateSizes.Large]: FontSizes.Title3,
}

export const iconMargins = {
  [EmptyStateSizes.Small]: '0 0 8px',
  [EmptyStateSizes.Large]: '0 0 12px',
}

export const titleMargins = {
  [EmptyStateSizes.Small]: '0 0 8px 0',
  [EmptyStateSizes.Large]: '0 0 8px 0',
}

export const messageMargins = {
  [EmptyStateSizes.Small]: '0 0 16px 0',
  [EmptyStateSizes.Large]: '0 0 16px 0',
}

export const getMessageMaxWidth = (size: EmptyStateSizes): number => {
  const messageMaxWidths = {
    [EmptyStateSizes.Small]: 272,
    [EmptyStateSizes.Large]: 400,
  }
  return messageMaxWidths[size]
}

export const EmptyState = (props: EmptyStateProps) => {
  const {
    icon = 'shrug',
    size = EmptyStateSizes.Small,
    title = '',
    message,
    button = { text: '' },
    ...otherProps
  } = props

  const { text: buttonText, ...buttonProps } = button

  return (
    <Container {...otherProps}>
      {/* // the shrug icon sits at the bottom of its square and so requires different sizing and margin */}
      <Icon
        size={iconSizes[size]}
        icon={icon}
        color={Colors.Gray54}
        css={css`
          margin: ${iconMargins[size]};
        `}
      />
      <TextContainer>
        {isNonEmptyString(title) && (
          <Text
            fontSize={titleSizes[size]}
            fontWeight={FontWeights.Medium}
            color={Colors.Gray74}
            margin={titleMargins[size]}
          >
            {title}
          </Text>
        )}
        <Text
          fontSize={messageSizes[size]}
          fontWeight={FontWeights.Book}
          color={Colors.Gray54}
          margin={messageMargins[size]}
          css={`
            max-width: ${getMessageMaxWidth(size)}px;
          `}
        >
          {message}
        </Text>
      </TextContainer>

      {isNonEmptyString(buttonText) && (
        <Button display={ButtonDisplay.Secondary} {...buttonProps}>
          {buttonText}
        </Button>
      )}
    </Container>
  )
}
