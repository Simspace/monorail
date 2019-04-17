import React, { Component } from 'react';
import { BBModalBackground, BBModalHeader } from '@monorail/modals/Modals';
import { Overlay } from '@monorail/toggle/Overlay';
export class MediumModal extends Component {
    render() {
        const { isOpen, onClick, children, title, iconLeft, togglePopOver, headerStyles, ...otherProps } = this.props;
        return (React.createElement(Overlay, { isOpen: isOpen, onClick: onClick, togglePopOver: togglePopOver },
            React.createElement(BBModalBackground, Object.assign({}, otherProps),
                React.createElement(BBModalHeader, { title: title, iconLeft: iconLeft, onClose: onClick, cssOverrides: headerStyles }),
                children)));
    }
}
//# sourceMappingURL=MediumModal.js.map