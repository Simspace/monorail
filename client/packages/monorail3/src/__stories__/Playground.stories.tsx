import React from 'react'
import MenuIcon from '@mui/icons-material/Menu'
import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  Toolbar,
  Typography,
} from '@mui/material'

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
          <Typography variant="h3" component="div" sx={{ flexGrow: 1 }}>
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
