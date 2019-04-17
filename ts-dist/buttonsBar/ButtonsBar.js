import React, { Component, createRef } from 'react';
import { isNil, isTrue } from '@monorail/sharedHelpers/typeGuards';
import styled, { css } from 'styled-components';
import { Colors, getColor, flexFlow, borderRadius, visible, floatingOutlineStyles, } from '@monorail/helpers/exports';
import { StyledButton, buttonPressedDisplayCss, } from '@monorail/buttons/Button';
import { ButtonDisplay, ButtonSize, IconButtonShape, ButtonsBarMode, ButtonMode, } from '@monorail/buttons/buttonTypes';
import { Icon } from '@monorail/icon/Icon';
const ButtonsBarIndicator = styled.div(({ display, left, active, width, duration }) => css `
    ${buttonPressedDisplayCss[display]};

    ${visible(active)}

    left: ${left}px;
    width: ${width}px;
    transition-duration: ${duration}ms;

    bottom: 0;
    height: 100%;
    position: absolute;
    transition-property: all;
    transition-timing-function: ease-in-out;
  `);
/**
 * Buttons Bar - Group
 */
const StyledButtonsGroup = styled.div(({ mode }) => css `
    ${flexFlow('row')};

    ${mode === ButtonsBarMode.Default &&
    floatingOutlineStyles(getColor(Colors.Black, 0.16))};

    border-radius: inherit;
  `);
const buttonBarButtonStyle = (multiple = false) => css `
  border-radius: inherit;

  &:before {
    border-width: 0;
  }

  ${!multiple &&
    css `
      background: transparent;
    `};
`;
const StyledButtonWrapper = styled.div(({ mode, multiple }) => css `
    position: relative;

    ${mode === ButtonsBarMode.Toolbar
    ? css `
          ${StyledButton} {
            margin: 2px;
          }
        `
    : css `
          border-radius: inherit;

          &:not(:first-child) {
            ${floatingOutlineStyles(getColor(Colors.Black, 0.16))};

            border-left: 1px solid ${getColor(Colors.White)};
            border-top-left-radius: 0;
            border-bottom-left-radius: 0;

            &:before {
              border-width: 0 0 0 1px;
              left: -1px;
            }
          }

          &:not(:last-child) {
            border-top-right-radius: 0;
            border-bottom-right-radius: 0;
          }

          ${StyledButton} {
            ${buttonBarButtonStyle(multiple)};
          }
        `};

    ${Icon} {
      color: inherit;
    }
  `);
const StyledButtonsBar = styled.div(({ cssOverrides }) => css `
    ${borderRadius()};

    display: inline-block;
    overflow: hidden;
    position: relative;
    vertical-align: middle;

    ${cssOverrides};
  `);
/**
 * ToolbarsContainer
 * Use this container for displaying multiple Toolbars in a single row
 */
export const ToolbarsContainer = styled.div `
  vertical-align: middle;

  ${StyledButtonsBar} {
    border-radius: 0;

    &:not(:first-child) {
      border-left: 1px solid ${getColor(Colors.Black, 0.16)};
      margin-left: 4px;
      padding-left: 4px;
    }
  }
`;
/**
 * Buttons Bar
 */
export class ButtonsBar extends Component {
    constructor() {
        super(...arguments);
        this.state = {
            indicatorLeft: 0,
            indicatorTransitionDuration: 0,
            indicatorWidth: 0,
            buttonsStatus: [],
            buttonsRef: [],
            lastActiveIndex: -1,
        };
        this.getIndicatorParams = () => {
            const { mode, multiple } = this.props;
            const { buttonsRef, lastActiveIndex } = this.state;
            if (!multiple && mode === ButtonsBarMode.Default && lastActiveIndex >= 0) {
                const element = buttonsRef[lastActiveIndex].current;
                if (!isNil(element)) {
                    const offset = lastActiveIndex > 0 ? 1 : 0;
                    return {
                        indicatorWidth: element.getBoundingClientRect().width - offset,
                        indicatorLeft: element.offsetLeft + offset,
                    };
                }
            }
            return {
                indicatorLeft: 0,
                indicatorWidth: 0,
            };
        };
        this.updateActive = (index = -1) => {
            const { onChange, multiple, required } = this.props;
            const { lastActiveIndex } = this.state;
            const buttons = [...this.state.buttonsStatus];
            let activeIndex = index;
            if (multiple) {
                if (!required ||
                    !buttons[index] ||
                    buttons.filter(item => item).length > 1) {
                    buttons[index] = !buttons[index];
                }
            }
            else {
                if (lastActiveIndex !== index) {
                    buttons[index] = !buttons[index];
                    if (lastActiveIndex >= 0) {
                        buttons[lastActiveIndex] = false;
                    }
                }
                else if (!required) {
                    buttons[index] = !buttons[index];
                }
                if (!buttons[index]) {
                    activeIndex = -1;
                }
            }
            this.setState(() => ({
                buttonsStatus: buttons,
                indicatorTransitionDuration: activeIndex < 0 || lastActiveIndex < 0 ? 0 : 150,
                lastActiveIndex: activeIndex,
            }));
            onChange(index, buttons);
        };
    }
    componentDidMount() {
        const { mode, multiple, required } = this.props;
        const buttonsStatus = [];
        const buttonsRef = [];
        let someActive = false;
        React.Children.map(this.props.children, (child) => {
            if (!isNil(child) && React.isValidElement(child)) {
                const pressed = isTrue(child.props.pressed);
                buttonsStatus.push(pressed);
                if (mode === ButtonsBarMode.Default) {
                    buttonsRef.push(createRef());
                }
                if (pressed) {
                    someActive = true;
                }
            }
        });
        if (required && !someActive && buttonsStatus.length > 0) {
            buttonsStatus[0] = true;
        }
        if (!multiple) {
            /**
             * Reduce selected buttons for multiple default selections
             */
            let activeIndex = -1;
            buttonsStatus.map((status, index) => {
                if (status) {
                    if (activeIndex >= 0) {
                        buttonsStatus[activeIndex] = false;
                    }
                    activeIndex = index;
                }
            });
            this.setState(() => ({
                buttonsStatus,
                buttonsRef,
                lastActiveIndex: activeIndex,
            }));
        }
        else {
            this.setState(() => ({
                buttonsStatus,
            }));
        }
    }
    renderBar() {
        const { children, size, mode, multiple, display } = this.props;
        const { buttonsStatus, buttonsRef } = this.state;
        return React.Children.map(children, (child, index) => {
            if (React.isValidElement(child)) {
                const buttonDisplay = mode === ButtonsBarMode.Toolbar ? ButtonDisplay.Toolbar : display;
                const childProps = {
                    ...child.props,
                    onClick: (event) => {
                        this.updateActive(index);
                        child.props.onClick(event);
                    },
                    display: buttonDisplay,
                    size: size || ButtonSize.Large,
                    mode: ButtonMode.Push,
                    pressed: buttonsStatus[index],
                    shape: IconButtonShape.Square,
                };
                return (React.createElement(StyledButtonWrapper, { ref: buttonsRef[index], mode: mode, pressed: buttonsStatus[index], multiple: multiple }, React.cloneElement(child, childProps)));
            }
            else {
                return false;
            }
        });
    }
    /**
     * Set indicator params positioning after the ButtonsBar have been rendered
     */
    componentDidUpdate() {
        const { indicatorLeft, indicatorWidth } = this.state;
        const indicatorParams = this.getIndicatorParams();
        if (indicatorParams.indicatorLeft !== indicatorLeft ||
            indicatorParams.indicatorWidth !== indicatorWidth) {
            this.setState(() => indicatorParams);
        }
    }
    render() {
        const { multiple, mode, display, className, cssOverrides } = this.props;
        const { indicatorTransitionDuration, indicatorLeft, indicatorWidth, lastActiveIndex, } = this.state;
        return (React.createElement(StyledButtonsBar, { className: className, cssOverrides: cssOverrides },
            !multiple &&
                mode === ButtonsBarMode.Default && (React.createElement(ButtonsBarIndicator, { display: display, width: indicatorWidth, active: lastActiveIndex >= 0, left: indicatorLeft, duration: indicatorTransitionDuration })),
            React.createElement(StyledButtonsGroup, { mode: mode }, this.renderBar())));
    }
}
ButtonsBar.defaultProps = {
    display: ButtonDisplay.ButtonBar,
    size: ButtonSize.Large,
    multiple: false,
    required: false,
    mode: ButtonsBarMode.Default,
    css: ``,
    onChange: () => { },
};
//# sourceMappingURL=ButtonsBar.js.map