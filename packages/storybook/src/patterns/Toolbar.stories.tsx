// Edit this file to add new stories
import React from 'react'
import MenuIcon from '@mui/icons-material/Menu'

import type { ToolbarProps } from '@monorail/components'
import { Button, IconButton, Toolbar, Typography } from '@monorail/components'

import { story } from '../helpers/storybook.js'

export default { title: 'Patterns/Toolbar', component: Toolbar }

const Template = story<ToolbarProps>(
  (args) => (
    <Toolbar
      {...args}
      sx={(theme) => ({
        bgcolor: theme.palette.secondary.dark,
        color: theme.palette.getContrastText(theme.palette.secondary.dark),
      })}
    >
      <IconButton size='large' edge='start' color='inherit' aria-label='menu' sx={{ mr: 2 }}>
        <MenuIcon />
      </IconButton>
      <Typography variant='h3' component='div' color='inherit' sx={{ flexGrow: 1 }}>
        News
      </Typography>
      <Button>Login</Button>
    </Toolbar>
  ),
  { muiName: 'MuiToolbar' },
)

export const Default = story(Template)
