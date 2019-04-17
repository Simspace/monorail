import React, { Component } from 'react';
import { BBModalContainer, BBModalOverlay, } from '@monorail/modals/Modals';
export class Overlay extends Component {
    constructor() {
        super(...arguments);
        this.escFunction = (event) => {
            const { escToClose, isOpen, togglePopOver } = this.props;
            if (escToClose) {
                if (event.keyCode === 27 && isOpen) {
                    togglePopOver();
                }
            }
            return null;
        };
    }
    componentDidMount() {
        const { escToClose } = this.props;
        if (escToClose) {
            document.addEventListener('keydown', this.escFunction, false);
        }
    }
    componentWillUnmount() {
        const { escToClose } = this.props;
        if (escToClose) {
            document.removeEventListener('keydown', this.escFunction, false);
        }
    }
    render() {
        const { children, isOpen, onClick, overlayProps, usesScaleAnimation, zIndex, } = this.props;
        return (React.createElement(BBModalContainer, { onClick: e => e.stopPropagation(), usesScaleAnimation: usesScaleAnimation, isOpen: isOpen, zIndex: zIndex },
            React.createElement(BBModalOverlay, Object.assign({ isOpen: isOpen, onClick: onClick }, overlayProps)),
            children));
    }
}
Overlay.defaultProps = {
    usesScaleAnimation: false,
    escToClose: true,
    zIndex: 9998,
};
//# sourceMappingURL=Overlay.js.map