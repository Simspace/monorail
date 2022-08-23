// Edit this file to add new stories
import React from 'react'
import {
  Box,
  FormControl,
  InputLabel,
  NativeSelect,
  NativeSelectProps,
} from '@monorail/components'

import { story } from '../helpers/storybook.js'
/**
 * Metadata for NativeSelect stories - update/extend as needed
 */
export default { title: 'Inputs/NativeSelect', component: NativeSelect }
/**
 * Story template (edit/remove by hand if needed)
 *
 * Note: there should be at least one "Default" story that uses this template with the "story" function.
 * The Template and "story" function allow the story to be setup so that it works with the Controls addon and docgen
 */

const Template = story<NativeSelectProps>(
  args => {
    return (
      <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
          <InputLabel variant="standard" htmlFor="uncontrolled-native">
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
/** Default story for NativeSelect (edit/remove by hand if needed) */
export const Default = story(Template)

export const BasicNativeSelect = story(Template, {
  parameters: {
    docs: {
      description: {
        story: `As the user experience can be improved on mobile using the native select of the platform, we allow such pattern. [Docs](https://next.material-ui.com/components/selects/#native-select)`,
      },
    },
  },
})
