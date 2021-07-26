import React from 'react'
import MenuIcon from '@material-ui/icons/Menu'
import { Container } from '../components/Container/Container'
import { AppBar } from '../components/AppBar/AppBar'
import { Toolbar } from '../components/Toolbar/Toolbar'
import { IconButton } from '../components/IconButton/IconButton'
import { Typography } from '../components/Typography/Typography'
import { Button } from '../components/Button/Button'
import { Box } from '../components/Box/Box'

export default {
  title: 'Theme/Full Page Demo',
}

// TODO: this needs to be built-out, but the intention is to have a somewhat realistic looking page
// which can serve as a more built-out visual guide for theming.

export const FullPageDemo = () => {
  return (
    <Container>
      <AppBar>
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
            My Cool New App
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
      <Box mt={8}>
        <Typography variant="h1">This is the title</Typography>
        <Button>Click me</Button>
      </Box>
    </Container>
  )
}
