import React from 'react'
import styled, { css, SimpleInterpolation } from 'styled-components'
import {
  baseDisabledStyles,
  BorderRadius,
  borderRadius,
  Colors,
  getColor,
  ease,
  flexFlow,
  FontSizes,
  gothamFontFamily,
  Sizes,
  transition,
  typography,
  visible,
} from '@monorail/helpers/exports'
import { CommonComponentType } from '@monorail/types'
import { PopOverToggleProps } from '@monorail/popOver/PopOver'
import {
  ListItem,
  ListItemGraphic,
  ListItemPrimaryText,
  ListItemSecondaryText,
  ListItemText,
} from '@monorail/list/List'
import posed from 'react-pose'
import { zIndex, ZIndexNodeName } from '@monorail/helpers/zIndex'

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

export enum SidebarContainerAnimationPose {
  Open = 'open',
  Collapsed = 'collapsed',
}

export const SidebarContainer = styled(
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

export const SidebarMenuContainer = styled.div<CommonComponentType>(
  ({ cssOverrides }) => css`
    ${flexFlow()};

    flex: 1;
    overflow-y: auto;
    padding: 0 8px;

    ${cssOverrides};
  `,
)

export const SidebarMenuItemDropDownToggle = styled(
  ({
    title,
    subtitle,
    iconName,
    isOpen,
    cssOverrides,
    isSideBarCollapsed,
    ...otherProps
  }) => (
    <ListItem
      cssOverrides={css`
        ${borderRadius(BorderRadius.Medium)};
        ${cssOverrides};
      `}
      size={Sizes.DP40}
      {...otherProps}
    >
      <ListItemGraphic
        icon={iconName}
        cssOverrides={css`
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
          cssOverrides={
            isOpen &&
            css`
              color: ${getColor(Colors.AccentPurple700)};
            `
          }
        >
          {subtitle}
        </ListItemSecondaryText>
      </ListItemText>
      <ListItemGraphic
        icon={isOpen ? 'arrow_drop_up' : 'arrow_drop_down'}
        cssOverrides={css`
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
  ({ isOpen, isSideBarCollapsed, cssOverrides, disabled }) => css`
    ${disabled && baseDisabledStyles};

    background: ${getColor(Colors.White)};
    margin: 0 8px 8px;
    border: 1px solid
      ${isOpen ? getColor(Colors.AccentPurple700) : getColor(Colors.White)};
    color: ${isOpen
      ? getColor(Colors.AccentPurple700)
      : getColor(Colors.BrandDarkBlue)};

    &:hover,
    &:active {
      background: ${getColor(Colors.White)};
    }

    &:hover {
      border-color: ${!isOpen && getColor(Colors.AccentPurple500)};
    }

    &:active {
      border-color: ${getColor(Colors.AccentPurple700)};
      color: ${getColor(Colors.AccentPurple700)};
    }

    &:active,
    &:active ${ListItemGraphic} {
      /* stylelint-disable-line selector-type-no-unknown */
      color: ${getColor(Colors.AccentPurple700)};
    }

    ${ListItemText} {
      ${visible(!isSideBarCollapsed)};
      ${sideBarCollapsedTransition({ isSideBarCollapsed })};
    }

    ${cssOverrides};
  `,
)

export const SidebarMenuContextRibbon = styled.div<CommonComponentType>`
  ${typography(500, FontSizes.Title5, '12px 12px 13px 20px')};

  color: ${getColor(Colors.Black62)};
`

export const SideBarMenuDivider = styled.div`
  background: #e2e4ea;
  height: 1px;
  margin: 15px 8px 16px;
  flex-shrink: 0;
`
