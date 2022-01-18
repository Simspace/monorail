// Edit this file to add new stories
import React from 'react'

import { story } from '../../../__tests__/helpers/storybook'
import { Box } from '../../Box/Box'
import { FormControl } from '../../FormControl/FormControl'
import { InputLabel } from '../../InputLabel/InputLabel'
import { NativeSelect, NativeSelectProps } from '../NativeSelect'
import { defaultStoryMeta } from './NativeSelect.stories.gen'
/**
 * Metadata for NativeSelect stories - update/extend as needed
 */
export default { ...defaultStoryMeta, title: 'Inputs/NativeSelect' }
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
