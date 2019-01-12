import React, { Component, ReactNode } from "react";
import { Icon } from "icon/Icon";
import {
  baseChromelessStyles,
  baseDisabledStyles,
  borderRadius,
  buttonTransiton,
  Colors,
  colors,
  flexFlow,
  FontSizes,
  typography,
  visible
} from "CommonStyles";
import styled, { css, SimpleInterpolation } from "styled-components";

/*
 * Styles
 */

const BBChoiceInput = styled<BBChoiceInputProps, "input">("input")`
  opacity: 0; /* Hiding the input. */
  position: absolute; /* position: absolute; so that the Icons can be position: absolute; and so that the input doesn't effect the layout. */
  z-index: -1;
`;

const BBChoiceFakeLabel = styled<AnsweredProps, "span">("span")`
  ${({ answered }) =>
    answered &&
    css`
      transform: translateX(24px);
    `};

  ${typography(500, FontSizes.Title5)};

  word-break: break-word;

  transition: all ease 150ms;
`;

const CCChoice = styled<CCChoiceProps, "label">("label")`
  ${({ disabled }) => disabled && baseDisabledStyles};

  ${({ readOnly, incorrect, correct }) =>
    (readOnly || incorrect || correct) &&
    css`
      cursor: default;
      pointer-events: none;
    `};

  ${baseChromelessStyles()};
  ${flexFlow("row")};
  ${borderRadius()};

  align-items: center;
  box-sizing: border-box;
  cursor: pointer;
  min-height: 24px;
  padding: 4px 16px 4px 32px;
  position: relative; /* position: relative; so that the input can be position: absolute; */
  user-select: none;

  ${buttonTransiton};

  .ChoiceButtonChecked {
    color: ${colors(Colors.BrandLightBlue)};

    transform: translateX(${({ answered }) => (answered ? 24 : 0)}px);
  }

  .ChoiceButtonUnchecked {
    color: ${colors(Colors.Black54)};

    transform: translateX(${({ answered }) => (answered ? 24 : 0)}px);
  }

  .RealInput:checked ~ .ChoiceButtonChecked {
    ${visible(true)};
  }

  .RealInput:checked ~ .ChoiceButtonUnchecked {
    ${visible(false)};
  }

  .RealInput:not(:checked) ~ .ChoiceButtonChecked {
    ${visible(false)};
  }

  .RealInput:not(:checked) ~ .ChoiceButtonUnchecked {
    ${visible(true)};
  }

  .IncorrectIcon {
    color: ${colors(Colors.Red)};
    ${({ incorrect }) => visible(incorrect)};
  }

  .CorrectIcon {
    color: ${colors(Colors.Green)};
    ${({ correct }) => visible(correct)};
  }

  ${Icon} {
    left: 8px;
    position: absolute;
    /* top: 4px; */
    font-size: 16px;
    transition: all ease 150ms;
  }

  ${({ css: cssOverrides }) => cssOverrides};
`;

/*
 * Types
 */

type AnsweredProps = {
  answered?: boolean;
  htmlFor?: string;
};

type BBGradeIconProps = {
  correct?: boolean;
  incorrect?: boolean;
};

type BBChoiceInputProps = AnsweredProps & {
  checked?: boolean;
  onChange?: (event?: React.ChangeEvent<HTMLInputElement>) => void;
};

type CCChoiceProps = AnsweredProps &
  BBGradeIconProps & {
    css?: SimpleInterpolation;
    disabled?: boolean;
    readOnly?: boolean;
    value?: string | number | string[];
    required?: boolean;
    name?: string;
  };

export type ChoiceProps = BBGradeIconProps &
  CCChoiceProps &
  BBChoiceInputProps & {
    key?: any;
    type: "radio" | "checkbox";
    children?: ReactNode;
  };

/*
 * Component
 */

export class Choice extends Component<ChoiceProps> {
  renderFakeInputIcons = () => {
    const { type } = this.props;

    switch (type) {
      default:
      case "radio":
        return [
          <Icon
            key="radioNotChecked"
            className="ChoiceButtonUnchecked"
            icon="radio_button_unchecked"
          />,
          <Icon
            key="radioChecked"
            className="ChoiceButtonChecked"
            icon="radio_button_checked"
          />
        ];
      case "checkbox":
        return [
          <Icon
            key="radioNotChecked"
            className="ChoiceButtonUnchecked"
            icon="check_box_outline_blank"
          />,
          <Icon
            key="radioChecked"
            className="ChoiceButtonChecked"
            icon="check_box"
          />
        ];
    }
  };

  render() {
    const {
      answered,
      checked,
      correct,
      css: cssOverrides,
      disabled,
      incorrect,
      onChange,
      children,
      readOnly,
      type,
      value,
      required,
      name
    } = this.props;

    return (
      <CCChoice
        correct={correct}
        css={cssOverrides}
        disabled={disabled}
        incorrect={incorrect}
        readOnly={readOnly}
        answered={answered}
      >
        <Icon icon="highlight_off" className="IncorrectIcon" />
        <Icon icon="check_circle" className="CorrectIcon" />
        <BBChoiceInput
          onChange={onChange}
          className="RealInput"
          checked={checked}
          type={type}
          readOnly={readOnly}
          value={value}
          required={required}
          name={name}
        />
        {this.renderFakeInputIcons()}
        <BBChoiceFakeLabel answered={answered}>{children}</BBChoiceFakeLabel>
      </CCChoice>
    );
  }
}
