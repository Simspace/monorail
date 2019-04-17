import React, { Component, createRef } from 'react';
import styled, { css } from 'styled-components';
import { BorderRadius, borderRadius, Colors, getColor, ElevationRange, flexFlow, generateScaleAnimation, getElevation, sizes, } from '@monorail/helpers/exports';
import { Overlay } from '@monorail/toggle/Overlay';
import { fromNullable } from 'fp-ts/lib/Option';
import { isNil } from '@monorail/sharedHelpers/typeGuards';
const CCMenu = styled.div(({ width, cssOverrides }) => css `
    ${borderRadius(BorderRadius.Medium)};
    ${flexFlow()};
    ${getElevation(ElevationRange.Elevation6)};

    background: ${getColor(Colors.White)};
    overflow: hidden;
    position: fixed;
    width: ${width};
    min-width: ${sizes.menu.width}px;

    ${cssOverrides};
  `);
const MenuContent = styled.div(({ cssOverrides }) => css `
    ${flexFlow()};

    height: 100%;
    overflow: auto;
    padding: 4px 0;
    width: 100%;

    ${cssOverrides};
  `);
export class Menu extends Component {
    constructor() {
        super(...arguments);
        this.state = {
            menuHeight: 0,
            menuWidth: 0,
        };
        this.menuRef = createRef();
        this.updateMenuHeight = () => {
            const { menuHeight, menuWidth } = this.state;
            const currentOpt = fromNullable(this.menuRef.current);
            const newMenuHeight = currentOpt.fold(0, ({ offsetHeight }) => offsetHeight);
            const newMenuWidth = currentOpt.fold(0, ({ offsetWidth }) => offsetWidth);
            if (menuHeight !== newMenuHeight || menuWidth !== newMenuWidth) {
                this.setState(() => ({
                    menuHeight: newMenuHeight,
                    menuWidth: newMenuWidth,
                }));
            }
        };
    }
    componentDidMount() {
        this.updateMenuHeight();
    }
    componentDidUpdate() {
        this.updateMenuHeight();
    }
    render() {
        const { isOpen, position, onClick, children, width, togglePopOver, zIndex, } = this.props;
        const { menuHeight, menuWidth } = this.state;
        const scaleAnimation = generateScaleAnimation({
            elementHeight: menuHeight,
            elementWidth: Math.max(isNil(width) ? menuWidth : width, sizes.menu.width),
            isOpen,
            position,
        });
        return (React.createElement(Overlay, { isOpen: isOpen, onClick: onClick, overlayProps: { chromeless: true }, togglePopOver: togglePopOver, zIndex: zIndex },
            React.createElement(CCMenu, { width: isNil(width) ? 'auto' : `${width}px`, ref: this.menuRef, cssOverrides: scaleAnimation.outSideContentStyles },
                React.createElement(MenuContent, { cssOverrides: scaleAnimation.inSideContentStyles }, children))));
    }
}
Menu.defaultProps = {
    zIndex: 9998,
};
//# sourceMappingURL=Menu.js.map