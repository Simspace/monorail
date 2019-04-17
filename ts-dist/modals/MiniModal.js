import React, { Component } from 'react';
import { BBModalBackground, BBModalContent, BBModalHeader, } from '@monorail/modals/Modals';
import { generateScaleAnimation, sizes } from '@monorail/helpers/exports';
import { Overlay } from '@monorail/toggle/Overlay';
import { css } from 'styled-components';
export class MiniModal extends Component {
    render() {
        const { children, headerChildren, iconLeft, isOpen, modalBackgroundCss, onClick, position, title, togglePopOver, } = this.props;
        const scaleAnimation = generateScaleAnimation({
            elementHeight: sizes.modals.mini.height,
            elementWidth: sizes.modals.mini.width,
            isOpen,
            position,
        });
        return (React.createElement(Overlay, { isOpen: isOpen, onClick: onClick, overlayProps: { chromeless: true }, togglePopOver: togglePopOver, usesScaleAnimation: true },
            React.createElement(BBModalBackground, { mini: true, cssOverrides: css `
            ${scaleAnimation.outSideContentStyles} ${modalBackgroundCss};
          ` },
                React.createElement(BBModalContent, { cssOverrides: scaleAnimation.inSideContentStyles },
                    React.createElement(BBModalHeader, { mini: true, onClose: onClick, title: title, iconLeft: iconLeft }, headerChildren),
                    children))));
    }
}
//# sourceMappingURL=MiniModal.js.map