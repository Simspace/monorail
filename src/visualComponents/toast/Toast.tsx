import React from 'react'
import styled, { css } from 'styled-components'

import {
  Colors,
  ElevationRange,
  flexFlow,
  FontSizes,
  getColor,
} from '@monorail/helpers/exports'
import { FCwDP } from '@monorail/sharedHelpers/react'
import { isEmptyString } from '@monorail/sharedHelpers/typeGuards'
import { CommonComponentType } from '@monorail/types'
import { ButtonDisplay } from '@monorail/visualComponents/buttons/buttonTypes'
import { IconButton } from '@monorail/visualComponents/buttons/IconButton'
import { BBCardBackground } from '@monorail/visualComponents/cards/Cards'
import { Icon } from '@monorail/visualComponents/icon/Icon'
import {
  AlertColors,
  AlertIcons,
  AlertLevel,
} from '@monorail/visualComponents/toast/types'
import { Text } from '@monorail/visualComponents/typography/Text'

export enum ToastSize {
  Small = 'small',
  Large = 'large',
}

/*
 * Styles
 */
const ToastContainer = styled.div<{
  color: string
}>(
  ({ color }) => css`
    ${flexFlow('row')};

    background: ${getColor(Colors.White)};
    border: 1px solid ${color};
    max-width: 50vw;
    min-width: 280px;
    position: relative;
    right: 0;
    width: 360px;
  `,
)

const ToastDetails = styled.div`
  flex: 1;
  justify-content: center;
  padding: 8px 16px;

  ${flexFlow('column')};
`

const ToastClose = styled.div`
  align-items: center;
  flex: 0;
  padding: 0 16px;

  ${flexFlow('row')};
`

const ToastTileContainer = styled.div<{
  color: string
  size: ToastSize
}>(
  ({ color, size }) => css`
    min-height: ${size === ToastSize.Small ? 36 : 64}px;
    width: ${size === ToastSize.Small ? 40 : 64}px;
    align-items: center;
    background: ${color};
    justify-content: center;

    ${flexFlow('row')};
  `,
)

/*
 * Toast Tile
 */

type ToastTileDefaultProps = {
  level: AlertLevel
  size: ToastSize
  icon: string
}

const ToastTile: FCwDP<{}, ToastTileDefaultProps> = ({ level, size, icon }) => (
  <ToastTileContainer color={AlertColors[level]} size={size}>
    <Icon
      css={css`
        color: ${getColor(Colors.White)};
      `}
      size={size === ToastSize.Small ? 16 : 24}
      icon={isEmptyString(icon) ? AlertIcons[level] : icon}
    />
  </ToastTileContainer>
)

ToastTile.defaultProps = {
  level: AlertLevel.Info,
  size: ToastSize.Large,
  icon: '',
}

/*
 * Toast Component
 */

/*
 * Props
 */
type Props = CommonComponentType & {
  message: string
}

type DefaultProps = ToastTileDefaultProps & {
  dismissible: boolean
  title: string
}

/*
 * Component
 */
export const Toast: FCwDP<Props, DefaultProps> = ({
  dismissible,
  level,
  message,
  title,
  icon,
  size,
  ...otherProps
}) => (
  <BBCardBackground
    hover={dismissible}
    elevation={ElevationRange.Elevation8}
    css={css`
      border-radius: 0;
    `}
  >
    <ToastContainer color={AlertColors[level]}>
      <ToastTile icon={icon} size={size} level={level} />

      <ToastDetails>
        {!isEmptyString(title) && (
          <Text fontSize={FontSizes.Title4} fontWeight={700} margin={'6px 0'}>
            {title}
          </Text>
        )}
        <Text
          fontSize={isEmptyString(title) ? FontSizes.Title4 : FontSizes.Title5}
          fontWeight={400}
        >
          {message}
        </Text>
      </ToastDetails>
      {dismissible && (
        <ToastClose>
          <IconButton icon={'close'} display={ButtonDisplay.Secondary} />
        </ToastClose>
      )}
    </ToastContainer>
  </BBCardBackground>
)

/*
 * Default Props
 */
Toast.defaultProps = {
  dismissible: false,
  icon: '',
  level: AlertLevel.Info,
  size: ToastSize.Large,
  title: '',
}
