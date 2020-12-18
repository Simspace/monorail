import React, { useState } from 'react'

import { Colors, flexFlow } from '@monorail/helpers/exports'
import styled, { css } from '@monorail/helpers/styled-components'
import {
  Step,
  Stepper,
  StepProps,
} from '@monorail/visualComponents/stepper/Stepper'

export const exampleSteps = [
  { label: 'Step 1', statusIconName: 'check', statusIconColor: Colors.Success },
  { label: 'Step 2' },
  { label: 'Step 3' },
  { label: 'Step 4' },
]

export const exampleStepsWithSubtitles = [
  {
    label: 'Step 1',
    subtitle: 'Complete',
    statusIconName: 'check',
    statusIconColor: Colors.Success,
  },
  { label: 'Step 2', subtitle: 'Subtitle' },
  { label: 'Step 3', subtitle: 'Subtitle' },
  { label: 'Step 4', subtitle: 'Subtitle' },
]

export const exampleStepsWithDisabled = [
  { label: 'Step 1', statusIconName: 'check', statusIconColor: Colors.Success },
  { label: 'Step 2' },
  { label: 'Step 3', isDisabled: true },
  { label: 'Step 4' },
]

export const exampleStepsWithIcons = [
  {
    label: 'Step 1',
    iconLeft: 'person',
    iconRight: 'people',
  },
  { label: 'Step 2', iconLeft: 'person' },
  { label: 'Step 3', iconLeft: 'person' },
  { label: 'Step 4', iconLeft: 'person' },
]

export const ControlledStepperContainer = styled.div`
  ${flexFlow('row')};

  align-items: center;
  justify-content: space-between;
  width: 400px;
`

export const ControlledStepper = ({
  steps,
  isNumbered,
}: {
  steps: Array<StepProps>
  isNumbered: boolean
}) => {
  const [value, setValue] = useState(0)

  const onStepChange = (idx: number) => {
    setValue(idx)
  }

  return (
    <ControlledStepperContainer>
      <Stepper
        onChange={onStepChange}
        value={value}
        isNumbered={isNumbered}
        css={css`
          width: 248px;
        `}
      >
        {steps.map(s => (
          <Step key={s.label} {...s} />
        ))}
      </Stepper>
    </ControlledStepperContainer>
  )
}
