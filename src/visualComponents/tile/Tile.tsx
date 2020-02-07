import React, { FC, useState } from 'react'

import { Colors, getColor } from '@monorail/helpers/color'
import { FontSizes, FontWeights } from '@monorail/helpers/exports'
import { flexFlow } from '@monorail/helpers/flex'
import { Sizes } from '@monorail/helpers/size'
import styled, { css } from '@monorail/helpers/styled-components'
import {
  ActionsMenu,
  MenuAction,
} from '@monorail/visualComponents/actionsMenu/ActionsMenu'
import { HyperLink } from '@monorail/visualComponents/hyperLink/HyperLink'
import { Icon } from '@monorail/visualComponents/icon/Icon'
import { Text } from '@monorail/visualComponents/typography/Text'

import { TileStatus } from './TileStatus'

const TileStatusForeground = {
  [TileStatus.Ready]: Colors.Success,
  [TileStatus.NotReady]: Colors.Error,
  [TileStatus.Warning]: Colors.Warning,
  [TileStatus.Unassigned]: Colors.Black54,
  [TileStatus.Neutral]: Colors.Black54,
  [TileStatus.Empty]: Colors.Error,
}

const TileStatusBorder = {
  [TileStatus.Ready]: Colors.Success,
  [TileStatus.NotReady]: Colors.Error,
  [TileStatus.Warning]: Colors.Warning,
  [TileStatus.Unassigned]: Colors.Black54,
  [TileStatus.Neutral]: Colors.Black54,
  [TileStatus.Empty]: Colors.Black54,
}

const TileStatusBackground = {
  [TileStatus.Ready]: Colors.Success,
  [TileStatus.NotReady]: Colors.Error,
  [TileStatus.Warning]: Colors.Warning,
  [TileStatus.Unassigned]: Colors.Black24,
  [TileStatus.Neutral]: Colors.Black24,
  [TileStatus.Empty]: Colors.Error,
}

const TileStatusIcon = {
  [TileStatus.Ready]: 'check',
  [TileStatus.NotReady]: 'close',
  [TileStatus.Warning]: 'priority_high',
  [TileStatus.Unassigned]: 'question_mark',
  [TileStatus.Neutral]: '',
  [TileStatus.Empty]: 'question_mark',
}

const TileStatusLabel = {
  [TileStatus.Ready]: 'Ready',
  [TileStatus.NotReady]: 'Not Ready',
  [TileStatus.Warning]: 'Expiring',
  [TileStatus.Unassigned]: 'Unassigned',
  [TileStatus.Neutral]: '',
  [TileStatus.Empty]: 'Unassigned',
}

type TileStyleProps = {
  status: TileStatus
  selected?: boolean
  disabled?: boolean
}

type TileProps = TileStyleProps & {
  icon: string
  status?: TileStatus
  selected?: boolean
  actions?: Array<MenuAction>
}

const TileActionsWrapper = styled.div`
  position: absolute;
  top: 8px;
  right: 8px;
  z-index: 10;
`
const TileIconWrapper = styled.div`
  ${flexFlow('column')};
  align-items: center;
  justify-content: center;
  min-width: ${Sizes.DP24}px;

  ${Icon} {
    color: ${Colors.White};
  }
`

const TileContent = styled.div<TileStyleProps>(
  ({ status, selected = false }) => css`
    ${flexFlow('row')};
    flex: 1;
    border: ${selected ? 2 : 1}px
      ${status === TileStatus.Unassigned || status === TileStatus.Empty
        ? 'dashed'
        : 'solid'};
    border-left: none;
    box-sizing: border-box;
    padding: 2px 8px;
    align-items: center;
  `,
)

const TileContainer = styled.div<TileStyleProps>(
  ({ status, selected = false }) => {
    const baseOpacity = selected ? 0.75 : 0.5
    const foregroundColor = selected
      ? Colors.BrandLightBlue
      : TileStatusForeground[status]
    const borderColor = selected
      ? Colors.BrandLightBlue
      : TileStatusBorder[status]

    return css`
      ${flexFlow('row')};

      ${HyperLink} {
        color: ${getColor(Colors.BrandLightBlue)};
      }

      ${TileContent} {
        background: ${getColor(TileStatusBackground[status], 0.08)};
        border-color: ${getColor(borderColor, baseOpacity)};
      }

      ${TileIconWrapper} {
        background: ${getColor(foregroundColor, baseOpacity)};
      }

      &:hover {
        ${TileContent} {
          background: ${getColor(TileStatusBackground[status], 0.16)};
          border-color: ${getColor(borderColor, baseOpacity + 0.25)};
        }

        ${TileIconWrapper} {
          background: ${getColor(foregroundColor, baseOpacity + 0.25)};
        }
      }

      display: inline-flex;
      margin: 0 8px 8px 0;
      min-height: 80px;
      min-width: 200px;
      position: relative;
    `
  },
)

type TileStatusType = {
  status: TileStatus
  size: Sizes
}

const TileStatusWrapper = styled.div<TileStatusType>(
  ({ status }) => css`
    display: inline-flex;
    align-items: center;
    justify-items: center;
    flex: 0;

    padding: 2px 16px 2px 8px;
    color: ${getColor(Colors.White)};
    background: ${getColor(TileStatusBorder[status])};
    border-radius: 100px;

    ${Icon} {
      color: currentColor;
    }
  `,
)

const IconStatus: FC<TileStatusType> = props => {
  const { children, size = Sizes.DP16, status, ...domProps } = props

  return (
    <TileStatusWrapper status={status} size={size} {...domProps}>
      <Icon
        icon={TileStatusIcon[status]}
        size={size}
        css="margin-right: 4px;"
      />
      <Text
        fontSize={FontSizes.Title5}
        fontWeight={FontWeights.Medium}
        color={Colors.White}
      >
        {children}
      </Text>
    </TileStatusWrapper>
  )
}

export const Tile: FC<TileProps> = props => {
  const {
    actions,
    icon,
    children,
    status = TileStatus.Empty,
    selected = false,
    ...domProps
  } = props
  const [isHovering, setIsHovering] = useState(false)

  return (
    <TileContainer
      status={status}
      selected={selected}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      {...domProps}
    >
      <TileIconWrapper>
        <Icon size={Sizes.DP16} icon={isHovering ? 'drag_indicator' : icon} />
      </TileIconWrapper>
      <TileContent status={status} selected={selected}>
        <div>
          {children}
          {status !== TileStatus.Neutral && (
            <IconStatus status={status} size={Sizes.DP16}>
              {TileStatusLabel[status]}
            </IconStatus>
          )}
        </div>
      </TileContent>
      {status !== TileStatus.Unassigned && actions && (
        <TileActionsWrapper>
          <ActionsMenu actions={actions} />
        </TileActionsWrapper>
      )}
    </TileContainer>
  )
}
