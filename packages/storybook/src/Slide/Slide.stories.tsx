// Edit this file to add new stories
import React from 'react'

import type { SlideProps } from '@monorail/components'
import {
  Box,
  FormControlLabel,
  Paper,
  Slide,
  Switch,
} from '@monorail/components'

import { story } from '../helpers/storybook.js'

export default { title: 'Utils/Transitions/Slide', component: Slide }

const box = (
  <Paper sx={{ m: 1 }} elevation={4}>
    <Box component="svg" sx={{ width: 100, height: 100 }}></Box>
  </Paper>
)

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

export const Default = story(Template)
