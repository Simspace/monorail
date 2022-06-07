// Edit this file to add new stories
import React from 'react'
import MenuIcon from '@mui/icons-material/Menu'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import Toolbar, { ToolbarProps } from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'

import { story } from '../../../test-helpers/storybook'

/**
 * Metadata for Toolbar stories - update/extend as needed
 */
export default { title: 'Inputs/Toolbar', component: Toolbar }
/**
 * Story template (edit/remove by hand if needed)
 *
 * Note: there should be at least one "Default" story that uses this template with the "story" function.
 * The Template and "story" function allow the story to be setup so that it works with the Controls addon and docgen
 */
const Template = story<ToolbarProps>(args => (
  <Toolbar {...args} sx={{ backgroundColor: 'accent.dark' }}>
    <IconButton
      size="large"
      edge="start"
      color="inherit"
      aria-label="menu"
      sx={{ mr: 2 }}
    >
      <MenuIcon />
    </IconButton>
    <Typography variant="h3" component="div" sx={{ flexGrow: 1 }}>
      News
    </Typography>
    <Button>Login</Button>
  </Toolbar>
))

/** Default story for Toolbar (edit/remove by hand if needed) */
export const Default = story(Template)
