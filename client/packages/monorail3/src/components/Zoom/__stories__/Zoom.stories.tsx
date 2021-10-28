// Edit this file to add new stories
import React from 'react'
import { Zoom, ZoomProps } from '../Zoom'
import { story } from '../../../__tests__/helpers/storybook'
import { defaultStoryMeta } from './Zoom.stories.gen'
import { Paper } from '../../Paper/Paper'
import { Box } from '../../Box/Box'
import { FormControlLabel } from '../../FormControlLabel/FormControlLabel'
import { Switch } from '../../Switch/Switch'
/**
 * Metadata for Zoom stories - update/extend as needed
 */
export default { ...defaultStoryMeta, title: 'Utils/Transitions/Zoom' }

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
const Template = story<ZoomProps>(
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
          <Zoom in={checked} {...args}>
            {box}
          </Zoom>
          <Zoom
            in={checked}
            style={{ transitionDelay: checked ? '500ms' : '0ms' }}
            {...args}
          >
            {box}
          </Zoom>
        </Box>
      </Box>
    )
  },
  { args: {} },
)
/** Default story for Zoom (edit/remove by hand if needed) */
export const Default = story(Template)
// TODO: add more stories below
