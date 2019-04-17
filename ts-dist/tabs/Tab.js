import React, { Component, createRef } from 'react';
import { findDOMNode } from 'react-dom';
import { Link } from 'react-router';
import { baseFocusStyles, Colors, getColor, flexFlow, FontSizes, typography, } from '@monorail/helpers/exports';
import { isNil } from '@monorail/sharedHelpers/typeGuards';
import styled, { css } from 'styled-components';
const CCTab = styled.div(({ cssOverrides }) => css `
    ${flexFlow('row')};
    ${typography(700, FontSizes.Title5)};

    align-items: center;
    color: ${getColor(Colors.BrandLightBlue)};
    cursor: pointer;
    min-height: 24px;
    padding: 0 8px;
    text-transform: uppercase;
    user-select: none;

    &:hover,
    &:focus {
      text-decoration: none;
    }

    &:hover {
      background: ${getColor(Colors.BrandLightBlue, 0.08)};
    }

    &:active {
      background: ${getColor(Colors.BrandLightBlue, 0.16)};
    }

    ${baseFocusStyles()};

    ${cssOverrides};
  `);
export class Tab extends Component {
    constructor() {
        super(...arguments);
        this.tabRef = createRef();
        this.callSetIndicator = () => {
            const { isActive, setIndicator, as } = this.props;
            if (isActive && !isNil(this.tabRef.current)) {
                if (isNil(as)) {
                    setIndicator(this.tabRef.current.offsetWidth, this.tabRef.current.offsetLeft);
                }
                else if (as === Link) {
                    const tabLinkRef = findDOMNode(this.tabRef.current);
                    setIndicator(tabLinkRef.offsetWidth, tabLinkRef.offsetLeft);
                }
            }
        };
        this.onClick = (event) => {
            const { updateIsActive, onClick, index } = this.props;
            if (!isNil(updateIsActive) && !isNil(index)) {
                updateIsActive(index);
            }
            if (!isNil(onClick)) {
                onClick(event);
            }
        };
    }
    componentDidMount() {
        this.callSetIndicator();
    }
    componentDidUpdate(prevProps) {
        if (prevProps.isActive !== this.props.isActive) {
            this.callSetIndicator();
        }
    }
    render() {
        const { isActive, children, cssOverrides, as, to } = this.props;
        return (React.createElement(CCTab, { onClick: this.onClick, ref: this.tabRef, isActive: isActive, cssOverrides: cssOverrides, as: as, to: to }, children));
    }
}
Tab.defaultProps = {
    isActive: false,
    setIndicator: () => { },
    updateIsActive: () => { },
};
//# sourceMappingURL=Tab.js.map