// Edit this file to add new stories
import React from 'react'

import type { CollapseProps } from '@monorail/components'
import {
  Box,
  Collapse,
  FormControlLabel,
  Paper,
  Switch,
} from '@monorail/components'

import { story } from '../helpers/storybook.js'

export default { title: 'Utils/Transitions/Collapse', component: Collapse }

const box = (
  <Paper sx={{ m: 1 }} elevation={4}>
    <Box component="svg" sx={{ width: 100, height: 100 }}></Box>
  </Paper>
)

const Template = story<CollapseProps>(
  args => {
    const [checked, setChecked] = React.useState(false)

    const handleChange = () => {
      setChecked(prev => !prev)
    }

    return (
      <Box sx={{ height: 300 }}>
        <FormControlLabel
          control={<Switch checked={checked} onChange={handleChange} />}
          label="Show"
        />
        <Box
          sx={{
            '& > :not(style)': {
              display: 'flex',
              justifyContent: 'space-around',
              height: 120,
              width: 250,
            },
          }}
        >
          <div>
            <Collapse in={checked} {...args}>
              {box}
            </Collapse>
            <Collapse in={checked} collapsedSize={40} {...args}>
              {box}
            </Collapse>
          </div>
          <div>
            <Box sx={{ width: '50%' }}>
              <Collapse orientation="horizontal" in={checked}>
                {box}
              </Collapse>
            </Box>
            <Box sx={{ width: '50%' }}>
              <Collapse
                orientation="horizontal"
                in={checked}
                collapsedSize={40}
                {...args}
              >
                {box}
              </Collapse>
            </Box>
          </div>
        </Box>
      </Box>
    )
  },
  {
    args: {},
    muiName: 'MuiCollapse',
  },
)

export const Default = story(Template)
