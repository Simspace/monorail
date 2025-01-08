// Edit this file to add new stories
import React from 'react'

import type { NativeSelectProps } from '@monorail/components'
import { Box, FormControl, InputLabel, NativeSelect } from '@monorail/components'

import { story } from '../helpers/storybook.js'

export default { title: 'Inputs/NativeSelect', component: NativeSelect }

const Template = story<NativeSelectProps>(
  (args) => {
    return (
      <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
          <InputLabel variant='standard' htmlFor='uncontrolled-native'>
            Age
          </InputLabel>
          <NativeSelect
            defaultValue={30}
            inputProps={{
              name: 'age',
              id: 'uncontrolled-native',
            }}
            {...args}
          >
            <option value={10}>Ten</option>
            <option value={20}>Twenty</option>
            <option value={30}>Thirty</option>
          </NativeSelect>
        </FormControl>
      </Box>
    )
  },
  {
    args: {},
    muiName: 'MuiNativeSelect',
  },
)

export const Default = story(Template)

/**
 * As the user experience can be improved on mobile using the native select of the platform, we allow such pattern. [Docs](https://next.material-ui.com/components/selects/#native-select)
 */
export const BasicNativeSelect = story(Template)
