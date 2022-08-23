// Edit this file to add new stories
import React from 'react'
import {
  Box,
  FormControlLabel,
  Paper,
  Slide,
  SlideProps,
  Switch,
} from '@monorail/components'

import { story } from '../helpers/storybook'
/**
 * Metadata for Slide stories - update/extend as needed
 */
export default { title: 'Utils/Transitions/Slide', component: Slide }

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
const Template = story<SlideProps>(
  args => {
    const [checked, setChecked] = React.useState(false)

    const handleChange = () => {
      setChecked(prev => !prev)
    }

    return (
      <Box sx={{ height: 180 }}>
        <Box sx={{ width: `calc(100px + 16px)` }}>
          <FormControlLabel
            control={<Switch checked={checked} onChange={handleChange} />}
            label="Show"
          />
          <Slide
            direction="up"
            in={checked}
            mountOnEnter
            unmountOnExit
            {...args}
          >
            {box}
          </Slide>
        </Box>
      </Box>
    )
  },
  { args: {} },
)
/** Default story for Slide (edit/remove by hand if needed) */
export const Default = story(Template)
// TODO: add more stories below
