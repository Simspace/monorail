import React, {
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from 'react'

import { generateScaleAnimation } from '@monorail/helpers/animation'
import { BorderRadius, borderRadius } from '@monorail/helpers/borderRadius'
import {
  ElevationRange,
  getElevationBackground,
  getElevationShadow,
} from '@monorail/helpers/elevation'
import { flexFlow } from '@monorail/helpers/flex'
import { useEventListener } from '@monorail/helpers/hooks'
import { sizes } from '@monorail/helpers/size'
import styled, { css } from '@monorail/helpers/styled-components'
import { PopOverChildProps } from '@monorail/metaComponents/popOver/PopOver'
import { FCwDP } from '@monorail/sharedHelpers/react'
import { isNil } from '@monorail/sharedHelpers/typeGuards'
import { CommonComponentType } from '@monorail/types'
import { Overlay } from '@monorail/visualComponents/toggle/Overlay'

type MenuProps = CommonComponentType & {
  width: string
}

const MenuContainer = styled.div<MenuProps>(
  ({ width }) => css`
    ${borderRadius(BorderRadius.Medium)};
    ${flexFlow()};
    ${getElevationShadow(ElevationRange.Elevation6)};
    ${getElevationBackground(ElevationRange.Elevation6)};

    overflow: hidden;
    position: fixed;
    width: ${width};
    min-width: ${sizes.menu.width}px;
  `,
)

export const MenuContent = styled.div`
  ${flexFlow()};

  height: 100%;
  overflow: auto;
  padding: 4px 0;
  width: 100%;
`

type RequiredProps = CommonComponentType &
  PopOverChildProps & {
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
  cssOverrides,
  ...domProps
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

  useEffect(() => {
    if (isOpen) {
      setIsRendered(true)
    }
  }, [isOpen, setIsRendered])

  /* eslint-disable react-hooks/exhaustive-deps */
  useLayoutEffect(() => {
    const menuElement = menuRef.current

    if (menuElement) {
      setMenuHeight(menuElement.offsetHeight)
      setMenuWidth(menuElement.offsetWidth)
    }
  }, [menuRef.current])
  /* eslint-enable react-hooks/exhaustive-deps */

  const eventListener = useCallback<EventListener>(
    event => {
      if (menuRef.current === event.target && !isOpen) {
        setIsRendered(false)
        closingAnimationCompleted && closingAnimationCompleted()
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
          ${scaleAnimation.outSideContentStyles}

          visibility: ${isRendered ? 'visible' : 'hidden'};

          ${cssOverrides}
        `}
        ref={menuRef}
        width={isNil(width) ? 'auto' : `${width}px`}
        {...domProps}
      >
        <MenuContent
          css={css`
            ${scaleAnimation.inSideContentStyles}
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
