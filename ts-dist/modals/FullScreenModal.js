import React, { Component } from 'react';
import { css } from 'styled-components';
import { BBModalBackground, BBModalHeader } from '@monorail/modals/Modals';
import { Overlay } from '@monorail/toggle/Overlay';
import { isNil } from '@monorail/sharedHelpers/typeGuards';
export class FullScreenModal extends Component {
    render() {
        const { children, customCloseButton, escToClose, headerChildren, iconLeft, isOpen, noHeader, onClick, title, togglePopOver, } = this.props;
        return (React.createElement(Overlay, { escToClose: escToClose, isOpen: isOpen, onClick: onClick, togglePopOver: togglePopOver },
            React.createElement(BBModalBackground, { cssOverrides: css `
            height: 100%;
            width: 100%;
            margin: 0;
            border-radius: 0;
          ` },
                isNil(noHeader) && (React.createElement(BBModalHeader, { customCloseButton: customCloseButton, headerRowChildren: headerChildren, iconLeft: iconLeft, onClose: onClick, title: title })),
                children)));
    }
}
//# sourceMappingURL=FullScreenModal.js.map