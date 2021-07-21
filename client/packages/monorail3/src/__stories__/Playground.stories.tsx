import React from 'react'
import * as m from '../index'
import MenuIcon from '@material-ui/icons/Menu'

export default {
  title: 'Theme/Full Page Demo',
}

// TODO: this needs to be built-out, but the intention is to have a somewhat realistic looking page
// which can serve as a more built-out visual guide for theming. Also useful for testing the `import * as m`
// for name collisions.

export const FullPageDemo = () => {
  return (
    <m.Container>
      <m.AppBar>
        <m.Toolbar>
          <m.IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </m.IconButton>
          <m.Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            My Cool New App
          </m.Typography>
          <m.Button color="inherit">Login</m.Button>
        </m.Toolbar>
      </m.AppBar>
      <m.Box mt={8}>
        <m.Typography variant="h1">This is the title</m.Typography>
        <m.Button>Click me</m.Button>
      </m.Box>
    </m.Container>
  )
}
