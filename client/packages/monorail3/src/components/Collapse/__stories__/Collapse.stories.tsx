// Edit this file to add new stories
import React from 'react'
import {
  Box,
  Collapse,
  CollapseProps,
  FormControlLabel,
  Paper,
  Switch,
} from '@mui/material'

import { story } from '../../../__tests__/helpers/storybook'
/**
 * Metadata for Collapse stories - update/extend as needed
 * This is intended to be exported as story-level metadata from the main .stories.tsx file, like:
 * "export default { ...defaultStoryMeta } // Add/extend as needed
 */
export default { title: 'Utils/Transitions/Collapse', component: Collapse }

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
  },
)
/** Default story for Collapse (edit/remove by hand if needed) */
export const Default = story(Template)
