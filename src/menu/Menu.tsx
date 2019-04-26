import { useEventListener } from '@monorail/helpers/hooks'
import { FCwDP } from '@monorail/sharedHelpers/react'
import React, {
  useLayoutEffect,
  useCallback,
  useMemo,
  useRef,
  useState,
  useEffect,
} from 'react'
import styled, { css } from 'styled-components'
import { PopOverChildProps } from '@monorail/popOver/PopOver'
import {
  BorderRadius,
  borderRadius,
  Colors,
  getColor,
  ElevationRange,
  flexFlow,
  generateScaleAnimation,
  getElevation,
  sizes,
} from '@monorail/helpers/exports'
import { Overlay } from '@monorail/toggle/Overlay'
import { isNil } from '@monorail/sharedHelpers/typeGuards'

type MenuProps = {
  width: string
}

const MenuContainer = styled.div<MenuProps>(
  ({ width }) => css`
    ${borderRadius(BorderRadius.Medium)};
    ${flexFlow()};
    ${getElevation(ElevationRange.Elevation6)};

    background: ${getColor(Colors.White)};
    overflow: hidden;
    position: fixed;
    width: ${width};
    min-width: ${sizes.menu.width}px;
  `,
)

const MenuContent = styled.div`
  ${flexFlow()};

  height: 100%;
  overflow: auto;
  padding: 4px 0;
  width: 100%;
`

type RequiredProps = PopOverChildProps & {
  width?: number
}

type DefaultProps = {
  zIndex: number
}

export const Menu: FCwDP<RequiredProps, DefaultProps> = ({
  children,
  closingAnimationCompleted,
  isOpen,
  onClick,
  position,
  togglePopOver,
  width,
  zIndex,
}) => {
  const menuRef = useRef<HTMLDivElement>(null)

  const [menuHeight, setMenuHeight] = useState(0)
  const [menuWidth, setMenuWidth] = useState(0)
  const [isRendered, setIsRendered] = useState(false)

  const scaleAnimation = useMemo(() => {
    const elementHeight = menuHeight

    const elementWidth = Math.max(
      isNil(width) ? menuWidth : width,
      sizes.menu.width,
    )

    return generateScaleAnimation({
      elementHeight,
      elementWidth,
      isOpen,
      position,
    })
  }, [isOpen, menuHeight, menuWidth, position, width])

  useEffect(() => setIsRendered(true), [])

  useLayoutEffect(() => {
    const menuElement = menuRef.current

    if (menuElement) {
      setMenuHeight(menuElement.offsetHeight)
      setMenuWidth(menuElement.offsetWidth)
    }
  }, [menuRef.current])

  const eventListener = useCallback<EventListener>(
    event => {
      if (menuRef.current === event.target && !isOpen) {
        closingAnimationCompleted()
      }
    },
    [closingAnimationCompleted, isOpen],
  )

  useEventListener<HTMLDivElement>({
    eventName: 'animationend',
    eventListener,
    element: menuRef.current,
  })

  return (
    <Overlay
      isOpen={isOpen}
      onClick={onClick}
      overlayProps={{ chromeless: true }}
      togglePopOver={togglePopOver}
      zIndex={zIndex}
    >
      <MenuContainer
        css={css`
          ${isRendered ? scaleAnimation.outSideContentStyles : ''}
        `}
        ref={menuRef}
        width={isNil(width) ? 'auto' : `${width}px`}
      >
        <MenuContent
          css={css`
            ${isRendered ? scaleAnimation.inSideContentStyles : ''}
          `}
        >
          {children}
        </MenuContent>
      </MenuContainer>
    </Overlay>
  )
}

Menu.defaultProps = {
  zIndex: 9998,
}
