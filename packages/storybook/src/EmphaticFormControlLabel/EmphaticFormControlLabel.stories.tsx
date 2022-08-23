import React from 'react'
import {
  Checkbox,
  EmphaticFormControlLabel,
  EmphaticFormControlLabelProps,
  FormGroup,
  Radio,
  Stack,
} from '@monorail/components'
import { CheckBoxError, CheckBoxWarning } from '@monorail/components/icons'
import { Cancel, CheckCircle, Error } from '@mui/icons-material'

import { story } from '../helpers/storybook.js'

/**
 * Metadata for FormControlLabel stories - update/extend as needed
 */
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
    parameters: {
      docs: {
        description: {
          component:
            'Emphatic Checkboxes and Emphatic Radiobuttons are used when the choice/selection action is the primary action on that page. Thus, they are more visualy prominent than regular checkboxes and radiobuttons.',
        },
      },
    },
    muiName: 'MonorailEmphaticFormControlLabel',
  },
)

export const Default = story(Template)

export const States = story(() => {
  return (
    <Stack direction="row">
      <FormGroup sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <EmphaticFormControlLabel label="Checkbox" control={Checkbox} />
        <EmphaticFormControlLabel
          label="Checkbox"
          control={Checkbox}
          componentsProps={{
            control: {
              checkedIcon: <CheckBoxWarning />,
            },
          }}
          state="error"
          checked
        />
        <EmphaticFormControlLabel
          label="Checkbox"
          control={Checkbox}
          componentsProps={{
            control: {
              checkedIcon: <CheckBoxError />,
            },
          }}
          state="error"
          checked
        />
        <EmphaticFormControlLabel
          label="Checkbox"
          control={Checkbox}
          state="success"
          checked
        />
      </FormGroup>
      <FormGroup sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <EmphaticFormControlLabel label="Radio" control={Radio} />
        <EmphaticFormControlLabel
          label="Radio"
          control={Radio}
          componentsProps={{
            control: {
              checkedIcon: <Error />,
            },
          }}
          state="error"
          checked
        />
        <EmphaticFormControlLabel
          label="Radio"
          control={Radio}
          componentsProps={{
            control: {
              checkedIcon: <Cancel />,
            },
          }}
          state="error"
          checked
        />
        <EmphaticFormControlLabel
          label="Radio"
          control={Radio}
          componentsProps={{
            control: {
              checkedIcon: <CheckCircle />,
            },
          }}
          state="success"
          checked
        />
      </FormGroup>
    </Stack>
  )
})
