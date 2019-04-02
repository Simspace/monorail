import React, { Component } from 'react'
import { isNil } from '@monorail/sharedHelpers/typeGuards'
import styled, { css, SimpleInterpolation } from 'styled-components'

import { Icon } from '@monorail/icon/Icon'

import { Step as StepType } from './types'

type StyleOptions = {
  cssOverrides?: SimpleInterpolation
  darkMode?: boolean
}

type Props = {
  steps: StepType[]
  onStepClick: (step: StepType, index: number) => void
}

const HorizontalStepperContainer = styled.div<StyleOptions>(
  ({ cssOverrides }) => css`
    display: flex;
    height: 100%;
    width: 100%;
    justify-content: center;
  `,
)

const Step = styled.div<StyleOptions>`
  align-items: center;
  display: flex;
  justify-content: center;
  position: relative;
  max-width: 180px;
  transition: all ease 0.25s;
  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }

  &.disabled {
    opacity: 0.4;
    pointer-events: none;
  }

  &.active {
    opacity: 1;
    .number {
      background-color: #1465ff;
      border-color: #1465ff;

      .digit {
        color: white;
      }
    }
  }

  &.completed {
    .number {
      background-color: ${props => (props.darkMode ? 'white' : '#f7f7f7')};
      border-color: ${props => (props.darkMode ? 'white' : '#1465ff')};

      svg {
        fill: ${props => (props.darkMode ? 'hsla(234,56%,20%,1)' : '#1465ff')};
      }
    }
  }
`
const Body = styled.div`
  align-items: center;
  display: flex;
  z-index: 1;
  padding: 10px;
  overflow: hidden;
`

const NumberWrapper = styled.div<StyleOptions>(
  ({ darkMode }) => css`
    padding: 10px;
    position: relative;
    background-color: ${darkMode ? 'hsla(234,56%,20%,1)' : 'white'};

    .icon {
      position: absolute;
      left: 5px;
      top: 5px;

      svg {
        fill: #1465ff;
      }
    }
  `,
)

const Number = styled.div<StyleOptions>(
  ({ darkMode }) => css`
    border-style: solid;
    border-width: 2px;
    border-color: ${darkMode ? 'white' : 'rgba(0, 0, 0, 0.54)'};
    align-items: center;
    border-radius: 50%;
    width: 25px;
    height: 25px;
    position: relative;
  `,
)

// Needed to have this because otherwise
// the number would bounce around when
// swapping between checkmark and digit
const Digit = styled.div<StyleOptions>(
  ({ darkMode }) => css`
    color: ${darkMode ? 'white' : 'rgba(0, 0, 0, 0.54)'};
    font-weight: bold;
    position: absolute;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    display: flex;
  `,
)

const Text = styled.div<StyleOptions>(
  ({ darkMode }) => css`
    display: flex;
    flex-direction: column;
    background-color: ${darkMode ? 'hsla(234,56%,20%,1)' : 'white'};
    padding-right: 10px;
  `,
)

const Title = styled.div<StyleOptions>(
  ({ darkMode }) => css`
    color: ${darkMode ? 'white' : 'black'};
    font-size: 13px;
    font-weight: bold;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  `,
)

const Subtitle = styled.div<StyleOptions>(
  ({ darkMode }) => css`
    color: ${darkMode ? 'white' : 'black'};
    font-size: 11px;
    opacity: 0.7;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  `,
)

const Line = styled.div`
  height: 1px;
  width: 50%;
  background-color: #c4c4c4;
  top: 50%;
  position: absolute;
`

const LeftLine = styled(Line)`
  left: 0;
`

const RightLine = styled(Line)`
  right: 0;
`

export class HorizontalStepper extends Component<Props & StyleOptions> {
  getClassname = (step: StepType) => {
    if (step.isActive) {
      return 'active'
    } else if (step.isCompleted) {
      return 'completed'
    } else if (step.isDisabled) {
      return 'disabled'
    } else {
      return ''
    }
  }

  renderSection = (step: StepType, index: number) => (
    <Step
      style={{ width: `${(1 / this.props.steps.length) * 100}%` }}
      key={index}
      className={this.getClassname(step)}
      darkMode={this.props.darkMode}
      onClick={() => this.props.onStepClick(step, index)}
      data-test-id={`horizontal-stepper-step-${index}`}
    >
      <Body>
        <NumberWrapper
          className="number-wrapper"
          darkMode={this.props.darkMode}
        >
          <Number className="number" darkMode={this.props.darkMode}>
            {step.isCompleted && !step.isActive ? (
              <Icon icon="checkmark" />
            ) : (
              <Digit className="digit" darkMode={this.props.darkMode}>
                {index + 1}
              </Digit>
            )}
          </Number>
        </NumberWrapper>
        <Text className="text" darkMode={this.props.darkMode}>
          <Title darkMode={this.props.darkMode}>{step.label}</Title>
          {!isNil(step.subtitle) && (
            <Subtitle darkMode={this.props.darkMode}>{step.subtitle}</Subtitle>
          )}
        </Text>
      </Body>
      {index !== 0 && <LeftLine />}
      {index !== this.props.steps.length - 1 && <RightLine />}
    </Step>
  )

  render() {
    const { cssOverrides, darkMode } = this.props
    return (
      <HorizontalStepperContainer
        cssOverrides={cssOverrides}
        className={darkMode ? 'dark' : 'light'}
      >
        {this.props.steps.map(this.renderSection)}
      </HorizontalStepperContainer>
    )
  }
}
