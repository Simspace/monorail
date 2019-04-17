import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import { baseChromelessStyles, baseDisabledStyles, baseFocusStyles, baseOutlineStyles, basePrimaryStyles, baseSecondaryStyles, borderRadius, buttonTransition, getColor, Colors, flexFlow, FontSizes, typography, baseToolBarStyles, baseButtonBarStyles, floatingOutlineStyles, } from '@monorail/helpers/exports';
import { ButtonDisplay, ButtonSize, ButtonMode, } from '@monorail/buttons/buttonTypes';
import { Icon } from '@monorail/icon/Icon';
export const buttonDisplayCss = {
    [ButtonDisplay.Primary]: basePrimaryStyles(),
    [ButtonDisplay.Secondary]: baseSecondaryStyles(),
    [ButtonDisplay.Outline]: baseOutlineStyles(),
    [ButtonDisplay.Chromeless]: css `
    ${baseChromelessStyles()};

    color: ${getColor(Colors.BrandLightBlue)};
    line-height: 25px;
  `,
    [ButtonDisplay.ButtonBar]: css `
    ${floatingOutlineStyles()};
    ${baseButtonBarStyles()};
  `,
    [ButtonDisplay.Toolbar]: css `
    ${baseButtonBarStyles()};
  `,
};
export const buttonPressedDisplayCss = {
    [ButtonDisplay.Primary]: basePrimaryStyles(Colors.BrandDarkBlue),
    [ButtonDisplay.Secondary]: basePrimaryStyles(),
    [ButtonDisplay.Outline]: basePrimaryStyles(),
    [ButtonDisplay.Chromeless]: basePrimaryStyles(),
    [ButtonDisplay.ButtonBar]: css `
    ${basePrimaryStyles()};

    color: ${getColor(Colors.White)};

    &:active {
      color: ${getColor(Colors.White)};
    }

    &:hover {
      color: ${getColor(Colors.White)};
    }
  `,
    [ButtonDisplay.Toolbar]: baseToolBarStyles(),
};
export const buttonSizeCss = {
    [ButtonSize.Dense]: css `
    height: 16px;
    padding: 0 7px;
  `,
    [ButtonSize.Compact]: css `
    height: 24px;
    padding: 0 7px;
  `,
    [ButtonSize.Default]: css `
    height: 24px;
    padding: 0 11px;
  `,
    [ButtonSize.Large]: css `
    height: 32px;
    padding: 0 15px;
  `,
};
export const StyledButton = styled.button(({ disabled, size, display, mode, pressed, cssOverrides }) => css `
    ${mode === ButtonMode.Push && pressed
    ? buttonPressedDisplayCss[display]
    : buttonDisplayCss[display]};
    ${buttonSizeCss[size]};
    ${disabled && baseDisabledStyles};

    ${typography(700, FontSizes.Title5)};
    ${borderRadius()};
    ${flexFlow('row')};

    cursor: pointer;
    flex-shrink: 0;
    outline: none;
    text-transform: uppercase;
    user-select: none;
    box-sizing: border-box;
    align-items: center;
    justify-content: center;
    margin: 0;
    overflow: hidden;

    ${buttonTransition};

    ${Icon} {
      color: currentColor;
      margin: auto 4px auto - 4px;
    }

    ${baseFocusStyles()};

    ${cssOverrides};
  `);
export const buttonDefaultProps = {
    display: ButtonDisplay.Primary,
    size: ButtonSize.Default,
    type: 'button',
    onClick: () => { },
    disabled: false,
    pressed: false,
    mode: ButtonMode.Default,
};
export class Button extends Component {
    constructor() {
        super(...arguments);
        this.state = {
            initial: false,
            previous: false,
            pressed: false,
        };
        /**
         * Click event handler for Push buttons
         */
        this.onClickHandler = (event) => {
            const { onClick } = this.props;
            const { pressed } = this.state;
            this.setState(() => ({ pressed: !pressed }));
            onClick(event);
        };
    }
    /**
     * Keep initial pressed state to compare when new props arrive
     */
    componentDidMount() {
        const { mode, pressed } = this.props;
        if (mode === ButtonMode.Push) {
            this.setState(() => ({ pressed, initial: pressed, previous: pressed }));
        }
    }
    static getDerivedStateFromProps(nextProps, prevState) {
        return {
            ...prevState,
            previous: nextProps.pressed,
            pressed: nextProps.mode === ButtonMode.Push &&
                // Use prev button pressed state if prop has not changed
                nextProps.pressed === prevState.initial &&
                nextProps.pressed === prevState.previous
                ? prevState.pressed
                : nextProps.pressed,
        };
    }
    render() {
        const { children, className, mode, onClick, ...otherProps } = this.props;
        const { pressed } = this.state;
        return (React.createElement(StyledButton, Object.assign({}, otherProps, { className: `new-button ${className}`, mode: mode, onClick: mode === ButtonMode.Push ? this.onClickHandler : onClick, pressed: pressed }), children));
    }
}
Button.defaultProps = buttonDefaultProps;
//# sourceMappingURL=Button.js.map