import React, {
  MouseEvent,
  ReactNode,
  StatelessComponent,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react'
import { SimpleInterpolation } from 'styled-components'

import {
  AppName,
  BorderRadius,
  borderRadius,
  Colors,
  ElevationRange,
  flexFlow,
  FontSizes,
  getColor,
  getElevationShadow,
  gothamFontFamily,
  sizes,
  typography,
} from '@monorail/helpers/exports'
import { useEventListener } from '@monorail/helpers/hooks'
import styled, {
  css,
  keyframes,
  ThemeProvider,
} from '@monorail/helpers/styled-components'
import { Mode } from '@monorail/helpers/theme'
import { CommonComponentType } from '@monorail/types'
import { AppIcon } from '@monorail/visualComponents/appIcon/AppIcon'
import {
  ButtonDisplay,
  IconButtonShape,
} from '@monorail/visualComponents/buttons/buttonTypes'
import { IconButton } from '@monorail/visualComponents/buttons/IconButton'
import { Icon } from '@monorail/visualComponents/icon/Icon'
import { ModalSize } from '@monorail/visualComponents/modals/modalTypes'

import { SearchContainer } from '../inputs/Search'

/**
 * Modal Hooks
 */

type UseModalAnimationParams = {
  closingAnimationCompleted: () => void
  isOpen: boolean
}

export function useModalAnimation<E extends HTMLElement>(
  params: UseModalAnimationParams,
) {
  const { closingAnimationCompleted, isOpen } = params

  const modalBackgroundRef = useRef<E>(null)

  const [isRendered, setIsRendered] = useState(false)

  useEffect(() => setIsRendered(true), [])

  const eventListener = useCallback<EventListener>(
    event => {
      if (modalBackgroundRef.current === event.target && !isOpen) {
        closingAnimationCompleted()
      }
    },
    [closingAnimationCompleted, isOpen],
  )

  useEventListener<E>({
    eventName: 'animationend',
    eventListener,
    element: modalBackgroundRef.current,
  })

  return {
    modalBackgroundRef,
    isRendered,
  }
}

/*
 *
 * Modal Animation
 *
 */

export const modalAnimationDuration = 100

export const mediumModalOpenAnimation = keyframes`
  from {
    opacity: 0;
    transform: rotateX(15deg) translateY(16px) scale(.95)
  }

  to {
    opacity: 0.9999;
    transform: rotateX(0) translateY(0) scale(1);

  }
`

export const mediumModalCloseAnimation = keyframes`
  from {
    opacity: 0.9999;
    transform: rotateX(0) translateY(0) scale(1);
  }

  to {
    opacity: 0;
    transform: rotateX(15deg) translateY(16px) scale(.95)
  }
`

export const largeModalOpenAnimation = keyframes`
  from {
    opacity: 0;
    transform: rotateX(3deg) translateY(16px) scale(.98);
  }

  to {
    opacity: 0.9999;
    transform: rotateX(0) translateY(0) scale(1);

  }
`

export const largeModalCloseAnimation = keyframes`
  from {
    opacity: 0.9999;
    transform: rotateX(0) translateY(0) scale(1);
  }

  to {
    opacity: 0;
    transform: rotateX(3deg) translateY(16px) scale(.98);
  }
`

export const fullScreenModalOpenAnimation = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 0.9999;

  }
`

export const fullScreenModalCloseAnimation = keyframes`
  from {
    opacity: 0.9999;
  }

  to {
    opacity: 0;
  }
`

export const overlayOpenAnimation = keyframes`
  from {
    opacity: 0;
  
  }
  
  to {
    opacity: 0.9999;
  }
`

export const overlayCloseAnimation = keyframes`
  from {
    opacity: 0.9999;
  
  }
  
  to {
    opacity: 0;
  }
`

/*
 *
 * Modal Background
 *
 */

/*
 * Types
 */

type BBModalSize = {
  size: ModalSize
}

export type BBModalBackgroundProps = BBModalSize & CommonComponentType

/*
 * Component
 */

const modalWidth = {
  [ModalSize.Mini]: `${sizes.modals.mini.width}px`,
  [ModalSize.Medium]: `${sizes.modals.medium.width}px`,
  [ModalSize.Large]: 'calc(100vw - 32px)',
  [ModalSize.FullScreen]: '100vw',
}

export const BBModalBackground = styled.div<BBModalBackgroundProps>(
  ({ size, cssOverrides }) => css`
    ${size === ModalSize.Mini
      ? css`
          height: ${sizes.modals.mini.height}px;
        `
      : css`
          margin: 16px;
        `};

    ${size === ModalSize.Large &&
      css`
        height: calc(100vh - 32px);
      `};

    ${borderRadius(BorderRadius.XLarge)};
    ${flexFlow()};
    ${getElevationShadow(ElevationRange.Elevation24)};

    background: ${getColor(Colors.White)};
    overflow: hidden;
    position: relative; /* position: relative; so that the shadow works when on the BBModalOverlay */
    width: ${modalWidth[size]};
    will-change: transform, opacity;
    transform-origin: bottom center;

    ${cssOverrides};
  `,
)

/*
 *
 * Modal Header
 *
 */

/*
 * Styles
 */

export const BBModalHeaderContainer = styled.div<
  BBModalSize & { cssOverrides: SimpleInterpolation }
>(
  ({ size, cssOverrides }) => css`
    ${flexFlow(size === ModalSize.Mini ? 'column' : 'row')};

    ${getElevationShadow(ElevationRange.Elevation2)};

    background: ${getColor(Colors.BrandDarkBlue)};
    flex-shrink: 0;
    user-select: none;
    z-index: 1;

    ${SearchContainer} {
      ${size === ModalSize.Mini
        ? css`
            margin: 8px 16px 16px;
          `
        : css`
            margin: auto 16px auto auto;
          `};
    }

    ${cssOverrides};
  `,
)

const BBModalHeaderRow = styled.div<BBModalSize>(
  ({ size }) => css`
    ${flexFlow('row')};

    align-items: center;
    height: ${size === ModalSize.Mini ? 48 : 56}px;
    padding: 0 16px;
    width: 100%;
    overflow: hidden;
  `,
)

const BBModalHeaderTitle = styled.h1<BBModalSize>(
  ({ size }) => css`
    ${size === ModalSize.Mini
      ? typography(700, FontSizes.Title4)
      : typography(700, FontSizes.Title3)};

    color: ${getColor(Colors.White)};
    white-space: nowrap;
    margin: 0;
  `,
)

const baseIconStyles = css`
  color: ${getColor(Colors.White)};
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
  cssOverrides?: SimpleInterpolation
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
    cssOverrides={
      headerRowChildren
        ? css``
        : css`
            margin-left: auto;
          `
    }
    icon="close"
    onClick={onClose}
    shape={IconButtonShape.Square}
    display={ButtonDisplay.Chromeless}
  />
)

export const BBModalHeader: StatelessComponent<BBModalHeaderProps> = ({
  appIcon,
  children,
  customCloseButton,
  headerRowChildren,
  iconLeft,
  iconRight,
  size,
  onClose,
  title,
  cssOverrides,
}) => (
  <ThemeProvider theme={theme => ({ ...theme, mode: Mode.Dark })}>
    <BBModalHeaderContainer size={size} cssOverrides={cssOverrides}>
      <BBModalHeaderRow size={size}>
        {appIcon && <StyledAppIconLeft appName={appIcon} />}
        {iconLeft && <StyledIconLeft icon={iconLeft} />}
        <BBModalHeaderTitle size={size} data-test-id="modal-header-title">
          {title}
        </BBModalHeaderTitle>
        {headerRowChildren}
        {iconRight && <StyledIconRight icon={iconRight} />}
        {size !== ModalSize.Mini && onClose && customCloseButton ? (
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
  </ThemeProvider>
)

/*
 *
 * Modal Footer
 *
 */

/*
 * Styles
 */

export const BBModalFooter = styled.div`
  ${flexFlow('row')};
  ${getElevationShadow(ElevationRange.Elevation6)};

  align-items: center;
  background: ${getColor(Colors.Grey98)};
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

const BBModalOverlayContainer = styled.div<BBModalOverlayProps>(
  ({ isOpen, chromeless, cssOverrides }) => css`
    ${!chromeless &&
      css`
        background: ${getColor(Colors.Black, 0.36)};
      `};

    bottom: 0;
    cursor: pointer;
    left: 0;
    position: fixed;
    right: 0;
    top: 0;

    ${cssOverrides};
  `,
)

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
  cssOverrides,
  ...otherProps
}) => (
  <BBModalOverlayContainer
    isOpen={isOpen}
    chromeless={chromeless}
    cssOverrides={cssOverrides}
    onClick={
      onClick
        ? (event: MouseEvent<HTMLDivElement>) => {
            if (event.target === event.currentTarget) {
              onClick(event)
            }
          }
        : undefined
    }
    {...otherProps}
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

export const BBModalContainer = styled.div<
  CommonComponentType & {
    isOpen: boolean
    usesScaleAnimation: boolean
    zIndex?: number
  }
>(
  ({ isOpen, cssOverrides, zIndex }) => css`
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
    perspective: 1500px;
    position: fixed;
    right: 0;
    top: 0;
    z-index: ${zIndex};

    ${cssOverrides};
  `,
)

/*
 *
 * Modal Content
 *
 */

/*
 * Styles
 */

export const BBModalContent = styled.div<CommonComponentType>(
  ({ cssOverrides }) => css`
    ${flexFlow()};
    height: 100%;
    max-height: 100%;
    overflow: auto;

    ${cssOverrides};
  `,
)
