// Edit this file to add new stories
import React from 'react'
import {
  Box,
  FormControlLabel,
  Grow,
  GrowProps,
  Paper,
  Switch,
} from '@monorail/components'

import { story } from '../helpers/storybook'
/**
 * Metadata for Grow stories - update/extend as needed
 */
export default { title: 'Utils/Transitions/Grow', component: Grow }

const box = (
  <Paper sx={{ m: 1 }} elevation={4}>
    <Box component="svg" sx={{ width: 100, height: 100 }}></Box>
  </Paper>
)
/**
 * Story template (edit/remove by hand if needed)
 *
 * Note: there should be at least one "Default" story that uses this template with the "story" function.
 * The Template and "story" function allow the story to be setup so that it works with the Controls addon and docgen
 */
const Template = story<GrowProps>(
  args => {
    const [checked, setChecked] = React.useState(false)

    const handleChange = () => {
      setChecked(prev => !prev)
    }

    return (
      <Box sx={{ height: 180 }}>
        <FormControlLabel
          control={<Switch checked={checked} onChange={handleChange} />}
          label="Show"
        />
        <Box sx={{ display: 'flex' }}>
          <Grow in={checked} {...args}>
            {box}
          </Grow>
          {/* Conditionally applies the timeout prop to change the entry speed. */}
          <Grow
            in={checked}
            style={{ transformOrigin: '0 0 0' }}
            {...(checked ? { timeout: 1000 } : {})}
            {...args}
          >
            {box}
          </Grow>
        </Box>
      </Box>
    )
  },
  { args: {} },
)
/** Default story for Grow (edit/remove by hand if needed) */
export const Default = story(Template)
// TODO: add more stories below
