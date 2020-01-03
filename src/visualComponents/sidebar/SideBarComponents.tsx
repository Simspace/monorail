import React, { FC, Fragment } from 'react'
import posed from 'react-pose'
import styled, { css, SimpleInterpolation } from 'styled-components'

import {
  baseDisabledStyles,
  BorderRadius,
  borderRadius,
  Colors,
  ease,
  flexFlow,
  FontSizes,
  getColor,
  gothamFontFamily,
  Sizes,
  transition,
  visible,
} from '@monorail/helpers/exports'
import { zIndex, ZIndexNodeName } from '@monorail/helpers/zIndex'
import { PopOverToggleProps } from '@monorail/metaComponents/popOver/PopOver'
import { CommonComponentType } from '@monorail/types'
import {
  ButtonDisplay,
  IconButtonShape,
} from '@monorail/visualComponents/buttons/buttonTypes'
import { IconButton } from '@monorail/visualComponents/buttons/IconButton'
import { BaseLink } from '@monorail/visualComponents/hyperLink/BaseLink'
import { ScrollAnimation } from '@monorail/visualComponents/layout/ScrollAnimation'
import {
  ListItem,
  ListItemGraphic,
  ListItemPrimaryText,
  ListItemSecondaryText,
  ListItemText,
} from '@monorail/visualComponents/list/List'
import { Text } from '@monorail/visualComponents/typography/Text'

// TODO(unsafe-any): Fix unsafe anys
// tslint:disable no-unsafe-any

export const sideBarCollapsedTransitionDuration = 150

export const sideBarCollapsedTransition: (props: {
  properties?: Array<string>
  isSideBarCollapsed: boolean
}) => SimpleInterpolation = ({ properties = ['all'], isSideBarCollapsed }) =>
  transition({
    properties,
    easing: ease(isSideBarCollapsed),
    duration: sideBarCollapsedTransitionDuration,
  })

export enum SidebarContainerAnimationPose {
  Open = 'open',
  Collapsed = 'collapsed',
}

/* eslint-disable no-unexpected-multiline */
export const SidebarContainer = styled(
  posed.div({
    [SidebarContainerAnimationPose.Open]: {
      width: 248,
      transition: {
        duration: sideBarCollapsedTransitionDuration,
        ease: 'easeIn',
      },
    },
    [SidebarContainerAnimationPose.Collapsed]: {
      width: 64,
      transition: {
        duration: sideBarCollapsedTransitionDuration,
        ease: 'easeOut',
      },
    },
  }),
)<
  CommonComponentType & {
    pose: string
  }
>`
  ${flexFlow()};
  ${gothamFontFamily};
  ${zIndex(ZIndexNodeName.SidebarContainer)};

  background: #f4f4f7;
  box-sizing: border-box;
  flex-shrink: 0;
  position: relative;

  will-change: width;

  &::after {
    background: linear-gradient(
      to right,
      rgba(0, 0, 0, 0.1) 0px,
      rgba(0, 0, 0, 0.1) 1px,
      rgba(0, 0, 0, 0.05) 1px,
      rgba(0, 0, 0, 0) 100%
    );
    bottom: 0;
    content: '';
    position: absolute;
    right: -3px;
    top: 0;
    width: 3px;
  }
`
/* eslint-enable no-unexpected-multiline */

export const SidebarMenuContainer = styled(ScrollAnimation)<
  CommonComponentType & { isSideBarCollapsed: boolean }
>(
  ({ isSideBarCollapsed }) => css`
    padding: 0 12px;

    ${SideBarMenuDivider} {
      margin-left: 0;
      margin-right: 0;
    }

    ${isSideBarCollapsed &&
      css`
        ${SideBarMenuDivider} {
          margin-left: -12px;
          margin-right: -12px;
        }
      `};
  `,
)

export const SidebarMenuItemDropDownToggle = styled(
  ({
    title,
    subtitle,
    iconName,
    isActive,
    isSideBarCollapsed,
    ...domProps
  }) => (
    <ListItem size={Sizes.DP40} {...domProps}>
      <ListItemGraphic
        icon={iconName}
        css={css`
          color: currentColor;

          transform: translateX(${isSideBarCollapsed ? -10 : 0}px);

          transition: all ease 75ms,
            transform ${ease(isSideBarCollapsed)}
              ${sideBarCollapsedTransitionDuration}ms;
        `}
      />
      <ListItemText>
        <ListItemPrimaryText>{title}</ListItemPrimaryText>
        <ListItemSecondaryText
          css={
            isActive &&
            css`
              color: ${getColor(Colors.AccentPurple700)};
            `
          }
        >
          {subtitle}
        </ListItemSecondaryText>
      </ListItemText>
      <ListItemGraphic
        icon={isActive ? 'arrow_drop_up' : 'arrow_drop_down'}
        css={css`
          transform: translateX(${isSideBarCollapsed ? -24 : 0}px);

          transition: all ease 75ms,
            transform ${ease(isSideBarCollapsed)}
              ${sideBarCollapsedTransitionDuration}ms;
        `}
      />
    </ListItem>
  ),
)<
  CommonComponentType &
    PopOverToggleProps & {
      disabled?: boolean
      title: string
      subtitle?: string
      iconName: string
      isSideBarCollapsed: boolean
    }
>(
  ({ isActive, isSideBarCollapsed, cssOverrides, disabled }) => css`
    ${disabled && baseDisabledStyles};

    ${borderRadius(BorderRadius.Medium)};

    background: ${getColor(Colors.White)};
    margin: 0 12px 8px;
    border: 1px solid
      ${isActive ? getColor(Colors.AccentPurple700) : getColor(Colors.White)};
    color: ${isActive
      ? getColor(Colors.AccentPurple700)
      : getColor(Colors.BrandDarkBlue)};

    &:hover,
    &:active {
      background: ${getColor(Colors.White)};
    }

    &:hover {
      border-color: ${!isActive && getColor(Colors.AccentPurple500)};
    }

    &:active {
      border-color: ${getColor(Colors.AccentPurple700)};
      color: ${getColor(Colors.AccentPurple700)};
    }

    /* stylelint-disable selector-type-no-unknown */
    &:active,
    &:active ${ListItemGraphic} {
      color: ${getColor(Colors.AccentPurple700)};
    }
    /* stylelint-enable selector-type-no-unknown */

    ${ListItemText} {
      ${visible(!isSideBarCollapsed)};
      ${sideBarCollapsedTransition({ isSideBarCollapsed })};
    }

    ${cssOverrides};
  `,
)

type SideBarMenuCollapsedProps = {
  isSideBarCollapsed: boolean
}

export const SideBarMenuDivider = styled.div<SideBarMenuCollapsedProps>(
  ({ isSideBarCollapsed = false }) => css`
    background: ${getColor(Colors.Grey90)};
    height: 1px;
    margin: 15px 12px 16px;
    flex-shrink: 0;
    transition: margin ${ease(isSideBarCollapsed)}
      ${sideBarCollapsedTransitionDuration}ms;

    ${isSideBarCollapsed &&
      css`
        margin-left: 0px;
        margin-right: 0px;
      `};
  `,
)

export const SideBarMenuHeader: FC<{
  isSideBarCollapsed: boolean
  header: string
}> = ({ header, isSideBarCollapsed }) => (
  <Text
    fontSize={FontSizes.Title5}
    fontWeight={500}
    margin="0 0 16px"
    color={Colors.Black62}
    css={css`
      ${flexFlow('row')}
      ${isSideBarCollapsed && `justify-content: center;`};

      transition: margin ${ease(isSideBarCollapsed)}
        ${sideBarCollapsedTransitionDuration}ms;

      margin-left: ${isSideBarCollapsed ? '0' : '14'}px;
      margin-right: ${isSideBarCollapsed ? '0' : '14'}px;
    `}
  >
    <span
      css={css`
        display: inline-flex;
        margin: 0 auto;
        pointer-events: none;
        overflow: hidden;

        transition: flex ${ease(isSideBarCollapsed)}
          ${sideBarCollapsedTransitionDuration}ms;

        flex-grow: ${isSideBarCollapsed ? '0' : '1'};
      `}
    >
      {header
        .split(' ')
        .map((word: string, index: number, list: Array<string>) => {
          return (
            <Fragment key={index}>
              <span>{word.charAt(0)}</span>
              <span
                css={css`
                  overflow: hidden;

                  transition: all ${ease(isSideBarCollapsed)}
                    ${sideBarCollapsedTransitionDuration}ms;

                  ${index < list.length - 1 &&
                    css`
                      padding-right: 0.5em;
                    `}

                  ${isSideBarCollapsed &&
                    css`
                      opacity: 0;
                      padding-right: 0;
                      text-indent: -150px;
                    `}
                `}
              >
                {word.slice(1)}
              </span>
            </Fragment>
          )
        })}
    </span>
  </Text>
)

export const SidebarBack: FC<{
  to: string
  title: string
  byline: string
}> = ({ to, title, byline, ...domProps }) => (
  <ListItem
    {...domProps}
    css={css`
      padding: 0 20px;
    `}
  >
    <IconButton
      icon="circle_arrow_left"
      css={css`
        margin-right: 4px;
      `}
      passedAs={BaseLink}
      to={to}
      display={ButtonDisplay.Secondary}
      shape={IconButtonShape.Square}
    />
    <ListItemText
      css={css`
        margin-left: 0;
      `}
    >
      <ListItemPrimaryText>{title}</ListItemPrimaryText>
      <ListItemSecondaryText>{byline}</ListItemSecondaryText>
    </ListItemText>
  </ListItem>
)

// tslint:enable
