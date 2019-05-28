import React, { FunctionComponent } from 'react'
import posed from 'react-pose'
import { Link } from 'react-router'
import styled, { css, SimpleInterpolation } from 'styled-components'

import { ButtonDisplay, IconButtonShape } from '@monorail/buttons/buttonTypes'
import { IconButton } from '@monorail/buttons/IconButton'
import {
  baseDisabledStyles,
  borderRadius,
  BorderRadius,
  Colors,
  ease,
  flexFlow,
  FontSizes,
  getColor,
  gothamFontFamily,
  Sizes,
  transition,
  typography,
  visible,
} from '@monorail/helpers/exports'
import { zIndex, ZIndexNodeName } from '@monorail/helpers/zIndex'
import {
  ListItem,
  ListItemGraphic,
  ListItemPrimaryText,
  ListItemSecondaryText,
  ListItemText,
} from '@monorail/list/List'
import { PopOverToggleProps } from '@monorail/popOver/PopOver'
import { CommonComponentType } from '@monorail/types'

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

export const SidebarMenuContainer = styled.div<CommonComponentType>(
  ({ cssOverrides }) => css`
    ${flexFlow()};

    flex: 1;
    overflow-y: auto;
    padding: 0 12px;

    ${cssOverrides};
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

          transform: translateX(${isSideBarCollapsed ? -6 : 0}px);

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
          transform: translateX(${isSideBarCollapsed ? -18 : 0}px);

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

export const SideBarMenuDivider = styled.div`
  background: #e2e4ea;
  height: 1px;
  margin: 15px 8px 16px;
  flex-shrink: 0;
`

export const SidebarBack: FunctionComponent<{
  to: string
  title: string
  byline: string
}> = ({ to, title, byline }) => (
  <ListItem>
    <IconButton
      icon="circle_arrow_left"
      css={css`
        margin-right: 8px;
      `}
      passedAs={Link}
      to={to}
      display={ButtonDisplay.Secondary}
      shape={IconButtonShape.Square}
    />
    <ListItemText>
      <ListItemPrimaryText>{title}</ListItemPrimaryText>
      <ListItemSecondaryText>{byline}</ListItemSecondaryText>
    </ListItemText>
  </ListItem>
)

// tslint:enable
