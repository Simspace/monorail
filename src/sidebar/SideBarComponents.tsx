import React from 'react'
import styled, { css, SimpleInterpolation } from 'styled-components'
import {
  baseDisabledStyles,
  BorderRadius,
  borderRadius,
  ease,
  Colors,
  colors,
  flexFlow,
  FontSizes,
  gothamFontFamily,
  Sizes,
  typography,
  visible,
  transition,
} from '@monorail/CommonStyles'
import { CommonComponentType } from '@monorail/types'
import { PopOverToggleProps } from '@monorail/popOver/PopOver'
import {
  ListItem,
  ListItemGraphic,
  ListItemPrimaryText,
  ListItemSecondaryText,
  ListItemText,
} from '@monorail/list/List'

export const sideBarCollapsedTransitionDuration = 150

export const sideBarCollapsedTransition: (
  props: {
    properties?: Array<string>
    isSideBarCollapsed: boolean
  },
) => SimpleInterpolation = ({ properties = ['all'], isSideBarCollapsed }) =>
  transition({
    properties,
    easing: ease(isSideBarCollapsed),
    duration: sideBarCollapsedTransitionDuration,
  })

import posed from 'react-pose'

export enum SidebarContainerAnimationPose {
  Open = 'open',
  Collapsed = 'collapsed',
}

export const SidebarContainer = styled<
  CommonComponentType & {
    pose: string
  }
>(
  posed.div({
    [SidebarContainerAnimationPose.Open]: {
      width: 224,
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
)`
  ${flexFlow()};
  ${gothamFontFamily};

  background: #f4f4f7;
  box-sizing: border-box;
  flex-shrink: 0;
  position: relative;
  z-index: 5;

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

export const SidebarMenuContainer = styled<CommonComponentType, 'div'>('div')`
  ${flexFlow()};

  flex: 1;
  overflow-y: auto;
  padding: 0 8px;

  ${({ css: cssOverride }) => cssOverride};
`

export const SidebarMenuItemDropDownToggle = styled<
  CommonComponentType &
    PopOverToggleProps & {
      disabled?: boolean
      title: string
      subtitle?: string
      iconName: string
      isSideBarCollapsed: boolean
    }
>(
  ({
    title,
    subtitle,
    iconName,
    isOpen,
    css: cssOverrides,
    isSideBarCollapsed,
    ...otherProps
  }) => (
    <ListItem
      css={css`
        ${borderRadius(BorderRadius.Medium)};
        ${cssOverrides};
      `}
      size={Sizes.DP40}
      {...otherProps}
    >
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
            isOpen &&
            css`
              color: ${colors(Colors.AccentPurple700)};
            `
          }
        >
          {subtitle}
        </ListItemSecondaryText>
      </ListItemText>
      <ListItemGraphic
        icon={isOpen ? 'arrow_drop_up' : 'arrow_drop_down'}
        css={css`
          transform: translateX(${isSideBarCollapsed ? -18 : 0}px);

          transition: all ease 75ms,
            transform ${ease(isSideBarCollapsed)}
              ${sideBarCollapsedTransitionDuration}ms;
        `}
      />
    </ListItem>
  ),
)`
  ${({ isOpen, isSideBarCollapsed, css: cssOverrides, disabled }) => css`
    ${disabled && baseDisabledStyles}

    background: ${colors(Colors.White)};
    margin: 0 8px 8px;
    border: 1px solid
      ${isOpen ? colors(Colors.AccentPurple700) : colors(Colors.White)};
    color: ${
      isOpen ? colors(Colors.AccentPurple700) : colors(Colors.BrandDarkBlue)
    };

    &:hover,
    &:active {
      background: ${colors(Colors.White)};
    }

    &:hover {
      border-color: ${!isOpen && colors(Colors.AccentPurple500)};
    }

    &:active {
      border-color: ${colors(Colors.AccentPurple700)};
      color: ${colors(Colors.AccentPurple700)};
    }

    &:active,
    &:active ${ListItemGraphic} { /* stylelint-disable-line selector-type-no-unknown */
      color: ${colors(Colors.AccentPurple700)};
    }

    ${ListItemText} {
      ${visible(!isSideBarCollapsed)};
      ${sideBarCollapsedTransition({ isSideBarCollapsed })};
    }

    ${cssOverrides};
  `};
`

export const SidebarMenuContextRibbon = styled<CommonComponentType, 'div'>(
  'div',
)`
  ${typography(500, FontSizes.Title5, '12px 12px 13px 20px')};

  color: ${colors(Colors.Black62)};
`

export const SideBarMenuDivider = styled('div')`
  background: #e2e4ea;
  height: 1px;
  margin: 15px 8px 16px;
  flex-shrink: 0;
`
