import { isUndefined } from 'lodash'
import React from 'react'
import styled, { css } from 'styled-components'

import {
  Colors,
  ellipsis,
  flexFlow,
  FontSizes,
  FontWeights,
  getColor,
} from '@monorail/helpers/exports'
import { isEmptyString } from '@monorail/sharedHelpers/typeGuards'
import { Icon } from '@monorail/visualComponents/icon/Icon'
import { IconType } from '@monorail/visualComponents/icon/IconType'
import { Text } from '@monorail/visualComponents/typography/Text'

const tagHeight = 24
const circleWidth = tagHeight - 4
const circleRadius = circleWidth / 2
const iconSize = tagHeight / 2

const getIconStyles = (props: { type: 'icon' | 'button' }) => css`
  color: ${props.type === 'icon'
    ? getColor(Colors.BrandLightBlue)
    : getColor(Colors.White)};

  margin: 0 ${iconSize / 2}px;
  position: relative; /* give z-index so ::before bg is behind icon */
  z-index: 1;
`

const labelStyles = css`
  color: ${getColor(Colors.Black89a)};
  ${ellipsis};
`

type Props = {
  icon?: IconType
  label?: string
  title?: string
  button?: {
    icon: IconType
    onClick: () => void
  }
}

export const TagContainer = styled.div<{
  hasButton: boolean
  hasIcon: boolean
  hasLabel: boolean
}>(
  ({ hasButton, hasIcon, hasLabel }) => css`
    ${!hasLabel &&
      css`
        width: ${tagHeight}px;
      `};

    ${flexFlow('row')};

    display: inline-flex;
    align-items: center;
    background: ${getColor(Colors.Black, 0.07)};
    border-radius: ${tagHeight / 2}px;
    height: ${tagHeight}px;
    position: relative; /* ::before circle is pos: abs to this element. */
    text-transform: uppercase;
    user-select: none;

    ${hasIcon &&
      css`
        &::before {
          background: ${getColor(Colors.White)};
          border-radius: ${circleRadius}px;
          bottom: 2px;
          content: '';
          left: 2px;
          position: absolute;
          top: 2px;
          width: ${circleWidth}px;
        }
      `}

    ${hasButton &&
      css`
        &::after {
          background: ${getColor(Colors.BrandLightBlue)};
          border-radius: ${circleRadius}px;
          bottom: 2px;
          content: '';
          right: 2px;
          position: absolute;
          top: 2px;
          width: ${circleWidth}px;
        }
      `}
  `,
)

/**
 * Consider using one of the more specific Tag components, like
 * `TagIcon` and `TagLabel`. The props for a bare `Tag` are not the most
 * instructive.
 *
 * Use Tags to visually label UI objects for quick recognition and navigation,
 * like categories and metadata.
 *
 * ```tsx
 * <TagLabel>Your Tag Here</TagLabel>
 * <TagIcon icon="person">Your Tag Here</TagIcon>
 * <TagClose onClose={() => alert('closed')}>Close Me</TagClose>
 * ```
 */
export const Tag = (props: Props) => {
  const { label = '', icon, title, ...otherProps } = props

  const hasButton = typeof props.button?.onClick === 'function'
  const hasIcon = !isUndefined(icon)
  const hasLabel = !isEmptyString(label)
  return (
    <TagContainer
      hasButton={hasButton}
      hasIcon={hasIcon}
      hasLabel={hasLabel}
      title={title}
      {...otherProps}
    >
      {!isUndefined(icon) && (
        <Icon
          css={getIconStyles({ type: 'icon' })}
          icon={icon}
          size={iconSize}
        />
      )}

      {!isEmptyString(label) && (
        <Text
          css={labelStyles}
          fontSize={FontSizes.Micro}
          fontWeight={FontWeights.Bold}
          margin={`0 ${hasButton ? 4 : 8}px 0 ${hasIcon ? 2 : 8}px`}
        >
          {label}
        </Text>
      )}

      {hasButton && (
        <span
          css={css`
            cursor: pointer;
          `}
          aria-label={props.title || props.label}
          role="button"
          onClick={props.button?.onClick}
        >
          <Icon
            css={getIconStyles({ type: 'button' })}
            icon={props.button?.icon || ''}
            size={iconSize}
          />
        </span>
      )}
    </TagContainer>
  )
}

export const TagCircle = (props: { icon: IconType; title: string }) => (
  <Tag {...props} />
)

export const TagLabel = (props: { children: string; title?: string }) => (
  <Tag label={props.children} {...props} />
)

export const TagIcon = (props: {
  children: string
  icon: IconType
  title?: string
}) => <Tag label={props.children} {...props} />

export const TagClose = (props: {
  children: string
  title?: string
  onClose: () => void
}) => (
  <Tag
    button={{ icon: 'close', onClick: props.onClose }}
    label={props.children}
    {...props}
  />
)

export const TagIconClose = (props: {
  icon: IconType
  children: string
  title?: string
  onClose: () => void
}) => (
  <Tag
    button={{ icon: 'close', onClick: props.onClose }}
    label={props.children}
    {...props}
  />
)
