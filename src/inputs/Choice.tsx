import React, { Component, ReactNode } from 'react'
import styled, { css, SimpleInterpolation } from 'styled-components'

import {
  baseChromelessStyles,
  baseDisabledStyles,
  borderRadius,
  buttonTransition,
  Colors,
  flexFlow,
  FontSizes,
  getColor,
  typography,
  visible,
} from '@monorail/helpers/exports'
import { Icon } from '@monorail/icon/Icon'

/*
 * Styles
 */

const BBChoiceInput = styled.input<BBChoiceInputProps>`
  opacity: 0; /* Hiding the input. */
  position: absolute; /* position: absolute; so that the Icons can be position: absolute; and so that the input doesn't effect the layout. */
  z-index: -1;
`

const BBChoiceFakeLabel = styled.div<AnsweredProps>(
  ({ answered, disabled }) => css`
    ${answered &&
      css`
        transform: translateX(24px);
      `};

    ${disabled && baseDisabledStyles};

    ${typography(500, FontSizes.Title5)};
    flex-grow: 1;
    word-break: break-word;

    transition: all ease 150ms;
  `,
)

const CCChoice = styled.label<CCChoiceProps>(
  ({ disabled, readOnly, incorrect, correct, cssOverrides, answered }) => css`
    ${(readOnly || incorrect || correct) &&
      css`
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
  `,
)

/*
 * Types
 */

type AnsweredProps = {
  answered?: boolean
  htmlFor?: string
  disabled?: boolean
}

type BBGradeIconProps = {
  correct?: boolean
  incorrect?: boolean
}

type BBChoiceInputProps = AnsweredProps & {
  checked?: boolean
  defaultChecked?: boolean
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
}

type CCChoiceProps = AnsweredProps &
  BBGradeIconProps & {
    cssOverrides?: SimpleInterpolation
    disabled?: boolean
    readOnly?: boolean
    value?: string | number | Array<string>
    required?: boolean
    name?: string
  }

export type ChoiceProps = BBGradeIconProps &
  CCChoiceProps &
  BBChoiceInputProps & {
    key?: string | number
    type: 'radio' | 'checkbox'
    children?: ReactNode
  }

/*
 * Component
 */

export class Choice extends Component<ChoiceProps> {
  renderFakeInputIcons = () => {
    const { type } = this.props

    switch (type) {
      default:
      case 'radio':
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
          />,
        ]
      case 'checkbox':
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
          />,
        ]
    }
  }

  render() {
    const {
      answered,
      checked,
      correct,
      cssOverrides,
      disabled,
      incorrect,
      onChange,
      children,
      readOnly,
      type,
      value,
      required,
      name,
    } = this.props

    return (
      <CCChoice
        correct={correct}
        cssOverrides={cssOverrides}
        incorrect={incorrect}
        disabled={disabled}
        readOnly={readOnly}
        answered={answered}
      >
        <Icon icon="cancel" className="IncorrectIcon" />
        <Icon icon="check_circle" className="CorrectIcon" />
        <BBChoiceInput
          disabled={disabled}
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
        <BBChoiceFakeLabel answered={answered} disabled={disabled}>
          {children}
        </BBChoiceFakeLabel>
      </CCChoice>
    )
  }
}
