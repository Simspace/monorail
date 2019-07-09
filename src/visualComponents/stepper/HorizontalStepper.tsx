import React, { Component, createRef } from 'react'

import { baseChromelessStyles } from '@monorail/helpers/baseStyles'
import {
  borderRadius,
  BorderRadius,
  Colors,
  flexFlow,
  FontSizes,
  getColor,
  typography,
} from '@monorail/helpers/exports'
import styled, { css } from '@monorail/helpers/styled-components'
import { getThemeColor, ThemeColors } from '@monorail/helpers/theme'
import { isNil } from '@monorail/sharedHelpers/typeGuards'
import { CommonComponentType, CssOverridesType } from '@monorail/types'
import { Icon } from '@monorail/visualComponents/icon/Icon'

import { Step as StepType } from './types'

/*
 * Styles
 */

const getStateStyles = (
  step: StepType,
  styles: {
    isActive: CssOverridesType
    isCompleted: CssOverridesType
    isDisabled: CssOverridesType
  },
) => {
  if (step.isActive) {
    return styles.isActive
  } else if (step.isCompleted) {
    return styles.isCompleted
  }
  return styles.isDisabled
}

const stepStateStyles = {
  isActive: css``,
  isDisabled: css`
    pointer-events: none;
  `,
  isCompleted: css``,
}

const bodyStateStyles = {
  isActive: css``,
  isDisabled: css`
    opacity: 0.4;
  `,
  isCompleted: css``,
}

const numberStateStyles = {
  isActive: css`
    background-color: ${getThemeColor(ThemeColors.ActionPrimary)};
    border-color: ${getThemeColor(ThemeColors.ActionPrimary)};
    color: ${getColor(Colors.White)};
  `,
  isDisabled: css`
    background-color: transparent;
    border-color: ${getThemeColor(ThemeColors.Text200)};
    color: ${getThemeColor(ThemeColors.Text200)};
  `,
  isCompleted: css`
    background-color: ${getColor(Colors.White)};
    border-color: ${getThemeColor(ThemeColors.ActionPrimary)};
  `,
}

const HorizontalStepperContainer = styled.div`
  ${flexFlow('row')};

  flex-shrink: 0;
  height: 100%;
  justify-content: flex-start;
  overflow-y: auto;
  width: 100%;
`

const HorizontalStepperWrapper = styled.div`
  ${flexFlow('row')};

  flex-shrink: 0;
  height: 100%;
  justify-content: flex-start;
  max-width: 100%;
  overflow-y: auto;
`

const Step = styled.div<StepPropType>(
  ({ step }) => css`
    ${flexFlow('row')};
    ${getStateStyles(step, stepStateStyles)};

    align-items: center;
    cursor: pointer;
    justify-content: center;
    position: relative;
    transition: all ease 0.25s;
    user-select: none;
  `,
)

const Body = styled.div<StepPropType>(
  ({ step }) => css`
    ${baseChromelessStyles()};
    ${flexFlow('row')};
    ${getStateStyles(step, bodyStateStyles)};

    align-items: center;
    height: 100%;
    padding: 8px;
  `,
)

const StyledIcon = styled(Icon)`
  color: ${getThemeColor(ThemeColors.ActionSecondary)};
  flex-shrink: 0;
  margin: auto 8px;
`

const Number = styled.div<StepPropType>(
  ({ step }) => css`
    ${borderRadius(BorderRadius.Round)};
    ${flexFlow('row')};
    ${getStateStyles(step, numberStateStyles)};
    ${typography(700, FontSizes.Title4)};

    align-items: center;
    border-style: solid;
    border-width: 2px;
    flex-shrink: 0;
    height: 20px;
    justify-content: center;
    margin: auto 8px;
    width: 20px;
  `,
)

const TextContainer = styled.div`
  ${flexFlow('column')};

  margin-right: 8px;
`

const Title = styled.div`
  ${typography(700, FontSizes.Title4)};

  color: ${getThemeColor(ThemeColors.Text700)};
`

const Subtitle = styled.div`
  ${typography(300, FontSizes.Title5)};

  color: ${getThemeColor(ThemeColors.Text700)};
`

const Line = styled.div`
  background-color: ${getThemeColor(ThemeColors.Text200)};
  height: 1px;
  margin: auto 8px;
  width: 32px;
`

/*
 * Types
 */

type StepPropType = {
  step: StepType
}

type Props = CommonComponentType & {
  onStepClick: (step: StepType, index: number) => void
  steps: Array<StepType>
}

type State = {
  activeStepIndex: number
}

/*
 * Components
 */

export class HorizontalStepper extends Component<Props, State> {
  state: State = {
    activeStepIndex: 0,
  }

  activeStepRef = createRef<HTMLDivElement>()

  scrollStepIntoView = () => {
    const activeStep = this.activeStepRef.current

    if (!isNil(activeStep)) {
      activeStep.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
        inline: 'center',
      })
    }
  }

  componentDidUpdate(prevProps: Props, prevState: State) {
    if (prevState.activeStepIndex !== this.state.activeStepIndex) {
      this.scrollStepIntoView()
    }
  }

  renderSection = (step: StepType, index: number) => {
    const { onStepClick, steps } = this.props
    const { activeStepIndex } = this.state

    if (step.isActive && activeStepIndex !== index) {
      this.setState({ activeStepIndex: index })
    }

    return (
      <Step
        key={index}
        step={step}
        onClick={() => onStepClick(step, index)}
        data-test-id={`horizontal-stepper-step-${index}`}
        ref={step.isActive ? this.activeStepRef : null}
      >
        <Body step={step}>
          {step.isCompleted && !step.isActive ? (
            <StyledIcon icon="check_circle_outline" size={28} />
          ) : (
            <Number step={step}>{index + 1}</Number>
          )}
          <TextContainer>
            <Title>{step.label}</Title>
            {!isNil(step.subtitle) && <Subtitle>{step.subtitle}</Subtitle>}
          </TextContainer>
        </Body>
        {index !== steps.length - 1 && <Line />}
      </Step>
    )
  }

  render() {
    const { steps, onStepClick, ...domProps } = this.props

    return (
      <HorizontalStepperContainer {...domProps}>
        <HorizontalStepperWrapper>
          {steps.map(this.renderSection)}
        </HorizontalStepperWrapper>
      </HorizontalStepperContainer>
    )
  }
}
