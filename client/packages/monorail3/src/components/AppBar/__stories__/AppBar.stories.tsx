// Edit this file to add new stories
import React from 'react'
import { AppBar, AppBarProps } from '../AppBar'
import { story } from '../../../__tests__/helpers/storybook'
import { defaultStoryMeta } from './AppBar.stories.gen'
import { Box } from '../../Box/Box'
import { Toolbar } from '../../Toolbar/Toolbar'
import { Button } from '../../Button/Button'
import { IconButton } from '../../IconButton/IconButton'
import { Typography } from '../../Typography/Typography'
import MenuIcon from '@material-ui/icons/Menu'

/**
 * Metadata for AppBar stories - update/extend as needed
 * This is intended to be exported as story-level metadata from the main .stories.tsx file, like:
 * "export default { ...defaultStoryMeta } // Add/extend as needed
 */
export default { ...defaultStoryMeta }
/**
 * Story template (edit/remove by hand if needed)
 *
 * Note: there should be at least one "Default" story that uses this template with the "story" function.
 * The Template and "story" function allow the story to be setup so that it works with the Controls addon and docgen
 */
const Template = story<AppBarProps>(
  args => {
    return (
      <Box sx={{ flexGrow: 1 }}>
        <AppBar {...args}>
          <Toolbar>
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
        </AppBar>
      </Box>
    )
  },
  { args: { position: 'relative' } },
)

/** Default story for AppBar (edit/remove by hand if needed) */
export const Default = story(Template)
