// Edit this file to add new stories
import React from 'react'
import { story } from '../../../__tests__/helpers/storybook'
import { Select, SelectProps } from '../Select'
import { defaultStoryMeta } from './Select.stories.gen'

import { Box } from '../../Box/Box'
import { FormControl } from '../../FormControl/FormControl'
import { InputLabel } from '../../InputLabel/InputLabel'
import { MenuItem } from '../../MenuItem/MenuItem'

export default { ...defaultStoryMeta }

const Template = story<SelectProps>(
  args => {
    const [age, setAge] = React.useState('')

    const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
      setAge(event.target.value as string)
    }

    return (
      <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Age</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={age}
            label="Age"
            onChange={handleChange}
            {...args}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
      </Box>
    )
  },
  {
    args: {},
  },
)
/** Default story for Select (edit/remove by hand if needed) */
export const Default = story(Template)

export const BasicSelect = story(Template, {
  parameters: {
    docs: {
      description: {
        story: `Menus are positioned over their emitting elements such that the currently selected menu item appears on top of the emitting element.`,
      },
    },
  },
})
