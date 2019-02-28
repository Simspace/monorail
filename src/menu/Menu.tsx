import React, { Component, ReactNode, createRef } from 'react'
import styled, { css, SimpleInterpolation } from 'styled-components'
import { StyledHtmlElement } from '@monorail/CoreUtils/type-level'
import { PopOverChildProps } from '@monorail/popOver/PopOver'
import {
  BorderRadius,
  borderRadius,
  Colors,
  colors,
  ElevationRange,
  flexFlow,
  generateScaleAnimation,
  getElevation,
  sizes,
} from '@monorail/CommonStyles'
import { Overlay } from '@monorail/toggle/Overlay'
import { fromNullable } from 'fp-ts/lib/Option'
import { isNil } from '@monorail/CoreUtils/primitive-guards'

type MenuProps = {
  children: ReactNode
  css?: SimpleInterpolation
  width: string
}
type MenuRef = StyledHtmlElement<HTMLDivElement, MenuProps>
const CCMenu = styled<MenuProps, 'div'>('div')`
  ${borderRadius(BorderRadius.Medium)};
  ${flexFlow()};
  ${getElevation(ElevationRange.Elevation6)};

  background: ${colors(Colors.White)};
  overflow: hidden;
  position: fixed;
  width: ${({ width }) => width};
  min-width: ${sizes.menu.width}px;

  ${({ css: cssOverrides }) => cssOverrides};
`

type ModalContentProps = { css?: SimpleInterpolation }
const MenuContent = styled<ModalContentProps, 'div'>('div')`
  ${({ css: cssOverride }) => css`
    ${flexFlow()};

    height: 100%;
    overflow: auto;
    padding: 4px 0;
    width: 100%;

    ${cssOverride};
  `};
`

type Props = PopOverChildProps & {
  width?: number
}

type State = {
  menuHeight: number
  menuWidth: number
}

export class Menu extends Component<Props, State> {
  state: State = {
    menuHeight: 0,
    menuWidth: 0,
  }

  menuRef = createRef<MenuRef>()

  componentDidMount() {
    this.updateMenuHeight()
  }

  componentDidUpdate() {
    this.updateMenuHeight()
  }

  updateMenuHeight = () => {
    const { menuHeight, menuWidth } = this.state

    const currentOpt = fromNullable(this.menuRef.current)
    const newMenuHeight = currentOpt.fold(0, ({ offsetHeight }) => offsetHeight)
    const newMenuWidth = currentOpt.fold(0, ({ offsetWidth }) => offsetWidth)

    if (menuHeight !== newMenuHeight || menuWidth !== newMenuWidth) {
      this.setState(() => ({
        menuHeight: newMenuHeight,
        menuWidth: newMenuWidth,
      }))
    }
  }

  render() {
    const {
      isOpen,
      position,
      onClick,
      children,
      width,
      togglePopOver,
    } = this.props
    const { menuHeight, menuWidth } = this.state

    const scaleAnimation = generateScaleAnimation({
      elementHeight: menuHeight,
      elementWidth: Math.max(
        isNil(width) ? menuWidth : width,
        sizes.menu.width,
      ),
      isOpen,
      position,
    })

    return (
      <Overlay
        isOpen={isOpen}
        onClick={onClick}
        overlayProps={{ chromeless: true }}
        togglePopOver={togglePopOver}
      >
        <CCMenu
          width={isNil(width) ? 'auto' : `${width}px`}
          ref={this.menuRef}
          css={scaleAnimation.outSideContentStyles}
        >
          <MenuContent css={scaleAnimation.inSideContentStyles}>
            {children}
          </MenuContent>
        </CCMenu>
      </Overlay>
    )
  }
}
