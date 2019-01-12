import React, { Component, ReactNode, createRef } from "react";
import styled, { SimpleInterpolation } from "styled-components";
import { isNil, StyledHtmlElement } from "src/common/util/CoreUtils";
import { PopOverChildProps } from "popOver/PopOver";
import { BBModalOverlay, BBModalContainer } from "modals/Modals";
import {
  BorderRadius,
  borderRadius,
  Colors,
  colors,
  ElevationRange,
  generateScaleAnimation,
  getElevation,
  sizes
} from "CommonStyles";

type MenuProps = {
  children: ReactNode;
  css?: SimpleInterpolation;
};
type CCMenu = StyledHtmlElement<HTMLDivElement, MenuProps>;
const CCMenu = styled<MenuProps, "div">("div")`
  ${borderRadius(BorderRadius.Medium)};
  ${getElevation(ElevationRange.Elevation6)};

  background: ${colors(Colors.White)};
  padding: 4px 0;
  position: fixed;
  width: ${sizes.menu.width}px;

  ${({ css: cssOverrides }) => cssOverrides};
`;

type ModalContentProps = { css?: SimpleInterpolation };
const ModalContent = styled<ModalContentProps, "div">("div")``;

type State = {
  menuHeight: number;
};

export class Menu extends Component<PopOverChildProps, State> {
  state: State = {
    menuHeight: 0
  };

  menuRef = createRef<CCMenu>();

  componentDidMount() {
    this.updateMenuHeight();
  }

  componentDidUpdate() {
    this.updateMenuHeight();
  }

  updateMenuHeight = () => {
    const { menuHeight } = this.state;

    // Have to do this for storyshots. It can't get the deep ref to get offsetHeight from the styled-component.
    const newMenuHeight = isNil(this.menuRef.current)
      ? 0
      : this.menuRef.current.offsetHeight;

    if (menuHeight === newMenuHeight) {
      return null;
    }

    return this.setState(() => ({
      menuHeight: newMenuHeight
    }));
  };

  render() {
    const { isOpen, position, onClick, children } = this.props;
    const { menuHeight } = this.state;

    const scaleAnimation = generateScaleAnimation({
      elementHeight: menuHeight,
      elementWidth: sizes.menu.width,
      isOpen,
      position
    });

    return (
      <BBModalContainer isOpen={isOpen}>
        <BBModalOverlay chromeless isOpen={isOpen} onClick={onClick} />
        <CCMenu ref={this.menuRef} css={scaleAnimation.outSideContentStyles}>
          <ModalContent css={scaleAnimation.inSideContentStyles}>
            {children}
          </ModalContent>
        </CCMenu>
      </BBModalContainer>
    );
  }
}
