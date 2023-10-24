import React from 'react'
import { Cancel, CheckCircle, Error } from '@mui/icons-material'

import type { EmphaticFormControlLabelProps } from '@monorail/components'
import {
  Checkbox,
  EmphaticFormControlLabel,
  FormGroup,
  Radio,
  Stack,
} from '@monorail/components'
import { CheckBoxError, CheckBoxWarning } from '@monorail/components/icons'

import { story } from '../helpers/storybook.js'

export default {
  title: 'Inputs/EmphaticFormControlLabel',
  component: EmphaticFormControlLabel,
}

const Template = story<EmphaticFormControlLabelProps>(
  (args: Partial<EmphaticFormControlLabelProps>) => (
    <FormGroup>
      <EmphaticFormControlLabel label="Checkbox" control={Checkbox} {...args} />
      <EmphaticFormControlLabel control={Radio} label="Radio" {...args} />
    </FormGroup>
  ),
  {
    args: {},
    muiName: 'MonorailEmphaticFormControlLabel',
  },
)

/**
 * Emphatic Checkboxes and Emphatic Radiobuttons are used when the choice/selection action is the primary action on that page. Thus, they are more visualy prominent than regular checkboxes and radiobuttons.
 */
export const Default = story(Template)

export const States = story(args => {
  return (
    <Stack direction="row">
      <FormGroup sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <EmphaticFormControlLabel
          label="Checkbox"
          control={Checkbox}
          {...args}
        />
        <EmphaticFormControlLabel
          label="Checkbox"
          control={Checkbox}
          slotProps={{
            control: {
              checkedIcon: <CheckBoxWarning />,
            },
          }}
          state="error"
          checked
          {...args}
        />
        <EmphaticFormControlLabel
          label="Checkbox"
          control={Checkbox}
          slotProps={{
            control: {
              checkedIcon: <CheckBoxError />,
            },
          }}
          state="error"
          checked
          {...args}
        />
        <EmphaticFormControlLabel
          label="Checkbox"
          control={Checkbox}
          state="success"
          checked
          {...args}
        />
      </FormGroup>
      <FormGroup sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <EmphaticFormControlLabel label="Radio" control={Radio} {...args} />
        <EmphaticFormControlLabel
          label="Radio"
          control={Radio}
          slotProps={{
            control: {
              checkedIcon: <Error />,
            },
          }}
          state="error"
          checked
          {...args}
        />
        <EmphaticFormControlLabel
          label="Radio"
          control={Radio}
          slotProps={{
            control: {
              checkedIcon: <Cancel />,
            },
          }}
          state="error"
          checked
          {...args}
        />
        <EmphaticFormControlLabel
          label="Radio"
          control={Radio}
          slotProps={{
            control: {
              checkedIcon: <CheckCircle />,
            },
          }}
          state="success"
          checked
          {...args}
        />
      </FormGroup>
    </Stack>
  )
})
