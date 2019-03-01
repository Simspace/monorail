import React, { MouseEvent, ReactNode, StatelessComponent } from 'react'
import { AppIcon } from '@monorail/appIcon/AppIcon'
import { Icon } from '@monorail/icon/Icon'
import {
  AppName,
  BorderRadius,
  borderRadius,
  Colors,
  colors,
  ElevationRange,
  flexFlow,
  FontSizes,
  getElevation,
  gothamFontFamily,
  sizes,
  typography,
  visible,
} from '@monorail/CommonStyles'
import styled, { css, SimpleInterpolation } from 'styled-components'
import { BBSearchContainer } from '../inputs/Search'
import { IconButton } from '@monorail/buttons/IconButton'
import { IconButtonDisplay } from '@monorail/buttons/buttonTypes'
import { CommonComponentType } from '@monorail/types'

/*
*
* Modal Background
*
*/

/*
* Types
*/

type BBModalSize = {
  mini?: boolean
}

export type BBModalBackgroundProps = BBModalSize & CommonComponentType

/*
* Component
*/

export const BBModalBackground = styled<BBModalBackgroundProps, 'div'>('div')`
  ${({ mini }) =>
    mini &&
    css`
      height: ${sizes.modals.mini.height}px;
    `};

  ${borderRadius(BorderRadius.XLarge)};
  ${flexFlow()};
  ${getElevation(ElevationRange.Elevation24)};

  background: ${colors(Colors.White)};
  overflow: hidden;
  width: ${({ mini }) => (mini ? sizes.modals.mini.width : 584)}px;
  position: relative; /* position: relative; so that the shadow works when on the BBModalOverlay */

  will-change: transform;

  ${({ css: cssOverrides }) => cssOverrides};
`

/*
*
* Modal Header
*
*/

/*
* Styles
*/

const BBModalHeaderContainer = styled<BBModalSize, 'div'>('div')`
  ${({ mini }) => flexFlow(mini ? 'column' : 'row')};

  ${getElevation(ElevationRange.Elevation2)};

  background: ${colors(Colors.BrandDarkBlue)};
  flex-shrink: 0;
  user-select: none;
  z-index: 1;

  ${BBSearchContainer} {
    ${({ mini }) =>
      mini
        ? css`
            margin: 8px 16px 16px;
          `
        : css`
            margin: auto 16px auto auto;
          `};
  }
`

const BBModalHeaderRow = styled<BBModalSize, 'div'>('div')`
  ${flexFlow('row')};

  align-items: center;
  height: ${({ mini }) => (mini ? 48 : 56)}px;
  padding: 0 16px;
  width: 100%;
`

const BBModalHeaderTitle = styled<BBModalSize, 'h1'>('h1')`
  ${({ mini }) =>
    mini
      ? typography(700, FontSizes.Title4)
      : typography(700, FontSizes.Title3)};

  color: ${colors(Colors.White)};
  white-space: nowrap;
  margin: 0;
`

const baseIconStyles = css`
  color: ${colors(Colors.White)};
`

const StyledAppIconLeft = styled(AppIcon)`
  ${baseIconStyles};
  margin-right: 16px;
`

const StyledIconLeft = styled(Icon)`
  ${baseIconStyles};
  margin-right: 16px;
`

const StyledIconRight = styled(Icon)`
  ${baseIconStyles};
  margin-left: 16px;
`

/*
* Types
*/

type BBModalHeaderProps = BBModalSize & {
  appIcon?: AppName
  customCloseButton?: ReactNode
  headerRowChildren?: ReactNode
  iconLeft?: string
  iconRight?: string
  onClose?: (event: MouseEvent) => void
  title: string
}

type DefaultCloseButtonProps = Pick<
  BBModalHeaderProps,
  'headerRowChildren' | 'onClose'
>

/*
* Component
*/

export const DefaultCloseButton = ({
  headerRowChildren,
  onClose,
}: DefaultCloseButtonProps) => (
  <IconButton
    css={
      headerRowChildren
        ? css``
        : css`
            margin-left: auto;
          `
    }
    icon="close"
    darkMode
    onClick={onClose}
    display={IconButtonDisplay.Chromeless}
  />
)

export const BBModalHeader: StatelessComponent<BBModalHeaderProps> = ({
  appIcon,
  children,
  customCloseButton,
  headerRowChildren,
  iconLeft,
  iconRight,
  mini,
  onClose,
  title,
}) => (
  <BBModalHeaderContainer mini={mini}>
    <BBModalHeaderRow mini={mini}>
      {appIcon && <StyledAppIconLeft appName={appIcon} />}
      {iconLeft && <StyledIconLeft icon={iconLeft} />}
      <BBModalHeaderTitle mini={mini} data-test-id="modal-header-title">
        {title}
      </BBModalHeaderTitle>
      {headerRowChildren}
      {iconRight && <StyledIconRight icon={iconRight} />}
      {!mini && onClose && customCloseButton ? (
        customCloseButton
      ) : (
        <DefaultCloseButton
          headerRowChildren={headerRowChildren}
          onClose={onClose}
        />
      )}
    </BBModalHeaderRow>
    {children}
  </BBModalHeaderContainer>
)

/*
*
* Modal Footer
*
*/

/*
* Styles
*/

export const BBModalFooter = styled('div')`
  ${flexFlow('row')};
  ${getElevation(ElevationRange.Elevation6)};

  align-items: center;
  background: ${colors(Colors.Grey98)};
  height: 48px;
  justify-content: flex-end;
  margin: auto 0 0;
  padding: 0 16px;
  flex-shrink: 0;
`
/*
*
* Modal Overlay
*
 */

/*
* Styles
*/

const BBModalOverlayContainer = styled<BBModalOverlayProps, 'div'>('div')`
  ${({ isOpen }) => visible(isOpen)};
  ${({ chromeless }) =>
    !chromeless &&
    css`
      background: ${colors(Colors.Black, 0.36)};
    `};

  bottom: 0;
  cursor: pointer;
  left: 0;
  position: fixed;
  right: 0;
  top: 0;

  transition: all ease 150ms;

  ${({ css: cssOverride }) => cssOverride};
`

/*
* Types
*/

export type BBModalOverlayProps = CommonComponentType & {
  isOpen: boolean
  onClick?: (event: MouseEvent<HTMLDivElement>) => void
  chromeless?: boolean
}

/*
* Component
*/

export const BBModalOverlay: StatelessComponent<BBModalOverlayProps> = ({
  children,
  chromeless,
  isOpen,
  onClick,
  css: cssOverrides,
}) => (
  <BBModalOverlayContainer
    isOpen={isOpen}
    chromeless={chromeless}
    css={cssOverrides}
    onClick={
      onClick
        ? (event: MouseEvent<HTMLDivElement>) => {
            if (event.target === event.currentTarget) {
              onClick(event)
            }
          }
        : undefined
    }
  >
    {children}
  </BBModalOverlayContainer>
)

/*
*
* Modal Container
*
 */

/*
* Styles
*/

export const BBModalContainer = styled<
  CommonComponentType & { isOpen: boolean; usesScaleAnimation: boolean },
  'div'
>('div')`
  ${({ isOpen, usesScaleAnimation, css: cssOverrides }) => css`
    ${isOpen
      ? css`
          pointer-events: all;
        `
      : css`
          pointer-events: none;
        `};

    ${flexFlow()};
    ${gothamFontFamily};

    align-items: center;
    bottom: 0;
    justify-content: center;
    left: 0;
    position: fixed;
    right: 0;
    top: 0;
    z-index: 9998;

    ${!usesScaleAnimation &&
      css`
        ${BBModalBackground} {
          ${isOpen
            ? css`
                transform: scale(1) translateY(0);
              `
            : css`
                transform: scale(0.8) translateY(64px);
              `};
          ${visible(isOpen)};

          transition: all ease 100ms;
        }
      `};

    ${cssOverrides};
  `};
`

/*
*
* Modal Content
*
 */

/*
* Styles
*/

export const BBModalContent = styled<{ css?: SimpleInterpolation }, 'div'>(
  'div',
)`
  ${flexFlow()};
  height: 100%;
  max-height: 100%;
  overflow: auto;

  ${({ css: cssOverrides }) => cssOverrides};
`
