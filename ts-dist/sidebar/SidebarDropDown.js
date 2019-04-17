import React, { Component, createRef } from 'react';
import { BBCardBackground } from '@monorail/cards/Cards';
import styled, { css } from 'styled-components';
import { flexFlow, generateScaleAnimation } from '@monorail/helpers/exports';
import { Overlay } from '@monorail/toggle/Overlay';
import { fromNullable } from 'fp-ts/lib/Option';
const DropDownContent = styled.div(({ cssOverrides }) => css `
    ${flexFlow()};

    overflow: hidden;

    ${cssOverrides};
  `);
export class SidebarDropDown extends Component {
    constructor() {
        super(...arguments);
        this.state = {
            dropDownHeight: 0,
        };
        this.dropDownRef = createRef();
        this.updateMenuHeight = () => {
            const { dropDownHeight } = this.state;
            const currentOpt = fromNullable(this.dropDownRef.current);
            const newDropDownHeight = currentOpt.fold(0, ({ offsetHeight }) => offsetHeight);
            if (dropDownHeight !== newDropDownHeight) {
                this.setState(() => ({
                    dropDownHeight: newDropDownHeight,
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
        const { isOpen, position, onClick, children, togglePopOver, width, } = this.props;
        const { dropDownHeight } = this.state;
        const scaleAnimation = generateScaleAnimation({
            elementHeight: dropDownHeight,
            elementWidth: width,
            isOpen,
            position,
        });
        return (React.createElement(Overlay, { isOpen: isOpen, onClick: onClick, overlayProps: { chromeless: true }, togglePopOver: togglePopOver },
            React.createElement(BBCardBackground, { ref: this.dropDownRef, cssOverrides: css `
            width: ${width}px;

            ${scaleAnimation.outSideContentStyles};
          ` },
                React.createElement(DropDownContent, { cssOverrides: scaleAnimation.inSideContentStyles }, children))));
    }
}
SidebarDropDown.defaultProps = {
    width: 208,
};
//# sourceMappingURL=SidebarDropDown.js.map