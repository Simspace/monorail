// Edit this file to add new stories
import React from 'react'
import MenuIcon from '@mui/icons-material/Menu'

import { story } from '../../../__tests__/helpers/storybook'
import { Button } from '../../Button/Button'
import { IconButton } from '../../IconButton/IconButton'
import { Toolbar, ToolbarProps } from '../../Toolbar/Toolbar'
import { Typography } from '../../Typography/Typography'
import { defaultStoryMeta } from './Toolbar.stories.gen'

/**
 * Metadata for Toolbar stories - update/extend as needed
 */
export default { ...defaultStoryMeta, title: 'Inputs/Toolbar' }
/**
 * Story template (edit/remove by hand if needed)
 *
 * Note: there should be at least one "Default" story that uses this template with the "story" function.
 * The Template and "story" function allow the story to be setup so that it works with the Controls addon and docgen
 */
const Template = story<ToolbarProps>(args => (
  <Toolbar {...args}>
    <IconButton
      size="large"
      edge="start"
      color="inherit"
      aria-label="menu"
      sx={{ mr: 2 }}
    >
      <MenuIcon />
    </IconButton>
    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
      News
    </Typography>
    <Button color="inherit">Login</Button>
  </Toolbar>
))

/** Default story for Toolbar (edit/remove by hand if needed) */
export const Default = story(Template)
