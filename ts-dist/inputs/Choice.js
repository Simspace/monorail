import React, { Component } from 'react';
import { Icon } from '@monorail/icon/Icon';
import { baseChromelessStyles, baseDisabledStyles, borderRadius, buttonTransition, Colors, getColor, flexFlow, FontSizes, typography, visible, } from '@monorail/helpers/exports';
import styled, { css } from 'styled-components';
/*
* Styles
*/
const BBChoiceInput = styled.input `
  opacity: 0; /* Hiding the input. */
  position: absolute; /* position: absolute; so that the Icons can be position: absolute; and so that the input doesn't effect the layout. */
  z-index: -1;
`;
const BBChoiceFakeLabel = styled.div(({ answered, disabled }) => css `
    ${answered &&
    css `
        transform: translateX(24px);
      `};

    ${disabled && baseDisabledStyles};

    ${typography(500, FontSizes.Title5)};
    flex-grow: 1;
    word-break: break-word;

    transition: all ease 150ms;
  `);
const CCChoice = styled.label(({ disabled, readOnly, incorrect, correct, cssOverrides, answered }) => css `
    ${(readOnly || incorrect || correct) &&
    css `
        cursor: default;
        pointer-events: none;
      `};

    ${baseChromelessStyles()};
    ${flexFlow('row')};
    ${borderRadius()};

    align-items: center;
    box-sizing: border-box;
    cursor: pointer;
    display: flex;
    flex-direction: row;
    min-height: 24px;
    padding: 4px 4px 4px 32px;
    position: relative; /* position: relative; so that the input can be position: absolute; */
    user-select: none;
    width: 100%;

    ${buttonTransition};

    .ChoiceButtonChecked {
      color: ${getColor(Colors.BrandLightBlue)};

      transform: translateX(${answered ? 24 : 0}px);
    }

    .ChoiceButtonUnchecked {
      color: ${getColor(Colors.Black54)};

      transform: translateX(${answered ? 24 : 0}px);
    }

    .RealInput:checked ~ .ChoiceButtonChecked {
      ${disabled && baseDisabledStyles};
    }

    .RealInput:checked ~ .ChoiceButtonUnchecked {
      ${visible(false)};
    }

    .RealInput:not(:checked) ~ .ChoiceButtonChecked {
      ${visible(false)};
    }

    .RealInput:not(:checked) ~ .ChoiceButtonUnchecked {
      ${disabled && baseDisabledStyles};
    }

    .IncorrectIcon {
      color: ${getColor(Colors.Red)};
      ${visible(incorrect)};
    }

    .CorrectIcon {
      color: ${getColor(Colors.Green)};
      ${visible(correct)};
    }

    ${Icon} {
      left: 8px;
      position: absolute;
      font-size: 16px;
      transition: all ease 150ms;
    }

    ${cssOverrides};
  `);
/*
* Component
*/
export class Choice extends Component {
    constructor() {
        super(...arguments);
        this.renderFakeInputIcons = () => {
            const { type } = this.props;
            switch (type) {
                default:
                case 'radio':
                    return [
                        React.createElement(Icon, { key: "radioNotChecked", className: "ChoiceButtonUnchecked", icon: "radio_button_unchecked" }),
                        React.createElement(Icon, { key: "radioChecked", className: "ChoiceButtonChecked", icon: "radio_button_checked" }),
                    ];
                case 'checkbox':
                    return [
                        React.createElement(Icon, { key: "radioNotChecked", className: "ChoiceButtonUnchecked", icon: "check_box_outline_blank" }),
                        React.createElement(Icon, { key: "radioChecked", className: "ChoiceButtonChecked", icon: "check_box" }),
                    ];
            }
        };
    }
    render() {
        const { answered, checked, correct, cssOverrides, disabled, incorrect, onChange, children, readOnly, type, value, required, name, } = this.props;
        return (React.createElement(CCChoice, { correct: correct, cssOverrides: cssOverrides, incorrect: incorrect, disabled: disabled, readOnly: readOnly, answered: answered },
            React.createElement(Icon, { icon: "cancel", className: "IncorrectIcon" }),
            React.createElement(Icon, { icon: "check_circle", className: "CorrectIcon" }),
            React.createElement(BBChoiceInput, { disabled: disabled, onChange: onChange, className: "RealInput", checked: checked, type: type, readOnly: readOnly, value: value, required: required, name: name }),
            this.renderFakeInputIcons(),
            React.createElement(BBChoiceFakeLabel, { answered: answered, disabled: disabled }, children)));
    }
}
//# sourceMappingURL=Choice.js.map