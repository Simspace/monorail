// Edit this file to add new stories
import React from 'react'

import type { FadeProps } from '@monorail/components'
import {
  Box,
  Fade,
  FormControlLabel,
  Paper,
  Switch,
} from '@monorail/components'

import { story } from '../helpers/storybook.js'

export default { title: 'Utils/Transitions/Fade', component: Fade }

const box = (
  <Paper sx={{ m: 1 }} elevation={4}>
    <Box component="svg" sx={{ width: 100, height: 100 }}></Box>
  </Paper>
)

const Template = story<FadeProps>(
  (args: Partial<FadeProps>) => {
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
          <Fade in={checked} {...args}>
            {box}
          </Fade>
        </Box>
      </Box>
    )
  },
  { args: {} },
)

export const Default = story(Template)
